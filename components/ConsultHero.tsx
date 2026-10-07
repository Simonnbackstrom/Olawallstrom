import Link from "next/link";
import Image from "next/image";

export default function ConsultHero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-white overflow-hidden">
      <div className="container-site">
        <div className="max-w-4xl">
          <p className="reveal eyebrow mb-6">Mentor för bolagsägare 10–50 Mkr</p>

          <h1 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(36px,6vw,76px)] leading-[1.02] text-[#0B0E14]">
            Jag hjälper bolagsägare bygga{" "}
            <span className="text-[#E8500A]">självgående & lönsamma bolag</span>.
          </h1>

          <p className="reveal reveal-d2 mt-7 text-[18px] md:text-xl text-[#0B0E14]/70 max-w-2xl leading-relaxed">
            25 år som serieentreprenör. 8 egna bolag. 650+ coachade bolagsägare.
            Det jag lär ut har jag själv gjort — på gott och ont.
          </p>

          <div className="reveal reveal-d3 mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link href="/strategisession" className="btn-primary">
              Boka strategisamtal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </Link>
            <Link href="/metod" className="btn-ghost">
              Så fungerar metoden
            </Link>
          </div>
        </div>

        <div className="reveal reveal-d4 mt-16 md:mt-20 relative">
          <div className="relative aspect-[21/10] md:aspect-[21/9] rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] bg-[#EDE9E3]">
            <Image
              src="/images/ola-hero.jpg"
              alt="Ola Wallström"
              fill
              priority
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
