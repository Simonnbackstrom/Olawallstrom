import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MethodGrid from "@/components/MethodGrid";
import PainPoints from "@/components/PainPoints";
import ResultsGrid from "@/components/ResultsGrid";
import TestimonialsClean from "@/components/TestimonialsClean";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/vip-coaching#service`,
  name: "VIP-coaching",
  serviceType: "Business Mentorship",
  description:
    "Personlig 1:1-coaching för bolagsägare i etablerade bolag. Två samtal i månaden, stöd när det brinner och uppföljning tills det är gjort.",
  provider: { "@id": `${SITE_URL}#person` },
  areaServed: "SE",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Bolagsägare i etablerade bolag",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/LimitedAvailability",
    url: `${SITE_URL}/vip-coaching`,
  },
  url: `${SITE_URL}/vip-coaching`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "VIP-coaching", item: `${SITE_URL}/vip-coaching` },
  ],
};

export const metadata: Metadata = {
  title: "VIP-coaching direkt med dig som ägare",
  description:
    "Personlig mentorskap för dig som äger ett bolag tillsammans med medägare, eller vill ha djup 1:1-rådgivning. Två samtal i månaden och stöd hela vägen.",
  alternates: { canonical: "/vip-coaching" },
  openGraph: {
    title: "VIP-coaching direkt med dig som ägare",
    description:
      "Personlig mentorskap för bolagsägare. Två samtal i månaden och stöd hela vägen.",
    url: "/vip-coaching",
    type: "website",
  },
};

const PRINCIPLES = [
  { num: "01", key: "Äkta", q: "Jag är närvarande i varje samtal och säger som det är. Vi utgår från vem du är, inte från en mall." },
  { num: "02", key: "Klarhet", q: "Jag gör det krångliga enkelt, så att det blir tydligt vad som är viktigt och vad nästa steg är." },
  { num: "03", key: "Genomförande", q: "En bra plan räcker inte. Jag följer upp tills sakerna faktiskt är gjorda." },
  { num: "04", key: "Frihet", q: "Allt vi gör pekar mot ett bolag som inte äger dig, och mer frihet i din vardag." },
];

const HOW = [
  {
    title: "Vi börjar med ditt bolag",
    body: "Första veckorna gör vi en ärlig bolagsdiagnos och bestämmer vad som ska flyttas först.",
  },
  {
    title: "Två samtal i månaden",
    body: "Du, eller ni om ni är flera ägare. Vi stämmer av, planerar framåt och bestämmer nästa steg innan vi lägger på.",
  },
  {
    title: "Stöd när det brinner",
    body: "Händer något akut hör jag av mig inom 24 timmar. En dålig vecka ska inte stoppa dig.",
  },
  {
    title: "Uppföljning tills det är gjort",
    body: "En plan räcker inte. Jag följer upp det vi bestämt, så att det faktiskt blir av.",
  },
];

const FOR_WHOM = [
  "Är ägare i ett bolag som omsätter minst 10 miljoner.",
  "Aldrig hinner stanna upp och tänka framåt.",
  "Vill få mer ansvarstagande medarbetare.",
  "Vill växa utan att behöva offra fritiden eller hälsan.",
];

