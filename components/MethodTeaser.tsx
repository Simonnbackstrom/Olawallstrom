import Link from "next/link";

const KEYS = [
  {
    n: "01",
    title: "Rätt riktning",
    body: "Vart är bolaget på väg — och vill du själv dit? Vi stämmer av ägarens mål, bolagets strategi och vardagen.",
  },
  {
    n: "02",
    title: "Rätt struktur",
    body: "Processer, roller och rutiner som gör att bolaget rullar även dagar du inte är där.",
  },
  {
    n: "03",
    title: "Rätt människor",
    body: "En ledning och nyckelpersoner som tar ansvar. Du slutar vara flaskhals.",
  },
  {
    n: "04",
    title: "Rätt lönsamhet",
    body: "Marginal, kassaflöde och tillväxt som håller — oavsett vad konjunkturen gör.",
  },
];

export default function MethodTeaser() {
  return (
    <section className="relative py-[var(--section-y)] sec-marin overflow-hidden">
      {/* Faint Glöd wash */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, rgba(242,106,46,0.18) 0%, transparent 65%)" }}
      />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 mb-16 md:mb-20 items-end">
          <div>
            <p className="reveal eyebrow mb-5">Metoden</p>
            <h2 className="reveal reveal-d1">
              Fyra principer som bygger <em>självgående</em> bolag.
            </h2>
          </div>
          <p className="reveal reveal-d2 text-[1.05rem] md:text-[1.1rem] text-[color:var(--papper)]/75 leading-relaxed max-w-xl lg:justify-self-end">
            Metoden är tränad i åtta egna bolag och förfinad i över 650 mentorskap.
            Allt vilar på fyra bärande principer — enkla att förstå, svåra att skippa.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 rounded-3xl overflow-hidden ring-1 ring-white/10">
          {KEYS.map((key, i) => (
            <article
              key={key.n}
              className={`reveal reveal-d${(i % 4) + 1} group bg-[color:var(--marin)] p-8 md:p-10 transition-colors hover:bg-[color:var(--marin-2)]`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="font-[family-name:var(--font-lora)] font-semibold italic text-[3rem] md:text-[3.6rem] leading-none text-[color:var(--glod)]">
                  {key.n}
                </div>
                <div className="h-10 w-10 rounded-full border border-white/20 inline-flex items-center justify-center text-[color:var(--papper)]/50 group-hover:border-[color:var(--glod)] group-hover:text-[color:var(--glod)] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[color:var(--papper)]">{key.title}</h3>
              <p className="mt-4 text-[1rem] text-[color:var(--papper)]/75 leading-relaxed">
                {key.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/metod"
            className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--papper)] hover:text-[color:var(--glod)] transition-colors"
          >
            Läs hela metoden
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
