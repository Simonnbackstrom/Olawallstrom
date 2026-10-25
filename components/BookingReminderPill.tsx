"use client";

import { useEffect, useState } from "react";

/*
 * Floating "Boka 30 min" pill. Appears only after the user has scrolled past
 * the inline Calendly section (#boka) and hides once the FAQ section (which has
 * its own CTA) is in view — so we never double up with another visible CTA.
 */
export default function BookingReminderPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const booking = document.getElementById("boka");
      const secondCta = document.getElementById("boka-cta");
      if (!booking) return;
      const scrolledPast = booking.getBoundingClientRect().bottom < 0;
      const secondCtaInView = secondCta ? secondCta.getBoundingClientRect().top < window.innerHeight * 0.85 : false;
      setVisible(scrolledPast && !secondCtaInView);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <a
        href="#boka"
        tabIndex={visible ? 0 : -1}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[color:var(--marin)] text-[color:var(--papper)] px-5 py-3 text-[0.92rem] font-semibold shadow-[0_18px_40px_-12px_rgba(23,59,96,0.55)] ring-1 ring-white/10 hover:bg-[color:var(--glod)] transition-colors"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Boka kostnadsfritt strategisamtal
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </a>
    </div>
  );
}
