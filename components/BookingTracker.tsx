"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/metaPixel";

type Props = {
  /** Set only when Calendly redirected here right after a booking. */
  bookingId: string;
  firstName: string;
  email: string;
};

/* Requests already in flight, so a double render never sends twice. */
const inFlight = new Set<string>();

function once(key: string) {
  try {
    if (window.localStorage.getItem(key)) return false;
  } catch {
    // Storage blocked: carry on, at worst a reload counts twice.
  }
  return true;
}

function remember(key: string) {
  try {
    window.localStorage.setItem(key, "1");
  } catch {}
}

/*
 * After a Calendly booking (Calendly redirects here with the event details):
 * - Meta: Schedule + Lead, once per booking.
 * - Brevo: adds the person to "Strategisamtal bokade", which sends the prep email.
 * Calendly opens in its own tab, so the site cannot see the booking any other way.
 */
export default function BookingTracker({ bookingId, firstName, email }: Props) {
  useEffect(() => {
    if (!bookingId) return;

    const metaKey = `meta-booking-${bookingId}`;
    if (once(metaKey)) {
      remember(metaKey);
      const params = { content_name: "Strategisession" };
      trackMetaEvent("Schedule", params);
      trackMetaEvent("Lead", params);
    }

    const brevoKey = `brevo-booking-${bookingId}`;
    if (email && once(brevoKey) && !inFlight.has(brevoKey)) {
      inFlight.add(brevoKey);
      fetch("/api/strategisamtal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
        keepalive: true,
      })
        .then((r) => r.json())
        .then((r) => {
          // Only remember a confirmed signup, so a failed one is retried on reload.
          if (r?.ok === true) remember(brevoKey);
        })
        .catch(() => {})
        .finally(() => inFlight.delete(brevoKey));
    }
  }, [bookingId, firstName, email]);

  return null;
}
