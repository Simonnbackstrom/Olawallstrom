import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import StrategyHero from "@/components/StrategyHero";
import LogoCarousel from "@/components/LogoCarousel";
import ResultsGrid from "@/components/ResultsGrid";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import PainPoints from "@/components/PainPoints";

export const metadata: Metadata = {
  title: "Boka ett strategisamtal",
  description:
    "Kostnadsfritt 30-min samtal med Ola Wallström. Du får konkreta nästa steg — oavsett om vi fortsätter jobba ihop eller inte.",
  alternates: { canonical: "/strategisession" },
};

const EXPECT = [
  {
    n: "01",
    title: "Nulägesdiagnos",
    body:
      "Vi går igenom var ditt bolag står idag — omsättning, lönsamhet, bemanning, din roll och de 2–3 flaskhalsar som egentligen håller tillbaka tillväxten.",
  },
  {
    n: "02",
    title: "Tre konkreta nästa steg",
    body:
      "Du lämnar samtalet med en kort lista på vad som är viktigast att adressera de kommande 90 dagarna — konkreta beslut, inte generella råd.",
  },
  {
    n: "03",
    title: "Ingen pitch",
    body:
      "Om vi båda tycker att en längre mentorskapsresa är rätt väg berättar jag hur det fungerar. Annars har du fått ett riktigt bra samtal — gratis.",
  },
];

export default function Strategisession() {
  return (
    <>
      <StrategyHero />
      <LogoCarousel />

      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal eyebrow mb-4">Vad händer i samtalet</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
              30 minuter som gör skillnad — oavsett om vi fortsätter.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[17px] text-[#0B0E14]/70 leading-relaxed">
              Jag kör i snitt 10 strategisamtal i veckan. Formatet är beprövat.
              Du lämnar samtalet med konkreta nästa steg — inte en säljpitch.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
            {EXPECT.map((item, i) => (
              <div
                key={item.n}
                className={`reveal reveal-d${i + 1} rounded-2xl ring-1 ring-[#E2DDD8] bg-[#F7F4F0] p-7`}
              >
                <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[#E8500A] text-sm tracking-widest">
                  {item.n}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-manrope)] font-extrabold text-[22px] leading-tight text-[#0B0E14]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] text-[#0B0E14]/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PainPoints />
      <ResultsGrid />

      <section className="py-20 md:py-28 bg-[#F7F4F0]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] aspect-[4/5] bg-[#EDE9E3]">
                <Image
                  src="/images/ola-portratt.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-4">Vem är det som ringer upp</p>
              <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
                Jag har byggt bolag själv — på gott och ont.
              </h2>
              <p className="reveal reveal-d2 mt-5 text-[17px] text-[#0B0E14]/70 leading-relaxed">
                Civilekonom, serieentreprenör och f.d. marknadschef på Affärsvärlden.
                Under 25 år har jag byggt 8 egna bolag och coachat 650+ bolagsägare.
                Metoden &ldquo;Framgångsrikt Entreprenörskap&rdquo; är resultatet.
              </p>
              <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
                <Link href="/om-ola" className="btn-ghost">
                  Läs mer om Ola
                </Link>
                <Link href="/metod" className="btn-ghost">
                  Så fungerar metoden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
