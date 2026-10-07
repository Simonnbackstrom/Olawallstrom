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
    <section className="relative py-24 md:py-32 bg-[#0B0E14] text-white overflow-hidden">
      {/* Subtle gradient accent */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(232,80,10,0.18) 0%, transparent 65%)" }}
      />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 mb-16 md:mb-20 items-end">
          <div>
            <p className="reveal eyebrow mb-5">Metoden</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-[-0.02em] text-[clamp(32px,5vw,60px)] leading-[1.02]">
              Fyra nycklar som bygger självgående bolag.
            </h2>
          </div>
          <p className="reveal reveal-d2 text-[17px] md:text-[18px] text-white/70 leading-relaxed max-w-xl lg:justify-self-end">
            &ldquo;Framgångsrikt Entreprenörskap&rdquo; är min metod — tränad i åtta egna bolag
            och förfinad i 650+ mentorskap. Allt vilar på fyra bärande nycklar.
          </p>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 rounded-3xl overflow-hidden ring-1 ring-white/10">
          {KEYS.map((key, i) => (
            <article
              key={key.n}
              className={`reveal reveal-d${(i % 4) + 1} group bg-[#0B0E14] p-8 md:p-10 transition-colors hover:bg-[#161921]`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[64px] md:text-[80px] leading-none text-[#E8500A]/90 tracking-tight">
                  {key.n}
                </div>
                <div className="h-10 w-10 rounded-full border border-white/15 inline-flex items-center justify-center text-white/40 group-hover:border-[#E8500A] group-hover:text-[#E8500A] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[24px] md:text-[26px] tracking-tight text-white">
                {key.title}
              </h3>
              <p className="mt-4 text-[15.5px] text-white/70 leading-relaxed">
                {key.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/metod"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[#E8500A] transition-colors"
          >
            Djupdyk i hela metoden
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
