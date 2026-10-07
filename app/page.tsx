import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ResultsGrid from "@/components/ResultsGrid";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import PainPoints from "@/components/PainPoints";

export const metadata: Metadata = {
  title: "Mentor för bolagsägare 10–50 Mkr",
  description:
    "Serieentreprenör med 25 års erfarenhet. Jag coachar bolagsägare till självgående och lönsamma bolag — med min metod Framgångsrikt Entreprenörskap.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <PainPoints />
      <ResultsGrid />

      <section className="py-20 md:py-28 bg-[#F7F4F0]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-[#E8500A]/15 blur-2xl pointer-events-none" />
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
              <p className="reveal eyebrow mb-4">Framgångsrikt entreprenörskap</p>
              <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
                Min metod bygger på fyra nycklar — tränade i åtta egna bolag.
              </h2>
              <p className="reveal reveal-d2 mt-5 text-[17px] text-[#0B0E14]/70 leading-relaxed">
                Jag är civilekonom, serieentreprenör och f.d. marknadschef på Affärsvärlden.
                Under 25 år har jag byggt egna bolag och coachat 650+ bolagsägare. Det jag lär ut
                har jag själv gjort — på gott och ont. Metoden &ldquo;Framgångsrikt Entreprenörskap&rdquo;
                är resultatet.
              </p>

              <ul className="reveal reveal-d3 mt-7 grid gap-3 sm:grid-cols-2">
                {["Rätt riktning", "Rätt struktur", "Rätt människor", "Rätt lönsamhet"].map((key, i) => (
                  <li key={key} className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3">
                    <span className="font-[family-name:var(--font-manrope)] font-extrabold text-[#E8500A] text-sm">
                      0{i + 1}
                    </span>
                    <span className="font-semibold text-[#0B0E14] text-[15px]">{key}</span>
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d4 mt-8 flex flex-wrap gap-3">
                <Link href="/metod" className="btn-primary !py-3">
                  Djupdyk i metoden
                </Link>
                <Link href="/om-ola" className="btn-ghost">
                  Mer om Ola
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
