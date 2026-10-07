import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";
import StatsBand from "@/components/StatsBand";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Resultat & Case",
  description:
    "Riktiga resultat från bolag jag coachat. Case, testimonials och nyckeltal från mitt arbete som mentor för bolagsägare i segmentet 10–50 Mkr.",
  alternates: { canonical: "/resultat" },
};

export default function ResultatPage() {
  return (
    <>
      <PageHero
        eyebrow="Resultat & case"
        title={
          <>
            Resultat är <em className="not-italic text-[#E8500A]">inte löften</em> — det är siffror på pappret.
          </>
        }
        intro="Det här är ett urval av bolag jag jobbat med och den förflyttning vi gjort tillsammans. Alla case bygger på verkliga samarbeten där ägaren själv valt att stå framför."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <div className="reveal rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] bg-[#0B0E14] text-white">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="p-10 md:p-14">
                <div className="eyebrow mb-5">Headline-case · Alex</div>
                <h2 className="font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(32px,4.5vw,56px)] leading-[1.05]">
                  <span className="text-[#E8500A]">19 Mkr</span>
                  <span className="text-white/50"> → </span>
                  <span className="text-[#E8500A]">1,9 Mdr</span>
                </h2>
                <p className="mt-5 text-[17px] text-white/80 leading-relaxed max-w-md">
                  Från ett tjänstebolag runt tjugo miljoner till ett företag som idag omsätter
                  nära två miljarder — med en ägare som fortfarande har tid för familjen. Ett av
                  de resultat jag fått vara med och forma genom mentorrelationen.
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-6">
                  <div>
                    <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-white">100x</dt>
                    <dd className="text-[12px] uppercase tracking-wider text-white/60 mt-1">Omsättning</dd>
                  </div>
                  <div>
                    <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-white">4+ år</dt>
                    <dd className="text-[12px] uppercase tracking-wider text-white/60 mt-1">Samarbete</dd>
                  </div>
                  <div>
                    <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-white">1</dt>
                    <dd className="text-[12px] uppercase tracking-wider text-white/60 mt-1">Ägare</dd>
                  </div>
                </dl>
              </div>
              <div className="relative min-h-[320px] md:min-h-full">
                <Image
                  src="/images/ola-leader.jpg"
                  alt="Ola i arbete med klient"
                  fill
                  sizes="(min-width: 768px) 500px, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(11,14,20,0.6) 0%, transparent 40%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials variant="showcase" />

      <StatsBand tone="light" />

      <LogoCarousel heading="Bolag jag arbetat med" />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <p className="reveal eyebrow mb-4 justify-center">Vill du bli nästa?</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)] leading-tight text-[#0B0E14]">
              Jag tar emot ett begränsat antal mentorsklienter per år.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[16px] text-[#0B0E14]/70 leading-relaxed">
              Varje samarbete kräver tid och fokus. Ett kostnadsfritt strategisamtal är startpunkten —
              där ser vi båda om det här är rätt för dig.
            </p>
            <div className="reveal reveal-d3 mt-8">
              <Link href="/kontakt" className="btn-primary">
                Boka kostnadsfritt strategisamtal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand tone="dark" />
    </>
  );
}
