import Link from "next/link";
import Image from "next/image";

export default function ConsultHero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1 max-w-xl">
            <p className="reveal eyebrow mb-6">Mentor för bolagsägare 10–50 Mkr</p>

            <h1 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-[-0.03em] text-[clamp(40px,6.4vw,84px)] leading-[0.98] text-[#0B0E14]">
              Självgående bolag.{" "}
              <span className="block text-[#E8500A]">På riktigt.</span>
            </h1>

            <p className="reveal reveal-d2 mt-8 text-[18px] md:text-[19px] text-[#0B0E14]/70 leading-relaxed">
              Jag coachar bolagsägare att bygga företag som fungerar även när ägaren
              inte är där. 25 år som serieentreprenör. 8 egna bolag. 650+ bolagsägare.
            </p>

            <div className="reveal reveal-d3 mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link href="/strategisession" className="btn-primary">
                Boka strategisamtal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </Link>
              <Link href="/metod" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0B0E14] hover:text-[#E8500A] transition-colors px-2 py-3">
                Så fungerar metoden
                <svg
                  width="14"
                  height="14"
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

            {/* Proof row */}
            <div className="reveal reveal-d4 mt-14 pt-8 border-t border-[#E2DDD8] grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[28px] md:text-[32px] leading-none text-[#0B0E14]">
                  650+
                </div>
                <div className="mt-2 text-[12px] text-[#6B7280] leading-snug">
                  Coachade<br />bolagsägare
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[28px] md:text-[32px] leading-none text-[#0B0E14]">
                  25 år
                </div>
                <div className="mt-2 text-[12px] text-[#6B7280] leading-snug">
                  Som serie­<br />entreprenör
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[28px] md:text-[32px] leading-none text-[#0B0E14]">
                  8
                </div>
                <div className="mt-2 text-[12px] text-[#6B7280] leading-snug">
                  Bolag jag<br />byggt själv
                </div>
              </div>
            </div>
          </div>

          {/* Portrait column */}
          <div className="order-1 lg:order-2 relative">
            {/* Soft background shape */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[3rem] bg-[#F7F4F0]"
            />
            <div className="relative aspect-[4/5] max-w-[520px] mx-auto">
              <Image
                src="/images/ola-studio.jpg"
                alt="Ola Wallström"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover object-top"
              />
              {/* Signature badge */}
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-white ring-1 ring-[#E2DDD8] rounded-2xl px-5 py-4 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]">
                <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#E8500A]">
                  Framgångsrikt entreprenörskap
                </div>
                <div className="mt-1 font-[family-name:var(--font-manrope)] font-extrabold text-[15px] text-[#0B0E14]">
                  Olas metod — 4 nycklar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
