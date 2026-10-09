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
  "Civilekonom och tidigare marknadschef på Affärsvärlden",
  "Serieentreprenör - byggt och drivit åtta egna bolag",
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
            25 års lärdomar - <em>i åtta egna bolag</em> och vid sidan av 650+ bolagsägare.
          </>
        }
        intro="Jag har själv suttit på andra sidan bordet. Jag vet hur det känns när allt landar på dig, hur ensamt det kan bli högst upp - och vad som faktiskt flyttar bolaget framåt."
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
                  src="/images/ola-om.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-5 text-[0.9rem] text-muted font-[family-name:var(--font-lora)] italic">
                Ola Wallström - mentor och serieentreprenör
              </figcaption>
            </div>

            <div>
              <p className="reveal text-[1.1rem] md:text-[1.15rem] text-ink leading-relaxed">
                Jag är civilekonom i grunden och började min karriär som marknadschef på
                Affärsvärlden. Där såg jag varje vecka hur svenska entreprenörer gick igenom samma
                mönster: de växte, stötte i taket av sig själva - och visste inte varför det
                stannade upp.
              </p>
              <p className="reveal reveal-d1 mt-5 text-[1.02rem] text-ink-soft leading-relaxed">
                Själv blev jag entreprenör och har sedan dess varit involverad i åtta bolag i olika
                branscher. Jag har gjort nästan varje misstag som finns att göra: anställt fel folk,
                skalat för tidigt, byggt system som bara jag förstod, kört slut på mig själv i
                jakten på nästa miljon. Den resan tar jag med mig in i varje mentorrelation.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[1.02rem] text-ink-soft leading-relaxed">
                Under 25 år har jag coachat över 650 bolagsägare - de flesta i segmentet 10-50 Mkr.
                Där står det tydligt varför vissa fastnar och andra passerar lätt genom den där
                tröskeln.
              </p>

              <h3 className="reveal reveal-d3 mt-12">VIP-coaching - autentisk affärsutveckling</h3>
              <p className="reveal reveal-d3 mt-4 text-[1rem] text-ink-soft leading-relaxed">
                Fyra principer: <strong className="font-[family-name:var(--font-lora)] italic font-semibold text-[color:var(--marin)]">Äkta, Klarhet, Genomförande, Frihet</strong>.
                De bygger på vad jag själv testat i mina bolag och sett fungera för klienter i helt
                olika branscher. Enkelt att beskriva, svårt att göra. Där kommer jag in.
              </p>

              <h3 className="reveal reveal-d4 mt-10">Så arbetar jag</h3>
              <p className="reveal reveal-d4 mt-4 text-[1rem] text-ink-soft leading-relaxed">
                Jag tar emot ett begränsat antal mentorsklienter per år. Det gör att varje samarbete
                håller den kvaliteten jag vill stå för. Vi börjar alltid med en bolagsdiagnos, sedan
                lägger vi en tydlig plan - och jag finns med dig både i de planerade samtalen och
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

      <StatsBand tone="himmel" />
      <CtaBand tone="marin" />
    </>
  );
}
