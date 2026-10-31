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
            Tillväxthjulet har vuxit fram genom mina erfarenheter från de åtta bolag jag grundat och de 650+
            företag jag har jobbat med. Allt vilar på fyra principer. Enkla att förstå, men inte
            alltid så lätta att genomföra.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 rounded-3xl overflow-hidden ring-1 ring-white/10 max-w-5xl mx-auto">
          {KEYS.map((key, i) => (
            <article
              key={key.n}
              className={`reveal reveal-d${(i % 4) + 1} bg-[color:var(--marin)] px-6 py-8 md:px-10 md:py-12 text-center`}
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

      </div>
    </section>
  );
}
