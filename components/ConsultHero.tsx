import Image from "next/image";

export default function ConsultHero() {
  return (
    <section className="relative bg-papper overflow-hidden">
      {/* MOBIL: fullbleed hero med glass-card över bilden */}
      <div className="lg:hidden">
        <div className="relative w-full h-[88vh] min-h-[620px] max-h-[840px] overflow-hidden">
          <Image
            src="/images/ola-hero-biljard.jpg"
            alt="Ola Wallström ler, håller en biljardkö i ett industriellt rum"
            fill
            quality={92}
            priority
            sizes="100vw"
            className="object-cover object-[center_12%] scale-[1.3]"
          />
          {/* Top fade så fixed navbar alltid är läsbar mot bilden. */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color:var(--papper)] to-transparent"
          />

          {/* Glass-card + CTA ligger nertill, över bilden. */}
          <div className="absolute inset-x-0 bottom-6 px-4 flex flex-col items-center gap-4">
            <div className="reveal reveal-d1 w-full max-w-md rounded-2xl bg-[color:var(--papper)]/85 backdrop-blur-md ring-1 ring-white/50 shadow-[0_18px_42px_-20px_rgba(23,59,96,0.35)] px-5 py-6 text-center">
              <h1
                className="text-[color:var(--marin)] hyphens-none [word-break:keep-all]"
                style={{ fontSize: "clamp(1.5rem, 6vw, 2rem)" }}
              >
                Växa ditt bolag förbi 10 miljoner. <em>Utan att slita mer.</em>
              </h1>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                Nästa nivå ligger inte i att jobba hårdare — utan i att bli onödig i din egen vardag.
              </p>
            </div>

            <a
              href="https://calendly.com/olawallstrom/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-d2 btn-primary"
            >
              Boka kostnadsfritt strategisamtal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats under hero på papper */}
        <div className="container-site py-10">
          <dl className="reveal grid grid-cols-3 gap-4 text-center max-w-md mx-auto">
            {[
              { n: "650+", l: "coachade ägare" },
              { n: "25 år", l: "som entreprenör" },
              { n: "8", l: "egna bolag" },
            ].map((p) => (
              <div key={p.n} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-[0.78rem] text-ink-soft leading-snug">{p.l}</dt>
                <dd className="font-[family-name:var(--font-heading)] font-semibold text-[1.6rem] leading-none text-[color:var(--marin)]">
                  {p.n}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* DESKTOP: side-by-side med biljardbilden */}
      <div className="hidden lg:block pt-32 pb-28">
        <div className="container-site relative">
          <div className="grid grid-cols-[1.15fr_1fr] gap-20 items-center">
            <div className="max-w-2xl mx-auto text-center pt-16">
              <h1 className="reveal reveal-d1 text-[color:var(--marin)] hyphens-none [word-break:keep-all]">
                Växa ditt bolag förbi 10 miljoner. <em>Utan att slita mer.</em>
              </h1>

              <p className="reveal reveal-d2 mt-8 text-[1.15rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
                Du har byggt något som faktiskt fungerar. Kunderna kommer, teamet drar,
                omsättningen är över 10 miljoner. Men du känner det, allt går via dig. Ju mer
                bolaget växer desto mer sliter du. Nästa nivå ligger inte i att du jobbar
                hårdare, utan i att du blir onödig i din egen vardag.
              </p>

              <div className="reveal reveal-d3 mt-10 flex items-center justify-center gap-4">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Boka kostnadsfritt strategisamtal
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
              </div>

              <dl className="reveal reveal-d4 mt-12 flex justify-center gap-14 text-center">
                {[
                  { n: "650+", l: "coachade ägare" },
                  { n: "25 år", l: "som entreprenör" },
                  { n: "8", l: "egna bolag" },
                ].map((p) => (
                  <div key={p.n} className="flex flex-col-reverse justify-end">
                    <dt className="mt-2 text-[0.85rem] text-muted leading-snug whitespace-nowrap">{p.l}</dt>
                    <dd className="font-[family-name:var(--font-heading)] font-semibold text-[2.3rem] leading-none text-[color:var(--marin)]">
                      {p.n}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] max-w-[520px] mx-auto overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/ola-hero-biljard.jpg"
                  alt="Ola Wallström ler, håller en biljardkö i ett industriellt rum"
                  fill
                  quality={92}
                  priority
                  sizes="520px"
                  className="object-cover object-[50%_30%] scale-[1.35]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
