"use client";

import { useEffect, useState } from "react";

type Slot = { iso: string; dateLabel: string; timeLabel: string };

export default function NextSlotsChips() {
  const [slots, setSlots] = useState<Slot[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/next-slots")
      .then((r) => (r.ok ? r.json() : { slots: [] }))
      .then((data: { slots: Slot[] }) => {
        if (!cancelled) setSlots(data.slots || []);
      })
      .catch(() => {
        if (!cancelled) setSlots([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!slots || slots.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-[0.86rem] text-[color:var(--papper)]/70">Nästa lediga tider</p>
      <div className="flex flex-wrap justify-center gap-2">
        {slots.map((s) => (
          <a
            key={s.iso}
            href="#boka"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--glod)] px-4 py-2 text-[0.86rem] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(242,106,46,0.7)] transition hover:-translate-y-0.5"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {s.dateLabel} · {s.timeLabel}
          </a>
        ))}
      </div>
    </div>
  );
}
