import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoreValues from "@/components/CoreValues";
import StatsBand from "@/components/StatsBand";
import PainStory from "@/components/PainStory";
import Testimonials from "@/components/Testimonials";
import MiniCtaBand from "@/components/MiniCtaBand";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/om-ola#person`,
  name: "Ola Wallström",
  jobTitle: "Mentor och serieentreprenör",
  description:
    "Civilekonom, tidigare marknadschef på Affärsvärlden, serieentreprenör med åtta egna bolag och mentor för 650+ bolagsägare under 25 år.",
  url: `${SITE_URL}/om-ola`,
  image: `${SITE_URL}/images/ola-portrait.jpg`,
  alumniOf: {
    "@type": "Organization",
    name: "Affärsvärlden",
  },
  worksFor: {
    "@type": "Organization",
    name: "Perspektivo i Sverige AB",
  },
  knowsAbout: [
    "Affärsutveckling",
    "Ledarskap",
    "Entreprenörskap",
    "Mentorskap",
    "Säljstrategi",
    "Tillväxt",
  ],
  award: "25 års erfarenhet som mentor för bolagsägare",
  nationality: "SE",
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
};

const CRED = [
  "Civilekonom och tidigare marknadschef på Affärsvärlden",
  "Serieentreprenör, byggt och drivit åtta egna bolag",
  "Coachat 650+ bolagsägare under 25 år",
  "Medlem i flera svenska entreprenörsnätverk",
  "Tar emot ett begränsat antal mentorsklienter per år",
];

