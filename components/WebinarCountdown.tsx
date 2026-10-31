"use client";

import { useEffect, useState } from "react";
import { WEBINAR } from "@/lib/webinar";

type Props = {
  tone?: "light" | "dark";
};

type Left = { d: number; h: number; m: number } | null;

function compute(): Left {
  const diff = new Date(WEBINAR.startISO).getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0 };
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff % 86_400_000) / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
  };
}

export default function WebinarCountdown({ tone = "dark" }: Props) {
  const [left, setLeft] = useState<Left>(null);

  useEffect(() => {
    setLeft(compute());
    const id = setInterval(() => setLeft(compute()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!left) {
    // Reserve the same vertical space during SSR / first paint to avoid layout shift.
    return <div aria-hidden className="h-[72px] md:h-[80px]" />;
  }

  const started = left.d === 0 && left.h === 0 && left.m === 0;

  const cellBg = tone === "dark" ? "bg-white/10 ring-white/15" : "bg-[color:var(--marin)]/5 ring-[color:var(--marin)]/10";
  const number = tone === "dark" ? "text-[color:var(--papper)]" : "text-[color:var(--marin)]";
  const unit = tone === "dark" ? "text-[color:var(--papper)]/60" : "text-muted";
  const eyebrow = tone === "dark" ? "text-[color:var(--glod)]" : "text-[color:var(--glod)]";

  if (started) {
    return (
      <div className="flex flex-col items-center">
        <p className={`text-[0.72rem] uppercase tracking-[0.18em] font-semibold ${eyebrow}`}>
          Live just nu
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center" aria-label={`Nedräkning till webinaret: ${left.d} dagar, ${left.h} timmar, ${left.m} minuter kvar`}>
      <p className={`mb-2 text-[0.68rem] md:text-[0.72rem] uppercase tracking-[0.18em] font-semibold ${eyebrow}`}>
        Startar om
      </p>
      <div className="flex items-start gap-2 md:gap-3">
        <Cell n={left.d} label={left.d === 1 ? "dag" : "dagar"} cellBg={cellBg} number={number} unit={unit} />
        <Cell n={left.h} label={left.h === 1 ? "timme" : "tim"} cellBg={cellBg} number={number} unit={unit} />
        <Cell n={left.m} label="min" cellBg={cellBg} number={number} unit={unit} />
      </div>
    </div>
  );
}

function Cell({
  n,
  label,
  cellBg,
  number,
  unit,
}: {
  n: number;
  label: string;
  cellBg: string;
  number: string;
  unit: string;
}) {
  return (
    <div className={`min-w-[52px] md:min-w-[60px] rounded-xl px-2.5 py-1.5 ring-1 text-center ${cellBg}`}>
      <div className={`font-[family-name:var(--font-heading)] font-semibold text-[1.4rem] md:text-[1.6rem] leading-none tabular-nums ${number}`}>
        {String(n).padStart(2, "0")}
      </div>
      <div className={`mt-1 text-[0.68rem] uppercase tracking-[0.12em] ${unit}`}>{label}</div>
    </div>
  );
}
