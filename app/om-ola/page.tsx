import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatsBand from "@/components/StatsBand";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Om Ola",
  description:
    "Ola Wallström är civilekonom, serieentreprenör och mentor. 25 års erfarenhet, 650+ coachade bolagsägare och åtta egna bolag byggda i olika branscher.",
  alternates: { canonical: "/om-ola" },
};

const CRED = [
  "Civilekonom och f.d. marknadschef på Affärsvärlden",
  "Serieentreprenör — har byggt och medverkat i åtta bolag",
  "Coachat 650+ bolagsägare under 25 år",
  "Medlem i flera svenska entreprenörsnätverk",
  "Tar emot ett begränsat antal mentorsklienter per år",
];

export default function OmOlaPage() {
  return (
    <>
      <PageHero
        eyebrow="Om Ola"
        title={
          <>
            25 års lärdomar — <em className="not-italic text-[#E8500A]">i åtta egna bolag</em> och
            vid sidan av 650+ bolagsägare.
          </>
        }
        intro="Jag har själv suttit på andra sidan bordet. Jag vet hur det känns att vara den som allt faller på, hur ensamt det kan bli högst upp — och vad som faktiskt flyttar bolaget framåt."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="reveal relative lg:sticky lg:top-28">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] aspect-[4/5] bg-[#EDE9E3]">
                <Image
                  src="/images/ola-om.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-sm text-[#6B7280]">
                Ola Wallström — mentor och serieentreprenör
              </figcaption>
            </div>

            <div className="prose max-w-none">
              <p className="reveal text-[18px] md:text-[19px] text-[#0B0E14]/85 leading-relaxed">
                Jag är civilekonom i grunden och började min karriär som marknadschef på Affärsvärlden.
                Där såg jag varje vecka hur svenska entreprenörer gick igenom samma mönster: de växte,
                stötte i taket av sig själva — och visste inte varför det stannade upp.
              </p>
              <p className="reveal reveal-d1 mt-5 text-[17px] text-[#0B0E14]/75 leading-relaxed">
                Själv blev jag entreprenör och har sedan dess varit involverad i åtta bolag i olika
                branscher. Jag har gjort nästan varje misstag som finns att göra: anställt fel folk,
                skalat för tidigt, byggt system som bara jag förstod, kört slut på mig själv i jakten
                på nästa miljon. Det är den resan jag tar med mig in i varje mentorrelation.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[17px] text-[#0B0E14]/75 leading-relaxed">
                Under 25 år har jag coachat över 650 bolagsägare — de flesta i segmentet 10–50 Mkr
                omsättning. Där står det tydligt varför vissa fastnar och andra passerar lätt
                genom den där tröskeln.
              </p>

              <h3 className="reveal reveal-d3 mt-10 font-[family-name:var(--font-manrope)] font-extrabold text-[24px] text-[#0B0E14]">
                Min metod: Framgångsrikt Entreprenörskap
              </h3>
              <p className="reveal reveal-d3 mt-3 text-[16px] text-[#0B0E14]/75 leading-relaxed">
                Jag kallar den &ldquo;Framgångsrikt Entreprenörskap&rdquo;. Fyra nycklar som bygger på
                vad jag själv testat i mina bolag och sett fungera för klienter i helt olika
                branscher: Rätt riktning, rätt struktur, rätt människor och rätt lönsamhet.
                Enkelt att beskriva — svårt att göra. Där kommer jag in.
              </p>

              <h3 className="reveal reveal-d4 mt-10 font-[family-name:var(--font-manrope)] font-extrabold text-[24px] text-[#0B0E14]">
                Hur jag arbetar
              </h3>
              <p className="reveal reveal-d4 mt-3 text-[16px] text-[#0B0E14]/75 leading-relaxed">
                Jag tar emot ett begränsat antal mentorsklienter per år. Det gör att varje samarbete
                håller den kvaliteten jag vill stå för. Vi börjar alltid med en bolagsdiagnos, sedan
                lägger vi en tydlig plan — och jag finns med dig både i de planerade samtalen och
                när något oväntat uppstår.
              </p>

              <ul className="reveal reveal-d5 mt-10 space-y-3">
                {CRED.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[15px] text-[#0B0E14]/85">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[#E8500A]/15 text-[#E8500A]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d5 mt-10 flex flex-wrap gap-3">
                <Link href="/kontakt" className="btn-primary">
                  Boka kostnadsfritt strategisamtal
                </Link>
                <Link href="/metod" className="btn-ghost">
                  Läs om metoden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand tone="light" />
      <CtaBand tone="dark" />
    </>
  );
}
