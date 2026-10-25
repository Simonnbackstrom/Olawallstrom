import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoreValues from "@/components/CoreValues";
import StatsBand from "@/components/StatsBand";
import PainStory from "@/components/PainStory";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#person`,
  name: "Ola Wallström",
  givenName: "Ola",
  familyName: "Wallström",
  jobTitle: "Mentor och serieentreprenör",
  description:
    "Civilekonom, tidigare marknadschef på Affärsvärlden, serieentreprenör med åtta egna bolag och mentor för 650+ bolagsägare under 25 år.",
  url: `${SITE_URL}/om-ola`,
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/ola-leende-ute.jpg`,
    caption: "Ola Wallström",
  },
  mainEntityOfPage: `${SITE_URL}/om-ola`,
  alumniOf: {
    "@type": "Organization",
    name: "Affärsvärlden",
  },
  worksFor: { "@id": `${SITE_URL}#organization` },
  knowsAbout: [
    "Affärsutveckling",
    "Ledarskap",
    "Entreprenörskap",
    "Mentorskap",
    "Säljstrategi",
    "Tillväxt",
  ],
  knowsLanguage: ["sv", "en"],
  award: "25 års erfarenhet som mentor för bolagsägare",
  email: "ola@olawallstrom.com",
  sameAs: [
    "https://se.linkedin.com/in/olawallstrom",
    "https://www.instagram.com/ola.wallstrom/",
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/om-ola#profile`,
  url: `${SITE_URL}/om-ola`,
  mainEntity: { "@id": `${SITE_URL}#person` },
  inLanguage: "sv-SE",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Om Ola", item: `${SITE_URL}/om-ola` },
  ],
};

export const metadata: Metadata = {
  title: "Om Ola",
  description:
    "Ola Wallström är civilekonom, serieentreprenör och mentor. 25 års erfarenhet, 650+ coachade bolagsägare och åtta egna bolag byggda i olika branscher.",
  alternates: { canonical: "/om-ola" },
  openGraph: {
    title: "Om Ola",
    description:
      "Civilekonom, serieentreprenör och mentor. 25 års erfarenhet och 650+ coachade bolagsägare.",
    url: "/om-ola",
    type: "profile",
  },
};

const CRED = [
  "Civilekonom, tidigare marknadschef på Affärsvärlden",
  "Har byggt och drivit åtta egna bolag",
  "Har coachat fler än 650 bolagsägare under 25 år",
  "Hundratals ägare i mina program och coachingrum sedan 2010",
];

