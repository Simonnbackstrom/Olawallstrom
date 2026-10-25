import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsClean from "@/components/TestimonialsClean";
import StatsBand from "@/components/StatsBand";
import PainStory from "@/components/PainStory";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";

const caseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/resultat#cases`,
  name: "Resultat från samarbeten",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Review",
        name: "Från tjänstebolag till hundra gånger större",
        reviewBody:
          "Från ett tjänstebolag till ett bolag som i dag är hundra gånger större, med en ägare som fortfarande har tid för familjen.",
        author: { "@type": "Person", name: "Alex" },
        itemReviewed: { "@id": `${SITE_URL}/vip-coaching#service` },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Resultat", item: `${SITE_URL}/resultat` },
  ],
};

export const metadata: Metadata = {
  title: "Resultat",
  description:
    "Riktiga resultat från bolag jag coachat. Case, testimonials och nyckeltal från mitt arbete som mentor för bolagsägare som vill växa.",
  alternates: { canonical: "/resultat" },
  openGraph: {
    title: "Resultat",
    description:
      "Riktiga resultat från bolag jag coachat — case, testimonials och nyckeltal.",
    url: "/resultat",
    type: "website",
  },
};

export default function ResultatPage() {
  return (
    <>
      <JsonLd id="resultat-schema" data={[caseListSchema, breadcrumbSchema]} />
      <PageHero
        align="center"
        plain
        title={
          <>
            Resultat är <em>inte löften</em>. Det är siffror på pappret.
          </>
        }
        intro="Alla började där du är nu, fast med andra siffror. Här är ett urval av bolag jag har jobbat med och förflyttningen vi gjorde tillsammans. Varje case bygger på ett verkligt samarbete där ägaren själv har valt att synas."
      />

      <PainStory
        tone="sand"
        eyebrow={null}
        align="center"
        heading={
          <>
            De flesta kom hit med samma <em>känsla.</em>
          </>
        }
        body={
          <>
            <p>
              &ldquo;Jag jobbar mer än jag någonsin gjort. Teamet gör sitt, men ingen tänker som en
              delägare. Omsättningen rör sig knappt och jag vet inte vad jag ska göra nästa vecka
              för att det ska se annorlunda ut.&rdquo;
            </p>
            <p>
              Det är där mina kunder står när vi börjar. Omsättningen är inte problemet,
              och inte produkten heller. Det är ägaren som har fastnat i ett mönster som byggdes när
              bolaget var hälften så stort.
            </p>
            <p>
              Alla resultat på den här sidan började i just det läget. Det som skiljer dem från bolag
              som fastnar är inte talang eller tur, utan att ägaren var redo att ändra på sig själv,
              inte bara på teamet.
            </p>
          </>
        }
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="reveal max-w-6xl mx-auto rounded-3xl overflow-hidden sec-marin grid md:grid-cols-[1.15fr_1fr]">
            <div className="px-8 py-12 md:px-14 md:py-14 flex flex-col justify-center text-center">
              <p className="text-[1rem] text-[color:var(--papper)]/70">Alex, ett av mina kundcase</p>

              <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
                <div>
                  <p className="text-[0.85rem] text-[color:var(--papper)]/55">Då</p>
                  <p className="mt-1 font-[family-name:var(--font-heading)] font-semibold leading-none text-[color:var(--papper)] whitespace-nowrap" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>
                    1×
                  </p>
                  <p className="mt-2 text-[0.88rem] text-[color:var(--papper)]/60">ett tjänstebolag</p>
                </div>
                <svg aria-hidden width="36" height="16" viewBox="0 0 36 16" fill="none" className="text-[color:var(--glod)]">
                  <path d="M1 8h32M27 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[0.85rem] text-[color:var(--papper)]/55">I dag</p>
                  <p className="mt-1 font-[family-name:var(--font-heading)] font-semibold leading-none text-[color:var(--glod)] whitespace-nowrap" style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.8rem)" }}>
                    100×
                  </p>
                  <p className="mt-2 text-[0.88rem] text-[color:var(--papper)]/60">samma ägare, större bolag</p>
                </div>
              </div>

              <p className="mt-10 font-[family-name:var(--font-heading)] text-[1.15rem] md:text-[1.3rem] leading-relaxed text-[color:var(--papper)]/90 max-w-md mx-auto">
                Med en ägare som fortfarande har tid för familjen.
              </p>
              <p className="mt-4 text-[0.95rem] text-[color:var(--papper)]/60">
                Mer än fyra års samarbete. Ett av de resultat jag har fått vara med och forma.
              </p>
            </div>
            <div className="relative min-h-[320px] md:min-h-[480px]">
              <Image
                src="/images/ola-bordet-kaffe.jpg"
                alt="Ola Wallström i samtal vid bordet med en kaffekopp i handen"
                fill
                quality={90}
                sizes="(min-width: 768px) 720px, 140vw"
                className="object-cover object-[45%_35%]"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsClean tone="sand" />

      <StatsBand tone="himmel" />

      <LogoCarousel />

      <CtaBand
        tone="marin"
        plain
        heading="Ska vi titta på ditt bolag?"
        intro="Jag tar bara emot ett fåtal kunder per år. Boka 30 minuter med mig, så tittar vi på var ditt bolag står i dag och om vi är rätt för varandra. Inget säljtryck, och du går därifrån med något konkret oavsett."
      />
    </>
  );
}
