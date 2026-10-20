import Link from "next/link";

const KEYS = [
  {
    n: "01",
    title: "Rätt riktning",
    body: "Vart är bolaget på väg, och vill du själv dit? Vi stämmer av ägarens mål, bolagets strategi och vardagen.",
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
    body: "Marginal, kassaflöde och tillväxt som håller, oavsett vad konjunkturen gör.",
  },
];

export default function MethodTeaser() {
  return (
    <section className="relative py-[var(--section-y)] sec-marin overflow-hidden">
      <div className="container-site relative">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="reveal">
            Fyra principer som bygger <em>självgående</em> bolag.
          </h2>
          <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.1rem] text-[color:var(--papper)]/75 leading-relaxed">
            VIP-coachingen har vuxit fram i åtta egna bolag och fler än 650 mentorskap. Allt vilar
            på fyra principer, enkla att förstå men svåra att hoppa över.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 rounded-3xl overflow-hidden ring-1 ring-white/10 max-w-5xl mx-auto">
          {KEYS.map((key, i) => (
            <article
              key={key.n}
              className={`reveal reveal-d${(i % 4) + 1} bg-[color:var(--marin)] px-8 py-10 md:px-10 md:py-12 text-center`}
            >
              <div className="font-[family-name:var(--font-heading)] font-semibold text-[2.6rem] md:text-[3rem] leading-none text-[color:var(--glod)]">
                {key.n}
              </div>
              <h3 className="mt-4 text-[color:var(--papper)]">{key.title}</h3>
              <p className="mt-3 text-[1rem] text-[color:var(--papper)]/75 leading-relaxed max-w-sm mx-auto">
                {key.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/vip-coaching"
            className="group inline-flex items-center gap-2 py-2.5 text-[0.95rem] font-semibold text-[color:var(--papper)] hover:text-[color:var(--glod)] transition-colors"
          >
            Läs mer om VIP-coachingen
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
