import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StrategyHero from "@/components/StrategyHero";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsClean from "@/components/TestimonialsClean";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import SharedPainPoints from "@/components/SharedPainPoints";
import PageQualifier from "@/components/PageQualifier";
import NextSlotsChips from "@/components/NextSlotsChips";
import BookingReminderPill from "@/components/BookingReminderPill";

const SITE_URL = "https://olawallstrom.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/strategisession#service`,
  name: "Strategisession 30 min",
  serviceType: "Business Consultation",
  description:
    "Kostnadsfritt 30-minuters strategisamtal direkt med Ola Wallström. Konkreta nästa steg för din tillväxt, utan säljtryck.",
  provider: { "@id": `${SITE_URL}#person` },
  areaServed: "SE",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Bolagsägare i etablerade bolag",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SEK",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/strategisession`,
  },
  url: `${SITE_URL}/strategisession`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Strategisession", item: `${SITE_URL}/strategisession` },
  ],
};

export const metadata: Metadata = {
  title: "Boka ett strategisamtal",
  description:
    "30 min direkt med Ola Wallström. Konkreta nästa steg för din tillväxt, oavsett om vi fortsätter jobba ihop eller inte.",
  alternates: { canonical: "/strategisession" },
  openGraph: {
    title: "Boka ett strategisamtal",
    description:
      "30 min direkt med Ola. Konkreta nästa steg för din tillväxt. Kostnadsfritt och förutsättningslöst.",
    url: "/strategisession",
    type: "website",
  },
};

const CREDS = [
  "Civilekonom och tidigare marknadschef på Affärsvärlden",
  "Byggt och drivit åtta egna bolag i olika branscher",
  "Coachat 650+ bolagsägare under 25 år",
];

const WALKTHROUGH = [
  {
    n: "01",
    title: "Var står bolaget i dag?",
    body: "Du berättar vad som funkar och vad som skaver. Inga perfekta svar krävs.",
  },
  {
    n: "02",
    title: "Vart vill du?",
    body: "Vi sätter en riktning som matchar både bolaget och ditt liv.",
  },
  {
    n: "03",
    title: "Vad står i vägen?",
    body: "Vi ringar in de två, tre saker som bromsar mest.",
  },
];

const SHIFTS = [
  {
    title: "Bolaget växer utan att kräva mer av dig",
    body: "Du går från att sitta i varje beslut till att leda. Teamet rör sig framåt även när du inte är i rummet.",
  },
  {
    title: "Rätt person på rätt plats",
    body: "Du vet vem som ska rekryteras, lyftas eller bytas ut. Teamet tar ägarskap, inte bara uppgifter.",
  },
  {
    title: "Du får kontroll på siffrorna",
    body: "Du läser bolaget på rätt nyckeltal. Besluten vilar på fakta, inte magkänsla.",
  },
  {
    title: "Tid tillbaka till det som räknas",
    body: "Du jobbar färre timmar. Rätt sort. Helgerna är dina igen.",
  },
  {
    title: "Du leder med mer säkerhet",
    body: "Du har en sparringpartner som ser bolaget utifrån. Besluten blir skarpare.",
  },
  {
    title: "Ett bolag som inte äger dig",
    body: "Bolaget är byggt för att leva utan att du står i mitten. Du äger det. Det äger inte dig.",
  },
];

export default function Strategisession() {
  return (
    <>
      <JsonLd id="strategisession-schema" data={[serviceSchema, breadcrumbSchema]} />
      <StrategyHero />

      <SharedPainPoints
        tone="sand"
        warningIcon
        heading={
          <>
            Känner du <em>igen det här?</em>
          </>
        }
        points={[
          "”Jag ska bara svara på en grej” blir hela eftermiddagen.",
          "Teamet frågar om beslut de borde ta själva. Allt landar hos mig.",
          "Söndagen försvinner i oro inför måndagen.",
          "Omsättningen växer. Marginalen krymper. Jag vet inte varför.",
        ]}
        closer={<>Du är inte ensam. Och det löser sig inte av att jobba hårdare.</>}
      />

      <LogoCarousel />

      <PageQualifier
        tone="papper"
        heading={
          <>
            Det här är <em>för dig som:</em>
          </>
        }
        points={[
          "Äger ett bolag som omsätter 10–30 miljoner.",
          "Jobbar mer än du vill, fast teamet är på plats.",
          "Vet att nästa kliv kräver något annat än mer av dig.",
          "Vill ha någon som säger rakt vad som bromsar.",
        ]}
      />

      {/* VAD VI GÅR IGENOM */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal reveal-d1">
              Ett samtal som kan vara värt <em>miljoner.</em>
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Ett rakt samtal mellan två bolagsägare. Vi ringar in det som bromsar mest just nu, och vad du kan göra åt det.
            </p>
          </div>

          <div className="grid gap-5 md:gap-4 md:grid-cols-3 max-w-5xl mx-auto">
            {WALKTHROUGH.map((step, i) => (
              <article
                key={step.n}
                className={`reveal reveal-d${i + 1} flex flex-col items-center rounded-3xl bg-white px-7 py-9 md:px-8 text-center shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)]`}
              >
                <span className="mb-5 h-11 w-11 inline-flex items-center justify-center rounded-full border-2 border-[color:var(--glod)] font-semibold text-[1.05rem] text-[color:var(--glod)]">
                  {i + 1}
                </span>
                <h3 className="leading-tight" style={{ fontSize: "1.3rem" }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.98rem] text-ink-soft leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>

          <p className="reveal reveal-d4 mt-10 max-w-xl mx-auto text-center text-[0.95rem] text-ink-soft">
            Du går därifrån med konkreta nästa steg. Oavsett om vi jobbar vidare eller inte.
          </p>

          <div className="reveal reveal-d5 mt-10 flex justify-center">
            <a href="#boka" className="btn-primary">
              Boka kostnadsfritt strategisamtal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED — placerad högt för att fånga de som är klara att boka */}
      <section id="boka" className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="reveal reveal-d1 text-[color:var(--papper)]" style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.6rem)" }}>
              Välj en tid som <em>passar dig.</em>
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-[color:var(--papper)]/90 leading-relaxed max-w-xl mx-auto">
              30 minuter, kostnadsfritt. Du går därifrån med konkreta insikter, oavsett om vi jobbar vidare eller inte.
            </p>
            <div className="reveal reveal-d3 mt-7">
              <NextSlotsChips />
            </div>
          </div>

          <div className="reveal reveal-d5 relative max-w-4xl mx-auto">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-[28px]"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(242,106,46,0.35), transparent 60%)",
                filter: "blur(14px)",
              }}
            />
            <div className="relative rounded-3xl overflow-hidden bg-papper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-2 ring-[color:var(--glod)]/30">
              <CalendlyEmbed
                url="https://calendly.com/olawallstrom/30min"
                title="Boka strategisamtal med Ola Wallström"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ÅTTA MÅNADER FRÅN NU */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal reveal-d1">
              Åtta månader från nu <br className="md:hidden" /><em>känner du skillnaden</em> i vardagen.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Det här är det jag ser hända hos ägare jag jobbar med. Inte över en natt, men på riktigt.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {SHIFTS.map((s, i) => (
              <article
                key={s.title}
                className={`reveal reveal-d${(i % 5) + 1} flex flex-col items-center rounded-2xl bg-white px-7 py-9 text-center shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)]`}
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-glod-dim inline-flex items-center justify-center text-[color:var(--glod)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="leading-tight" style={{ fontSize: "1.2rem" }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.98rem] text-ink-soft leading-relaxed max-w-xs">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsClean tone="himmel" />

      {/* ABOUT */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[480px] mx-auto bg-papper">
                <Image
                  src="/images/ola-leende-ute.jpg"
                  alt="Ola Wallström ler, utomhus i brun skinnjacka"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="reveal reveal-d1">
                Jag har stått <em>där du står.</em>
              </h2>
              <div className="reveal reveal-d2 mt-6 space-y-5 text-[1.05rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
                <p>
                  Jag har byggt åtta bolag.
                </p>
                <p>
                  På 25 år har jag coachat 650+ ägare och sett samma mönster om och om igen:
                </p>
                <p className="font-[family-name:var(--font-heading)] text-[1.15rem] md:text-[1.25rem] text-[color:var(--marin)] leading-snug">
                  Det är sällan strategin som sinkar. Det är ägaren som fastnat i rollen hon hade när bolaget var hälften så stort.
                </p>
                <p>
                  Jag tar bara emot ett fåtal kunder per år. Så du får mig som sparringpartner, inte konsult.
                </p>
              </div>
              <ul className="reveal reveal-d3 mt-10 mx-auto w-fit flex flex-col gap-3 text-left">
                {CREDS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1rem] text-ink">
                    <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ
        tone="papper"
        eyebrow={null}
        centered
        ctaLabel="Boka kostnadsfritt strategisamtal"
        ctaHref="#boka"
        heading="Vanliga frågor"
        intro="Frågorna jag får oftast. Hittar du inte svaret? Boka, så pratar vi."
        items={[
          {
            q: "Kommer du sälja in något på samtalet?",
            a: (
              <>
                Nej. Mitt enda mål är att du går därifrån med något du kan agera på. Fortsättning bokar vi i ett eget samtal, aldrig på det första.
              </>
            ),
          },
          {
            q: "Är det verkligen gratis?",
            a: (
              <>
                Ja. 30 minuter, inget säljtryck. Passar det att jobba vidare pratar vi pris då, inte innan.
              </>
            ),
          },
          {
            q: "Är inte 30 minuter för kort för att säga något vettigt?",
            a: (
              <>
                Tvärtom. 25 års erfarenhet gör att jag ser mönstren snabbt. Vi hinner identifiera det som bromsar mest. Och en konkret första åtgärd.
              </>
            ),
          },
          {
            q: "Jag har redan en coach, revisor eller styrelse. Vad är det här?",
            a: (
              <>
                Bra, de behövs. Men revisorn räknar bakåt och styrelsen möts kvartalsvis. Jag är sparring i vardagen. Någon som sett det du står i och vågar säga det du inte vill höra.
              </>
            ),
          },
          {
            q: "Jag är inte redo att investera i något stort nu.",
            a: (
              <>
                Det behöver du inte vara. Samtalet kostar inget. Passar det inte säger jag det rakt, och du går ändå därifrån med något du kan använda.
              </>
            ),
          },
          {
            q: "Måste jag förbereda något?",
            a: (
              <>
                Nej. Kom som du är. Du behöver inte ha problemet definierat. Det är ofta därför vi pratar.
              </>
            ),
          },
          {
            q: "Vem är det för?",
            a: (
              <>
                Ägare i bolag som omsätter 10 miljoner eller mer. Är du i ett annat läge? Boka ändå. Jag säger till om jag inte är rätt och tipsar om någon annan.
              </>
            ),
          },
          {
            q: "Vad händer efter samtalet?",
            a: (
              <>
                Du går därifrån med konkreta nästa steg. Känns det rätt för oss båda pratar vi fortsättning. Antingen Ägarklivet 2027 eller VIP-coaching.
              </>
            ),
          },
          {
            q: "Hur bokar jag?",
            a: (
              <>
                Välj en tid i kalendern här på sidan. Du får en Zoom-länk direkt.
              </>
            ),
          },
        ]}
      />

      {/* ANDRA CHANSEN ATT BOKA — scrollar upp till enda kalendern */}
      <section id="boka-cta" className="py-16 md:py-20 sec-marin">
        <div className="container-site">
          <div className="reveal max-w-2xl mx-auto text-center">
            <h2 className="text-[color:var(--papper)]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)" }}>
              Redo? <em>Boka en tid.</em>
            </h2>
            <p className="mt-5 text-[1.02rem] text-[color:var(--papper)]/85 leading-relaxed">
              30 minuter, kostnadsfritt. Du går därifrån med konkreta nästa steg.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#boka" className="btn-primary">
                Välj en tid
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ÄGARKLIVET TEASER */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="reveal max-w-4xl mx-auto rounded-3xl sec-marin px-8 py-12 md:px-14 md:py-14 text-center">
            <h3 className="text-[color:var(--papper)]" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)" }}>
              Ägarklivet 2027. Ett år, fyra teman.
            </h3>
            <p className="mt-5 text-[1.02rem] md:text-[1.08rem] text-[color:var(--papper)]/80 leading-relaxed max-w-xl mx-auto">
              Tolv månader tillsammans med andra erfarna ägare. Fyra teman, personligt stöd hela vägen.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-[color:var(--papper)] text-[0.78rem] font-semibold">Q1 Mental klarhet</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--olabla)] text-[color:var(--papper)] text-[0.78rem] font-semibold">Q2 Stjärnledarskap</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--glod)] text-white text-[0.78rem] font-semibold">Q3 Affärsutveckling</span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--sand)] text-[color:var(--marin)] text-[0.78rem] font-semibold">Q4 Säljstrategi</span>
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/agarklivet" className="btn-dark-ghost">
                Se programmet
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </Link>
            </div>
            <p className="mt-5 text-[0.85rem] text-[color:var(--papper)]/60">
              Begränsat antal platser 2027.
            </p>
          </div>
        </div>
      </section>

      <BookingReminderPill />
    </>
  );
}