export default function OmOlaPage() {
  return (
    <>
      <JsonLd id="om-ola-schema" data={[personSchema, profilePageSchema, breadcrumbSchema]} />
      <PageHero
        align="center"
        title={
          <>
            Hej, jag är Ola. Jag har stått <em>där du står.</em>
          </>
        }
        intro="Jag har byggt egna bolag, gjort de flesta misstagen och suttit med fler än 650 bolagsägare. Jag vet hur det känns när allt landar på dig, och hur ensamt det kan bli högst upp. Men jag vet också att bolaget kan växa utan att det äter upp dig."
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="reveal relative lg:sticky lg:top-28">
              <div
                aria-hidden
                className="absolute -top-5 -left-5 w-[90%] h-[90%] rounded-3xl pointer-events-none"
                style={{ border: "2px solid var(--glod)", clipPath: "polygon(0 0, 100% 0, 100% 72%, 70% 100%, 0 100%)" }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand">
                <Image
                  src="/images/ola-fatolj.jpg"
                  alt="Ola Wallström sitter i en fåtölj vid fönstret"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover object-[50%_30%]"
                  priority
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="reveal text-[clamp(1.9rem,3.4vw,2.6rem)]">Min väg hit.</h2>
              <p className="reveal reveal-d1 mt-6 text-[1.1rem] md:text-[1.15rem] text-ink leading-relaxed">
                Jag är civilekonom och började som marknadschef på Affärsvärlden. Där träffade jag
                entreprenörer varje vecka, och jag såg samma sak gång på gång. Bolaget växte, och
                sedan stannade det. Inte för att marknaden tog slut, utan för att allt fortfarande
                gick genom ägaren.
              </p>
              <p className="reveal reveal-d1 mt-5 text-[1.05rem] text-ink-soft leading-relaxed">
                Sedan blev jag själv entreprenör. Jag har byggt och varit med i åtta bolag i olika
                branscher, och jag har gjort de flesta misstagen själv. Anställt fel. Skalat för
                tidigt. Byggt system som bara jag förstod. Kört slut på mig själv i jakten på nästa
                tillväxtsteg.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-ink-soft leading-relaxed">
                I 25 år har jag nu coachat fler än 650 bolagsägare, de flesta med bolag som har
                vuxit förbi startfasen. Jag vet varför vissa fastnar där och andra tar sig vidare. Oftast
                handlar det mindre om strategi och mer om vad du som ägare är beredd att släppa.
              </p>

              <h3 className="reveal reveal-d3 mt-12">Så jobbar jag med dig</h3>
              <p className="reveal reveal-d3 mt-4 text-[1.05rem] text-ink-soft leading-relaxed">
                Jag säger som det är, även när det är obekvämt. Jag gör det krångliga enkelt, så
                att vi båda ser vad som är viktigast. Och eftersom en bra plan inte räcker följer
                jag upp tills sakerna faktiskt är gjorda.
              </p>
              <p className="reveal reveal-d4 mt-4 text-[1.05rem] text-ink-soft leading-relaxed">
                Jag tar bara emot ett fåtal kunder per år, så att jag kan vara närvarande på
                riktigt. Vi börjar med att titta på var ditt bolag står i dag och gör sedan en
                tydlig plan. Jag finns med både i de planerade samtalen och när något oväntat
                händer.
              </p>

              <ul className="reveal reveal-d5 mt-10 mx-auto w-fit flex flex-col gap-3 text-left">
                {CRED.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1rem] text-ink leading-relaxed">
                    <span className="mt-[0.2rem] shrink-0 h-5 w-5 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d5 mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Boka ett strategisamtal med mig
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
                <Link href="/vip-coaching" className="btn-ghost">
                  Läs om VIP-coachingen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PainStory
        tone="sand"
        eyebrow={null}
        align="center"
        heading={
          <>
            Jag vet hur det känns när <em>allt landar på dig.</em>
          </>
        }
        body={
          <>
            <p>
              Jag har själv varit där, flera gånger. Teamet växte, strukturen hängde inte med och
              plötsligt satt jag mitt i varje beslut. Jag jobbade kvällar och helger, och
              ändå var det fortfarande jag som avgjorde om något blev gjort eller inte.
            </p>
            <p>
              Problemet var inte teamet. Problemet var att jag inte hade släppt saker som borde ha
              legat hos någon annan. När jag väl delegerade blev det ofta sämre först, så jag tog
              tillbaka det. Och så var jag där igen.
            </p>
            <p>
              Därför kommer jag inte att tala om för dig vad du ska göra. Jag hjälper dig att se
              klart vad som faktiskt händer i ditt bolag och vad du behöver släppa för att komma
              vidare. Sedan finns jag med tills det är gjort.
            </p>
          </>
        }
      />

      <CoreValues />
      <StatsBand tone="himmel" />

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">Två sätt att jobba med mig.</h2>
            <p className="reveal reveal-d1 mt-5 text-[1.05rem] md:text-[1.15rem] text-ink-soft leading-relaxed">
              Tillsammans med andra ägare runt samma bord, eller direkt med dig som ägare.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Link
              href="/agarklivet"
              className="reveal reveal-d2 group flex flex-col overflow-hidden rounded-3xl bg-white border border-[color:var(--border-soft)] text-center shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_56px_-30px_rgba(23,59,96,0.45)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src="/images/ola-runda-bordet-grupp.jpg"
                  alt="Ola Wallström med bolagsägare runt det runda bordet"
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 500px, 92vw"
                  className="object-cover object-[50%_45%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-7 md:px-10 pt-8 pb-9">
                <h3 style={{ fontSize: "clamp(1.5rem, 2.2vw, 1.8rem)" }}>Ägarklivet 2027</h3>
                <p className="mt-3 flex-1 text-[1rem] text-ink-soft leading-relaxed max-w-sm">
                  Ett år tillsammans med andra erfarna ägare runt samma bord. Fyra workshopdagar, gemensamma sessioner och personligt stöd från mig hela vägen.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--marin)]/25 px-5 py-2.5 text-[0.92rem] font-semibold text-[color:var(--marin)] transition-colors group-hover:border-[color:var(--glod)] group-hover:bg-[color:var(--glod)] group-hover:text-white">
                  Se programmet
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link
              href="/vip-coaching"
              className="reveal reveal-d3 group flex flex-col overflow-hidden rounded-3xl bg-white border border-[color:var(--border-soft)] text-center shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)] transition-shadow duration-300 hover:shadow-[0_26px_56px_-30px_rgba(23,59,96,0.45)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src="/images/ola-tre-vid-bordet.jpg"
                  alt="Ola Wallström arbetar nära med två bolagsägare vid ett bord"
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 500px, 92vw"
                  className="object-cover object-[45%_40%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-7 md:px-10 pt-8 pb-9">
                <h3 style={{ fontSize: "clamp(1.5rem, 2.2vw, 1.8rem)" }}>VIP-coaching</h3>
                <p className="mt-3 flex-1 text-[1rem] text-ink-soft leading-relaxed max-w-sm">
                  Direkt med dig som ägare, eller tillsammans med dina medägare. Vi jobbar i ert tempo och med fokus på det som faktiskt driver just ert bolag framåt.
                </p>
                <p className="mt-6 text-[0.85rem] text-muted">Ett fåtal platser 2027</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--marin)]/25 px-5 py-2.5 text-[0.92rem] font-semibold text-[color:var(--marin)] transition-colors group-hover:border-[color:var(--glod)] group-hover:bg-[color:var(--glod)] group-hover:text-white">
                  Läs om VIP-coaching
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        tone="marin"
        heading="Så att bolaget kan växa utan att det äter upp dig."
        intro="Boka 30 minuter med mig. Inget säljtryck. Oavsett om jag blir rätt mentor för dig eller inte går du därifrån med något konkret att göra."
      />
    </>
  );
}
