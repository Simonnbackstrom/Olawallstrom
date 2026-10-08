import Link from "next/link";

const POINTS = [
  "Du blir flaskhalsen i nästan varje viktigt beslut.",
  "Teamet väntar på dig istället för att ta egna initiativ.",
  "Du jobbar mer men bolaget rör sig ändå inte snabbare.",
  "Du kan vara ledig fysiskt — men aldrig mentalt.",
  "Bolaget växer. Och ditt beroende av bolaget också.",
];

export default function PainPoints() {
  return (
    <section className="py-[var(--section-y)] sec-marin relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(220,232,243,0.08) 0%, transparent 65%)" }}
      />

      <div className="container-site relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="reveal eyebrow mb-5 justify-center">Känner du igen dig?</p>
          <h2 className="reveal reveal-d1">
            Du leder ett miljonbolag <em>på samma sätt som när du startade.</em>
          </h2>
          <p className="reveal reveal-d2 mt-6 text-[color:var(--papper)]/75 text-[1.1rem]">
            Då är problemet inte att du behöver jobba hårdare.
          </p>
        </div>

        <ul className="max-w-2xl mx-auto space-y-3">
          {POINTS.map((p, i) => (
            <li
              key={p}
              className={`reveal reveal-d${(i % 5) + 1} flex gap-4 items-start rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-6 py-5`}
            >
              <span className="shrink-0 mt-0.5 h-7 w-7 inline-flex items-center justify-center rounded-full bg-[color:var(--glod)]/20 text-[color:var(--glod)] font-bold text-sm">
                !
              </span>
              <p className="text-[1rem] md:text-[1.05rem] text-[color:var(--papper)]/90 leading-relaxed">
                {p}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <p className="reveal reveal-d2 text-[1.1rem] md:text-[1.2rem] text-[color:var(--papper)]/90 max-w-2xl mx-auto">
            Problemet är att bolaget fortfarande är{" "}
            <strong className="font-[family-name:var(--font-lora)] italic font-semibold text-[color:var(--glod)]">
              byggt runt dig
            </strong>
            .
          </p>
          <div className="reveal reveal-d3 mt-10">
            <Link href="/strategisession" className="btn-primary">
              Boka ett samtal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
