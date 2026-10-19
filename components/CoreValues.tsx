const VALUES = [
  {
    title: "Äkta",
    body: "Jag är närvarande i varje samtal och säger som det är. Det du ser är den jag är.",
  },
  {
    title: "Klarhet",
    body: "Jag hjälper dig att se klart. Jag gör det krångliga enkelt, så att det blir tydligt vad som är viktigt.",
  },
  {
    title: "Genomförande",
    body: "En bra plan räcker inte. Jag följer upp tills sakerna faktiskt är gjorda.",
  },
  {
    title: "Frihet",
    body: "Jag hjälper dig att skapa frihet, både i vardagen och i hur du driver ditt bolag.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="max-w-5xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="reveal reveal-d1 md:whitespace-nowrap">
            Fyra ord som styr <em>allt</em> jag gör.
          </h2>
        </div>

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className={`reveal reveal-d${(i % 4) + 1} h-full rounded-2xl bg-white border border-[color:var(--border-soft)] px-6 py-9 text-center shadow-[0_18px_40px_-30px_rgba(23,59,96,0.35)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(23,59,96,0.4)]`}
            >
              <span
                aria-hidden
                className="relative mx-auto mb-6 flex h-12 w-12 items-center justify-center font-[family-name:var(--font-lora)] italic text-[1.15rem] text-[color:var(--marin)]"
              >
                <svg viewBox="0 0 48 48" fill="none" className="absolute inset-0 h-full w-full text-[color:var(--glod)]">
                  <path d="M 33 7 A 19 19 0 1 0 42 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {i + 1}
              </span>
              <h3 style={{ fontSize: "clamp(1.4rem, 1.9vw, 1.6rem)" }}>{v.title}</h3>
              <p className="mt-3 text-ink-soft text-[0.98rem] leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
