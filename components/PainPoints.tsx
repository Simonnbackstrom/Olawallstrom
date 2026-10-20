const POINTS = [
  "Nästan varje viktigt beslut går fortfarande via mig.",
  "Teamet väntar på mig i stället för att ta egna initiativ.",
  "Jag jobbar mer än någonsin, men bolaget rör sig inte snabbare.",
  "Jag kan vara ledig fysiskt, men aldrig mentalt.",
  "Bolaget växer, men det är fortfarande lika beroende av mig.",
];

export default function PainPoints() {
  return (
    <section className="py-[var(--section-y)] sec-marin">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="reveal">
            Du leder ett växande bolag på <em>samma sätt</em> som när du startade.
          </h2>
          <p className="reveal reveal-d1 mt-6 text-[color:var(--papper)]/75 text-[1.05rem] md:text-[1.15rem] leading-relaxed">
            Då är problemet inte att du behöver jobba hårdare. Känner du igen någon av de här
            tankarna?
          </p>
        </div>

        <ul className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4 md:gap-5">
          {POINTS.map((p, i) => (
            <li
              key={p}
              className={`reveal reveal-d${(i % 5) + 1} w-full md:w-[calc(50%-0.625rem)] flex flex-col items-center justify-center text-center rounded-2xl bg-white/[0.06] ring-1 ring-white/12 px-8 py-10 md:px-11`}
            >
              <span aria-hidden className="font-[family-name:var(--font-heading)] text-[3.2rem] leading-[0.55] text-[color:var(--glod)]">
                &ldquo;
              </span>
              <p className="mt-5 font-[family-name:var(--font-heading)] text-[1.18rem] md:text-[1.3rem] leading-relaxed text-[color:var(--papper)]/90">
                {p}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <p className="reveal reveal-d2 font-[family-name:var(--font-heading)] text-[1.35rem] md:text-[1.6rem] leading-snug text-[color:var(--papper)] max-w-2xl mx-auto">
            Problemet är att bolaget fortfarande är{" "}
            <em className="text-[color:var(--glod)]">byggt runt dig</em>.
          </p>
          <div className="reveal reveal-d3 mt-10">
            <a
              href="https://calendly.com/olawallstrom/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Boka ett samtal med mig
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
