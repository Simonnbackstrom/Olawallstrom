import Image from "next/image";

const QUESTIONS = [
  {
    q: "Var står bolaget i dag?",
    a: "En ärlig bild av intäkter, team och vad som tar din tid.",
  },
  {
    q: "Vart vill du?",
    a: "En riktning som passar dina mål, för bolaget och för livet runt omkring.",
  },
  {
    q: "Vad står i vägen?",
    a: "Identifierar de två, tre saker som bromsar mest.",
  },
];

export default function NeedsAnalysis() {
  return (
    <section className="py-[var(--section-y)] sec-sand">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="reveal">Vi börjar med att ta reda på vad som är viktigt för dig.</h2>
          <p className="reveal reveal-d1 mt-6 text-[1.08rem] text-ink leading-relaxed">
            Jag säljer inga färdiga lösningar. Första steget är alltid ett kostnadsfritt strategisamtal på 30
            minuter, där vi går igenom tre frågor.
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-2 items-stretch max-w-5xl mx-auto">
          <div className="reveal relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] rounded-3xl overflow-hidden bg-papper">
            <Image
              src="/images/ola-samtal-skratt.jpg"
              alt="Ola Wallström antecknar och skrattar tillsammans med två bolagsägare"
              fill
              quality={90}
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover object-[55%_40%]"
            />
          </div>

          <div className="reveal reveal-d1 flex flex-col rounded-3xl bg-white px-7 py-8 md:px-10 md:py-10 shadow-[0_24px_60px_-38px_rgba(23,59,96,0.45)]">
            <ol className="flex-1">
              {QUESTIONS.map((item, i) => (
                <li
                  key={item.q}
                  className={`flex items-start gap-5 py-6 first:pt-0 ${i > 0 ? "border-t border-[color:var(--border-soft)]" : ""}`}
                >
                  <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[color:var(--glod)] font-[family-name:var(--font-heading)] font-semibold text-[1.05rem] text-[color:var(--glod)]">
                    {i + 1}
                  </span>
                  <div className="text-left">
                    <h3
                      className="font-[family-name:var(--font-heading)] font-semibold leading-snug"
                      style={{ fontSize: "1.3rem" }}
                    >
                      {item.q}
                    </h3>
                    <p className="mt-1.5 text-[1.02rem] text-ink leading-relaxed">{item.a}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="pt-6 border-t border-[color:var(--border-soft)] text-center">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center !py-4"
              >
                Boka ett strategisamtal med mig
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <p className="mt-4 text-[0.88rem] text-muted">
                30 minuter på Zoom. Kostnadsfritt. Du går därifrån med konkreta nästa steg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
