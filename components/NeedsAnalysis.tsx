const QUESTIONS = [
  {
    q: "Var står bolaget idag?",
    a: "Vi börjar med en ärlig nulägesbild: intäkter, team, flaskhalsar och vad som faktiskt stjäl din tid.",
  },
  {
    q: "Vart vill du?",
    a: "Vi sätter en riktning du tror på. Inte en standardplan, utan en plan som matchar ditt liv och dina mål som ägare.",
  },
  {
    q: "Vad står i vägen?",
    a: "Vi identifierar de två till tre grejer som faktiskt bromsar, och lägger upp vad som ska göras först.",
  },
];

export default function NeedsAnalysis() {
  return (
    <section className="py-[var(--section-y)] sec-sand">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="reveal eyebrow mb-5 justify-center">Behovsanalys</p>
          <h2 className="reveal reveal-d1">
            Innan vi börjar, <em>tar vi reda på vad du faktiskt behöver.</em>
          </h2>
          <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
            Jag jobbar inte med färdiga paket. Vi startar alltid med en kostnadsfri
            behovsanalys där vi ringar in vad som skulle flytta ditt bolag mest, innan
            vi pratar program.
          </p>
        </div>

        <div className="relative grid gap-5 md:gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          {QUESTIONS.map((item, i) => (
            <article
              key={item.q}
              className={`reveal reveal-d${i + 1} relative rounded-3xl bg-white border border-[color:var(--border-soft)] p-7 md:p-9 shadow-[0_18px_42px_-24px_rgba(23,59,96,0.18)]`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-[color:var(--marin)] text-[color:var(--papper)] font-[family-name:var(--font-lora)] font-semibold text-[1.1rem]">
                  {i + 1}
                </div>
                <div className="eyebrow-upper">Steg {String(i + 1).padStart(2, "0")}</div>
              </div>
              <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.25rem] md:text-[1.35rem] leading-tight text-[color:var(--marin)]">
                {item.q}
              </h3>
              <p className="mt-4 text-[0.98rem] text-ink-soft leading-relaxed">{item.a}</p>
              {i < QUESTIONS.length - 1 && (
                <svg
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[color:var(--glod)] bg-sand rounded-full"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              )}
            </article>
          ))}
        </div>

        <div className="reveal reveal-d4 mt-14 max-w-2xl mx-auto text-center">
          <p className="text-[1rem] text-ink-soft leading-relaxed">
            30 minuter på Zoom. Kostnadsfritt. Du går därifrån med konkreta nästa steg,
            oavsett om vi fortsätter jobba ihop eller inte.
          </p>
          <div className="mt-7">
            <a
              href="https://calendly.com/olawallstrom/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Boka din behovsanalys
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
