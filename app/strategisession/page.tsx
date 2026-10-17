import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StrategyHero from "@/components/StrategyHero";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";
import PageFAQ from "@/components/PageFAQ";
import JsonLd from "@/components/JsonLd";

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
    audienceType: "Bolagsägare i segmentet 10-50 Mkr",
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
};

const CREDS = [
  "Civilekonom och tidigare marknadschef på Affärsvärlden",
  "Byggt och drivit åtta egna bolag i olika branscher",
  "Coachat 650+ bolagsägare under 25 år",
];

const WALKTHROUGH = [
  {
    n: "01",
    title: "Var står bolaget idag?",
    body: "Du berättar var ni är, vad som funkar och vad som skaver. Inga perfekta svar krävs.",
  },
  {
    n: "02",
    title: "Vart vill du?",
    body: "Vi sätter en riktning du tror på, baserat på vad som faktiskt matchar ditt liv och dina mål.",
  },
  {
    n: "03",
    title: "Vad står i vägen?",
    body: "Vi plockar ut de två till tre grejer som bromsar mest just nu, och vad som ska göras först.",
  },
];

const SHIFTS = [
  {
    title: "Bolaget växer utan att kräva mer av dig",
    body: "Du går från att vara i varje beslut till att leda strategiskt. Teamet rör sig framåt även när du inte är i rummet.",
  },
  {
    title: "Rätt person på rätt plats",
    body: "Du vet vem som ska rekryteras, vem som ska lyftas och vem som bromsar. Teamet tar ägarskap, inte bara uppgifter.",
  },
  {
    title: "Du får kontroll på siffrorna",
    body: "Du läser bolaget på rätt nyckeltal, ser var marginalerna läcker och fattar beslut på fakta istället för magkänsla.",
  },
  {
    title: "Tid tillbaka till det som räknas",
    body: "Du jobbar färre timmar men mer av rätt sort. Helgerna är dina igen, familjen får dig närvarande.",
  },
  {
    title: "Du leder med mer säkerhet",
    body: "Du har en sparringpartner som ser bolaget utifrån. Besluten blir skarpare och tveksamheten mindre.",
  },
  {
    title: "Ett bolag som inte äger dig",
    body: "Bolaget är byggt för att leva utan att du står i mitten. Du äger det, det äger inte dig.",
  },
];

