import Link from "next/link";

const KEYS = [
  {
    n: "01",
    title: "Rätt riktning",
    body: "Vart är bolaget på väg — och är ägarens mål, bolagets strategi och teamets vardag i linje?",
  },
  {
    n: "02",
    title: "Rätt struktur",
    body: "Processer, roller och styrmodeller som gör att bolaget går av sig självt — även när du är borta.",
  },
  {
    n: "03",
    title: "Rätt människor",
    body: "Ledningsgrupp och nyckelpersoner som tar ansvar — så du slipper vara flaskhalsen.",
  },
  {
    n: "04",
    title: "Rätt lönsamhet",
    body: "Marginal, kassaflöde och tillväxt som håller — oavsett konjunktur.",
  },
];

export default function MethodTeaser() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-site">
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="reveal eyebrow mb-4">Metoden i korthet</p>
          <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4.4vw,52px)] leading-[1.05] text-[#0B0E14]">
            Fyra nycklar som bygger självgående bolag.
          </h2>
          <p className="reveal reveal-d2 mt-5 text-[17px] text-[#0B0E14]/70 leading-relaxed">
            &ldquo;Framgångsrikt Entreprenörskap&rdquo; är min metod — tränad i åtta egna bolag
            och förfinad i 650+ mentorskap. Allt vilar på fyra bärande nycklar.
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
          {KEYS.map((key, i) => (
            <article
              key={key.n}
              className={`reveal reveal-d${(i % 4) + 1} group rounded-2xl p-7 md:p-8 ring-1 ring-[#E2DDD8] bg-[#F7F4F0]/60 hover:bg-[#F7F4F0] transition-colors`}
            >
              <div className="flex items-baseline gap-4">
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[#E8500A] text-sm tracking-widest">
                  {key.n}
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] md:text-[24px] leading-tight text-[#0B0E14]">
                  {key.title}
                </h3>
              </div>
              <p className="mt-4 text-[15.5px] text-[#0B0E14]/70 leading-relaxed">
                {key.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
          <Link
            href="/metod"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0B0E14] hover:text-[#E8500A] transition-colors"
          >
            Djupdyk i metoden
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
