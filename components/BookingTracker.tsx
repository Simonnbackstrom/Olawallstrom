"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/metaPixel";

/*
 * Booking conversion for Meta. Calendly opens in its own tab, so the site cannot
 * see the booking itself. Instead Calendly redirects the visitor here after
 * booking ("Redirect to an external site" with event details passed on), and
 * this fires Schedule + Lead once per booking.
 */
export default function BookingTracker({ bookingId }: { bookingId: string }) {
  useEffect(() => {
    if (!bookingId) return;
    const key = `meta-booking-${bookingId}`;
    try {
      if (window.localStorage.getItem(key)) return;
      window.localStorage.setItem(key, "1");
    } catch {
      // Storage blocked: still report, at worst a reload counts twice.
    }
    const params = { content_name: "Strategisession" };
    trackMetaEvent("Schedule", params);
    trackMetaEvent("Lead", params);
  }, [bookingId]);

  return null;
}