export default function Strategisession() {
  return (
    <>
      <JsonLd id="strategisession-schema" data={[serviceSchema, breadcrumbSchema]} />
      <StrategyHero />
      <LogoCarousel />

      {/* VAD VI GÅR IGENOM */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-5 justify-center">Vad vi går igenom under 30 min</p>
            <h2 className="reveal reveal-d1">
              Tre frågor. <em>Konkret output.</em>
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Du behöver inte förbereda något. Vi pratar som två bolagsägare, inte som konsult och klient.
            </p>
          </div>

          <div className="grid gap-5 md:gap-4 md:grid-cols-3 max-w-5xl mx-auto">
            {WALKTHROUGH.map((step, i) => (
              <article
                key={step.n}
                className={`reveal reveal-d${i + 1} rounded-3xl bg-white border border-[color:var(--border-soft)] p-7 md:p-8 shadow-[0_18px_42px_-24px_rgba(23,59,96,0.18)]`}
              >
                <div className="font-[family-name:var(--font-lora)] font-semibold italic text-[2.3rem] md:text-[2.6rem] leading-none text-[color:var(--glod)] mb-5">
                  {step.n}
                </div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.2rem] md:text-[1.3rem] leading-tight text-[color:var(--marin)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[0.98rem] text-ink-soft leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>

          <p className="reveal reveal-d4 mt-10 max-w-xl mx-auto text-center text-[0.95rem] text-ink-soft">
            Du går därifrån med konkreta nästa steg, oavsett om vi fortsätter jobba ihop eller inte.
          </p>
        </div>
      </section>

      {/* SEX MÅNADER FRÅN NU */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-5 justify-center">Förflyttningar som jag hjälper till med</p>
            <h2 className="reveal reveal-d1">
              Sex månader från nu <em>känner du skillnaden</em> i vardagen.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Det här är det jag ser hända med bolagsägare jag jobbar med. Inte över en natt, men stadigt och på riktigt.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {SHIFTS.map((s, i) => (
              <article
                key={s.title}
                className={`reveal reveal-d${(i % 5) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] p-7 shadow-[0_18px_42px_-30px_rgba(23,59,96,0.22)]`}
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-[color:var(--glod-dim)] inline-flex items-center justify-center text-[color:var(--glod)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[1.15rem] leading-tight text-[color:var(--marin)]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[0.98rem] text-ink-soft leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials tone="papper" />

      {/* ABOUT */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[3rem] bg-white"
              />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] max-w-[480px] mx-auto">
                <Image
                  src="/images/ola-fatolj.jpg"
                  alt="Ola Wallström i fåtölj"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-5">Vem är det som ringer upp</p>
              <h2 className="reveal reveal-d1">
                25 års erfarenhet som serieentreprenör och mentor.
              </h2>
              <div className="reveal reveal-d2 mt-6 space-y-4 text-[1.02rem] text-ink-soft leading-relaxed">
                <p>
                  Jag är civilekonom och har en bakgrund som marknadschef på Affärsvärlden.
                  Serieentreprenör med åtta egna bolag i olika branscher, så jag vet av egen
                  erfarenhet vad som krävs för att skala ett bolag lönsamt.
                </p>
                <p>
                  Under 25 år har jag coachat över 650 bolagsägare och ledare. Min VIP-coaching bygger på
                  fyra principer: <em>Äkta, Klarhet, Genomförande och Frihet</em>. De hjälper dig
                  att gå från 10 till 50 Mkr utan att offra livet runt omkring.
                </p>
                <p>
                  Jag tar emot ett begränsat antal klienter per år för att hålla kvaliteten hög i
                  varje samarbete.
                </p>
              </div>
              <ul className="reveal reveal-d3 mt-10 space-y-3">
                {CREDS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1rem] text-ink">
                    <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
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

      {/* CALENDLY EMBED */}
      <section id="boka" className="py-[var(--section-y)] sec-marin relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(242,106,46,0.2) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(242,106,46,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="container-site relative">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="reveal eyebrow mb-5 justify-center text-[color:var(--glod)]">För dig som vill äga ditt bolag på riktigt</p>
            <h2 className="reveal reveal-d1 text-[color:var(--papper)]">
              Välj en tid som <em>passar dig</em>.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-[color:var(--papper)]/80 leading-relaxed max-w-2xl mx-auto">
              Boka ett kostnadsfritt 30 minuters samtal med mig. Jag ger dig konkreta insikter oavsett om jag blir rätt mentor för dig eller inte.
            </p>
            <div className="reveal reveal-d3 mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.9rem] text-[color:var(--papper)]/80">
              {["Kostnadsfritt", "30 minuter", "Direkt med mig", "Inget säljtryck"].map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d4 max-w-4xl mx-auto rounded-3xl overflow-hidden bg-papper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <iframe
              src="https://calendly.com/olawallstrom/30min?hide_gdpr_banner=1"
              title="Boka strategisamtal med Ola Wallström"
              width="100%"
              height="720"
              frameBorder="0"
              className="block"
            />
          </div>
        </div>
      </section>

      <PageFAQ
        tone="papper"
        heading="Vanliga frågor"
        intro="Det här är frågorna jag får oftast innan ett strategisamtal. Hittar du inte svaret, boka ett samtal så pratar vi."
        items={[
          {
            q: "Är det verkligen gratis?",
            a: (
              <>
                Ja. 30 min, inget säljtryck. Jag tar betalt för uppdrag, inte för första samtalet.
                Om vi båda tycker att det passar att jobba vidare pratar vi upplägg och pris då.
              </>
            ),
          },
          {
            q: "Måste jag förbereda något?",
            a: (
              <>
                Nej. Kom precis som du är. Vi börjar med var ditt bolag står idag, jag ställer de
                frågor jag behöver. Du behöver inte ha ett tydligt problem definierat, det är
                ofta därför vi pratar.
              </>
            ),
          },
          {
            q: "Vem är det för?",
            a: (
              <>
                VD och ägare i bolag mellan 10 och 50 Mkr som vill växa vidare utan att offra livet
                runt omkring. Om du är i ett annat segment eller läge: boka ändå, jag säger till om
                jag inte är rätt person och tipsar om någon annan.
              </>
            ),
          },
          {
            q: "Vad händer efter samtalet?",
            a: (
              <>
                Du går därifrån med konkreta nästa steg du kan agera på direkt. Om det känns rätt
                för oss båda pratar vi om fortsättning, antingen Boardroom 2027 eller VIP-coaching
                1:1. Om inte, har du ändå fått något med dig.
              </>
            ),
          },
          {
            q: "Hur bokar jag?",
            a: (
              <>
                Scrolla upp till kalendern här på sidan och välj en tid som passar. Du får ett Zoom-link
                direkt. Det är allt.
              </>
            ),
          },
        ]}
      />

      {/* BOARDROOM TEASER */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="reveal relative overflow-hidden rounded-3xl sec-marin p-8 md:p-12">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
            />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
              <div>
                <p className="eyebrow-upper mb-5">Ola erbjuder också</p>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight text-[color:var(--papper)]">
                  Boardroom 2027. Ett år, fyra teman.
                </h3>
                <p className="mt-5 text-[1rem] text-[color:var(--papper)]/80 leading-relaxed max-w-xl">
                  Vill du gå in i ett helt program? Boardroom är Olas 12-månaders upplägg för
                  VD/ägare, i ett litet rum av erfarna ägare, med personligt stöd hela vägen.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link href="/boardroom" className="btn-primary">
                    Se programmet
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </Link>
                  <span className="text-[0.85rem] text-[color:var(--papper)]/60">
                    195 000 kr, max 15 deltagare, begränsat antal platser 2027
                  </span>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-2 justify-end">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-[color:var(--papper)] text-[0.78rem] font-semibold">Q1 Mental klarhet</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--olabla)] text-[color:var(--papper)] text-[0.78rem] font-semibold">Q2 Stjärnledarskap</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--glod)] text-white text-[0.78rem] font-semibold">Q3 Affärsutveckling</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--sand)] text-[color:var(--marin)] text-[0.78rem] font-semibold">Q4 Säljstrategi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
