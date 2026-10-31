"use client";

import { useEffect, useState } from "react";
import { WEBINAR } from "@/lib/webinar";

export default function WebinarStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Appear once the user has scrolled past the hero form.
      const past = window.scrollY > 700;
      // Hide when the final signup section is on screen — the form itself is
      // right there, no need to point the user elsewhere.
      const anchor = document.getElementById("anmal");
      const nearBottom = anchor
        ? anchor.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setVisible(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 pointer-events-none transition-[opacity,transform] duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#anmal"
        className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl bg-[color:var(--glod)] text-white pl-4 pr-4 py-3 shadow-[0_18px_40px_-14px_rgba(23,59,96,0.55)]"
      >
        <span className="min-w-0 flex-1 text-left leading-tight">
          <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-white/80">
            {WEBINAR.dateLabel}
          </span>
          <span className="block font-semibold text-[0.98rem] text-white">
            Anmäl till kostnadsfritt webinar
          </span>
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </a>
    </div>
  );
}