export default function OmOlaPage() {
  return (
    <>
      <JsonLd id="om-ola-schema" data={[personSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Om Ola"
        title={
          <>
            25 års lärdomar, <em>i åtta egna bolag</em> och vid sidan av 650+ bolagsägare.
          </>
        }
        intro="Jag har själv suttit på andra sidan bordet. Jag vet hur det känns när allt landar på dig, hur ensamt det kan bli högst upp, och vad som faktiskt flyttar bolaget framåt."
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
                  src="/images/ola-hamn.jpg"
                  alt="Ola Wallström vid hamnen"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-5 text-[0.9rem] text-muted font-[family-name:var(--font-lora)] italic">
                Ola Wallström, mentor och serieentreprenör
              </figcaption>
            </div>

            <div>
              <p className="reveal text-[1.1rem] md:text-[1.15rem] text-ink leading-relaxed">
                Jag är civilekonom i grunden och började min karriär som marknadschef på
                Affärsvärlden. Där såg jag varje vecka hur svenska entreprenörer gick igenom samma
                mönster: de växte, stötte i taket av sig själva, och visste inte varför det
                stannade upp.
              </p>
              <p className="reveal reveal-d1 mt-5 text-[1.02rem] text-ink-soft leading-relaxed">
                Själv blev jag entreprenör och har sedan dess varit involverad i åtta bolag i olika
                branscher. Jag har gjort nästan varje misstag som finns att göra: anställt fel folk,
                skalat för tidigt, byggt system som bara jag förstod, kört slut på mig själv i
                jakten på nästa miljon. Den resan tar jag med mig in i varje mentorrelation.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[1.02rem] text-ink-soft leading-relaxed">
                Under 25 år har jag coachat över 650 bolagsägare, de flesta i segmentet 10-50 Mkr.
                Där står det tydligt varför vissa fastnar och andra passerar lätt genom den där
                tröskeln.
              </p>

              <h3 className="reveal reveal-d3 mt-12">VIP-coaching: autentisk affärsutveckling</h3>
              <p className="reveal reveal-d3 mt-4 text-[1rem] text-ink-soft leading-relaxed">
                Fyra principer: <strong className="font-[family-name:var(--font-lora)] italic font-semibold text-[color:var(--marin)]">Äkta, Klarhet, Genomförande, Frihet</strong>.
                De bygger på vad jag själv testat i mina bolag och sett fungera för klienter i helt
                olika branscher. Enkelt att beskriva, svårt att göra. Där kommer jag in.
              </p>

              <h3 className="reveal reveal-d4 mt-10">Så arbetar jag</h3>
              <p className="reveal reveal-d4 mt-4 text-[1rem] text-ink-soft leading-relaxed">
                Jag tar emot ett begränsat antal mentorsklienter per år. Det gör att varje samarbete
                håller den kvaliteten jag vill stå för. Vi börjar alltid med en bolagsdiagnos, sedan
                lägger vi en tydlig plan, och jag finns med dig både i de planerade samtalen och
                när något oväntat uppstår.
              </p>

              <ul className="reveal reveal-d5 mt-10 space-y-3">
                {CRED.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1rem] text-ink">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d5 mt-10 flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Boka ett samtal
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
                <Link href="/metod" className="btn-ghost">
                  Läs om VIP-coachingen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PainStory
        tone="sand"
        eyebrow="Jag har själv suttit på andra sidan bordet"
        heading={
          <>
            Jag vet hur det känns när <em>allt landar på dig</em>.
          </>
        }
        body={
          <>
            <p>
              Det har hänt mig flera gånger i mina egna bolag. Teamet växte, strukturen släpade,
              och plötsligt var jag flaskhalsen i varje beslut. Jag jobbade kvällar och helger och
              fortfarande var det jag som var skillnaden mellan att något blev gjort eller inte.
            </p>
            <p>
              Problemet var inte teamet. Problemet var att jag inte hade släppt taget om saker som
              borde ha legat någon annanstans. Varje gång jag försökte delegera så blev det ofta
              sämre först, och då tog jag tillbaka. Och så var jag tillbaka i samma mönster.
            </p>
            <p>
              Den resan tar jag med mig in i varje mentorrelation. Det är därför jag inte talar om
              för dig vad du ska göra, utan hjälper dig att se vad som faktiskt händer, och vad du
              måste släppa för att komma vidare.
            </p>
          </>
        }
      />

      <CoreValues />
      <StatsBand tone="himmel" />

      <Testimonials tone="sand" />

      <MiniCtaBand
        headline="Vill du prata med mig direkt?"
        subline="30 min på Zoom, kostnadsfritt. Du behöver inte ha allt klart för dig, det är därför vi pratar."
        ctaLabel="Boka 30 min med Ola"
        tone="marin"
      />

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-4 justify-center">Två sätt att jobba med mig</p>
            <h2 className="reveal reveal-d1">Program eller 1:1. Du väljer.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <Link
              href="/boardroom"
              className="reveal reveal-d2 group relative overflow-hidden rounded-3xl sec-marin p-8 md:p-10 flex flex-col"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-[280px] h-[280px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
              />
              <div className="relative flex-1">
                <p className="eyebrow-upper text-[color:var(--glod)] mb-4">Primärt program</p>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.6rem] md:text-[1.8rem] leading-tight text-[color:var(--papper)]">
                  Boardroom 2027
                </h3>
                <p className="mt-4 text-[0.98rem] text-[color:var(--papper)]/80 leading-relaxed">
                  12 månader med 14 andra ägare runt bordet. Fyra workshopdagar,
                  19 Boardroom-sessioner, personligt stöd hela vägen.
                </p>
              </div>
              <div className="relative mt-6 flex items-center justify-between text-[color:var(--papper)]">
                <span className="text-[0.85rem] text-[color:var(--papper)]/60">
                  195 000 kr, max 15 deltagare
                </span>
                <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold group-hover:text-[color:var(--glod)] transition-colors">
                  Se programmet
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </span>
              </div>
            </Link>

            <Link
              href="/metod"
              className="reveal reveal-d3 group relative overflow-hidden rounded-3xl bg-white border border-[color:var(--border-soft)] p-8 md:p-10 flex flex-col"
            >
              <div className="flex-1">
                <p className="eyebrow-upper text-[color:var(--glod)] mb-4">Sekundärt</p>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.6rem] md:text-[1.8rem] leading-tight text-[color:var(--marin)]">
                  VIP-coaching
                </h3>
                <p className="mt-4 text-[0.98rem] text-ink-soft leading-relaxed">
                  1:1 med mig genom fyra principer och sex steg. Tempo och fokus
                  anpassat efter ditt bolag. Begränsat antal platser 2027.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-[color:var(--marin)]">
                <span className="text-[0.85rem] text-muted">Begränsat antal platser</span>
                <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold group-hover:text-[color:var(--glod)] transition-colors">
                  Läs om VIP-coaching
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand tone="marin" />
    </>
  );
}