export default function VipCoachingPage() {
  return (
    <>
      <JsonLd id="vip-coaching-schema" data={[serviceSchema, breadcrumbSchema]} />
      <PageHero
        align="center"
        plain
        title={
          <>
            VIP-coaching. <em>Direkt med dig som ägare.</em>
          </>
        }
        intro="Ett personligt mentorskap för dig som äger ett etablerat bolag tillsammans med medägare, eller som vill ha djup 1:1-rådgivning. Vi ses två gånger i månaden, jobbar med det som faktiskt bromsar bolaget och följer upp tills det är gjort."
        cta={{
          label: "Boka ett strategisamtal med mig",
          href: "https://calendly.com/olawallstrom/30min",
          sub: "30 minuter, kostnadsfritt. Ett fåtal platser 2027.",
        }}
      />

      <section className="sec-papper pb-[var(--section-y)]">
        <div className="container-site">
          <div className="reveal relative mx-auto max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden bg-sand">
            <Image
              src="/images/ola-forklarar-nara.jpg"
              alt="Ola Wallström förklarar något i ett samtal på tu man hand"
              fill
              quality={90}
              priority
              sizes="(min-width: 1200px) 1120px, 92vw"
              className="object-cover object-[30%_25%]"
            />
          </div>
        </div>
      </section>

      <PainPoints />

      {/* HOW IT WORKS */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="reveal">Så fungerar VIP-coachingen.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.1rem] text-ink-soft leading-relaxed">
              Ett enkelt upplägg, byggt för att saker ska bli gjorda. Du har mig vid din sida, inte en
              mall.
            </p>
          </div>
          <ol className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {HOW.map((h, i) => (
              <li
                key={h.title}
                className={`reveal reveal-d${i + 1} flex flex-col items-center rounded-3xl bg-white px-7 py-9 text-center shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)]`}
              >
                <span className="h-11 w-11 inline-flex items-center justify-center rounded-full border-2 border-[color:var(--glod)] font-[family-name:var(--font-heading)] font-semibold text-[1.05rem] text-[color:var(--glod)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 leading-tight" style={{ fontSize: "1.25rem" }}>{h.title}</h3>
                <p className="mt-3 text-[0.98rem] text-ink-soft leading-relaxed">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MethodGrid variant="steps" />

      <ResultsGrid heading="Så här känns det efter åtta månader." />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/5] bg-sand max-w-[520px] w-full mx-auto">
              <Image
                src="/images/ola-antecknar.jpg"
                alt="Ola Wallström antecknar tillsammans med en bolagsägare"
                fill
                quality={90}
                sizes="(min-width: 1024px) 980px, 170vw"
                className="object-cover object-[35%_40%]"
              />
            </div>
            <div className="text-center">
              <h2 className="reveal">Så här jobbar jag.</h2>
              <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.1rem] text-ink-soft leading-relaxed max-w-lg mx-auto">
                25 år och fler än 650 bolagsägare har lärt mig vad som fungerar. Det kokar ner till
                fyra saker jag står för i varje samtal.
              </p>

              <div className="reveal reveal-d2 mt-10 grid gap-4 sm:grid-cols-2">
                {PRINCIPLES.map((item) => (
                  <div
                    key={item.num}
                    className="rounded-2xl bg-sand px-6 py-8 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)]"
                  >
                    <div className="font-[family-name:var(--font-heading)] font-semibold text-[color:var(--glod)] text-[1.8rem] leading-none">
                      {item.num}
                    </div>
                    <div className="mt-3 font-[family-name:var(--font-heading)] font-semibold text-[1.25rem] text-[color:var(--marin)]">
                      {item.key}
                    </div>
                    <p className="mt-2 text-[0.95rem] text-ink-soft leading-relaxed">{item.q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsClean tone="sand" />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="reveal">Jag jobbar bäst med dig som:</h2>
            <ul className="reveal reveal-d1 mt-12 grid gap-4 md:gap-5 sm:grid-cols-2">
              {FOR_WHOM.map((p) => (
                <li
                  key={p}
                  className="flex flex-col items-center gap-4 rounded-2xl bg-sand px-7 py-8 text-[1.02rem] text-ink leading-relaxed shadow-[0_18px_40px_-34px_rgba(23,59,96,0.35)]"
                >
                  <span className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING: the one booking CTA */}
      <section className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal">Ska vi ta första samtalet?</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.15rem] text-[color:var(--papper)]/80 leading-relaxed">
              30 minuter, du och jag. Vi tittar på var ditt bolag står i dag, vad som bromsar och om
              VIP-coachingen är rätt för dig. Du går därifrån med något konkret oavsett.
            </p>
            <div className="reveal reveal-d2 mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka ett strategisamtal med mig
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <Link href="/kontakt" className="btn-dark-ghost">
                Skicka ett meddelande
              </Link>
            </div>
            <p className="reveal reveal-d3 mt-6 text-[0.88rem] text-[color:var(--papper)]/60">
              Kostnadsfritt och utan säljtryck. Är du ensamägare? Då passar oftast Ägarklivet bättre. Där får du andra ägare runt bordet att bolla med.{" "}
              <Link href="/agarklivet" className="font-semibold text-[color:var(--papper)] underline underline-offset-4 hover:text-[color:var(--glod)] transition-colors">
                Läs om Ägarklivet 2027 →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
