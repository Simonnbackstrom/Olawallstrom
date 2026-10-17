import Image from "next/image";
import type { Metadata } from "next";
import WebinarForm from "@/components/WebinarForm";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gratis webinar: så bygger du ett bolag som inte äger dig",
  description:
    "Live på Zoom i november. 60 minuter för bolagsägare i segmentet 10-50 Mkr. Ola Wallström delar de fyra principerna bakom 650+ coachade bolag. Kostnadsfritt.",
  alternates: { canonical: "/webinar" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Gratis webinar: så bygger du ett bolag som inte äger dig",
    description:
      "Live på Zoom i november. 60 minuter med Ola Wallström. Begränsat antal platser.",
    url: "https://olawallstrom.com/webinar",
    type: "website",
  },
};

const EVENT_DATE_ISO = "2026-11-11T09:00:00+01:00";
const EVENT_DATE_LABEL = "Onsdag 11 november";
const EVENT_TIME_LABEL = "09.00–10.00";
const SEATS_LIMIT = 100;

const DETAILS = [
  { label: "Datum", value: EVENT_DATE_LABEL },
  { label: "Tid", value: EVENT_TIME_LABEL },
  { label: "Format", value: "Live på Zoom" },
  { label: "Pris", value: "Kostnadsfritt" },
];

const PAIN_POINTS = [
  "Du blir flaskhalsen i nästan varje viktigt beslut.",
  "Teamet gör sitt, men ingen rör sig som en delägare, allt väntar på dig.",
  "Du jobbar fler timmar nu än när bolaget var hälften så stort.",
  "Du är aldrig riktigt mentalt ledig, bolaget tar plats även på helgerna.",
  "Bolaget växer, men ditt beroende av att vara med överallt växer också.",
];

const LESSONS = [
  {
    n: "01",
    title: "Varför bolag stannar vid 10 Mkr",
    body: "De tre mönstren som gör att du blir flaskhals när omsättningen passerar 10 miljoner, och exakt var i din vecka de syns.",
  },
  {
    n: "02",
    title: "Fyra principer som flyttar bolag",
    body: "Äkta, Klarhet, Genomförande, Frihet. Samma ramverk som jag använder i varje VIP-coachning. Du får hela modellen på en A4.",
  },
  {
    n: "03",
    title: "Första steget mot ett bolag som rullar själv",
    body: "En konkret bolagsdiagnos du gör på en helg, och ser svart på vitt var din tid faktiskt läcker ut idag.",
  },
  {
    n: "04",
    title: "Öppen frågestund med Ola",
    body: "Sista 15 minuterna är dina. Ta med en konkret knut i ditt bolag så svarar jag live.",
  },
];

const BONUSES = [
  {
    title: "Bolagsdiagnosen (PDF)",
    body: "Min 1-sidors självutvärdering som visar var tiden läcker ut. Mejlas ut direkt efter anmälan.",
  },
  {
    title: "Inspelning i efterhand",
    body: "Kan du inte gå live får du inspelningen samma eftermiddag. Giltig i 7 dagar.",
  },
  {
    title: "A4:n med de fyra principerna",
    body: "Hela ramverket på en sida, samma underlag som mina VIP-klienter får.",
  },
];

const FOR_WHOM = [
  "Du äger ett bolag i segmentet 10-50 Mkr.",
  "Du är själv flaskhals i det dagliga.",
  "Du vill växa vidare utan att offra livet runt omkring.",
  "Du är öppen för att ändra på dig själv, inte bara teamet.",
];

const NOT_FOR_WHOM = [
  "Du söker en quick-fix eller en ny marknadsföringskanal.",
  "Du vill bli underhållen snarare än utmanad.",
  "Du är inte beredd att göra jobbet själv.",
];

const FAQ = [
  {
    q: "Är det verkligen gratis?",
    a: "Ja. Inga uppsäljningar under webinaret, inget köptvång efteråt. Vill du jobba vidare med mig får du höra av dig själv.",
  },
  {
    q: "Vad händer om jag inte kan vara med live?",
    a: "Anmäl dig ändå. Du får inspelningen samma eftermiddag, giltig i 7 dagar. Men live är bättre, det är då frågestunden händer.",
  },
  {
    q: "Hur många deltagare?",
    a: `Jag håller det runt ${SEATS_LIMIT} personer så att frågestunden faktiskt fungerar. När det är fullt stängs anmälan.`,
  },
  {
    q: "Är det för mig som bara ligger på 3-5 Mkr?",
    a: "Du får ut något, men ramverket är byggt för bolag mellan 10 och 50 Mkr. Är du mindre, vänta och väx först, eller läs om mina andra program på sajten.",
  },
  {
    q: "Spelas kameran in?",
    a: "Bara min skärm och min bild spelas in. Deltagare syns inte i inspelningen.",
  },
  {
    q: "Vad om jag inte vill vänta till 11 november?",
    a: "Boka ett 30 min samtal med mig direkt istället. Kostnadsfritt, inget säljtryck: https://calendly.com/olawallstrom/30min.",
  },
];

const SITE_URL = "https://olawallstrom.com";

const EVENT_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Så bygger du ett bolag som inte äger dig",
  description:
    "Kostnadsfritt live-webinar för bolagsägare i segmentet 10-50 Mkr. 60 minuter om de fyra principerna bakom 650+ coachade bolag.",
  startDate: EVENT_DATE_ISO,
  endDate: "2026-11-11T10:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: `${SITE_URL}/webinar`,
  },
  organizer: {
    "@type": "Person",
    name: "Ola Wallström",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SEK",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/webinar#anmal`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Webinar", item: `${SITE_URL}/webinar` },
  ],
};

export default function WebinarPage() {
  return (
    <>
      <JsonLd id="webinar-schema" data={[EVENT_LD, faqSchema, breadcrumbSchema]} />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden sec-papper">
        <div
          aria-hidden
          className="absolute -top-32 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(242,106,46,0.14) 0%, transparent 65%)",
          }}
        />
        <div className="container-site relative">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="reveal inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[color:var(--glod-dim)] border border-[color:var(--glod)]/30">
                <span className="h-2 w-2 rounded-full bg-[color:var(--glod)] animate-pulse" />
                <span className="text-[0.78rem] font-semibold tracking-wide uppercase text-[color:var(--marin)]">
                  Live {EVENT_DATE_LABEL.toLowerCase()}, max {SEATS_LIMIT} platser
                </span>
              </div>
              <p className="reveal eyebrow mb-6">Gratis webinar</p>
              <h1 className="reveal reveal-d1">
                Så bygger du ett bolag <em>som inte äger dig</em>.
              </h1>
              <p className="reveal reveal-d2 mt-6 text-[1.1rem] md:text-[1.2rem] leading-relaxed text-ink-soft max-w-xl">
                60 minuter om de fyra principerna jag använt för att hjälpa 650+ bolagsägare
                bryta igenom taket vid 10 Mkr. Live på Zoom, kostnadsfritt, med öppen frågestund.
              </p>

              <ul className="reveal reveal-d3 mt-8 space-y-3 max-w-md">
                {[
                  "De tre mönstren som gör dig till flaskhals",
                  "Hela ramverket på en A4, samma som VIP-klienter får",
                  "Bolagsdiagnosen (PDF) direkt efter anmälan",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-[1rem] text-ink">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d4 mt-10 flex items-center gap-4">
                <a href="#anmal" className="btn-primary">
                  Säkra min plats
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
                <span className="text-[0.9rem] text-muted">60 sek, ingen bindning</span>
              </div>
            </div>

            <div id="anmal-top" className="reveal reveal-d2 lg:sticky lg:top-24">
              <div className="rounded-3xl bg-[color:var(--marin)] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, rgba(242,106,46,0.2) 0%, transparent 55%)",
                  }}
                />
                <div className="relative">
                  <div className="eyebrow-upper text-[color:var(--glod)] mb-3">Anmäl dig nu</div>
                  <h2 className="text-[color:var(--papper)] text-[1.6rem] md:text-[1.8rem] leading-tight mb-5">
                    Säkra din plats. Gratis.
                  </h2>
                  <p className="text-[color:var(--papper)]/70 text-[0.95rem] mb-6">
                    Du får Zoom-länken och bolagsdiagnosen direkt till mejlen.
                  </p>
                  <WebinarForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 sec-sand border-y border-[color:var(--border-soft)]">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="eyebrow-upper text-center md:text-left">
              Betrott av 650+ bolagsägare sedan 2001
            </p>
            <div className="flex items-center gap-8 md:gap-12 opacity-70 flex-wrap justify-center">
              {["belatchew", "ezelius", "pmab", "wolfbuilder", "safestep"].map((slug) => (
                <div key={slug} className="relative h-8 w-24 md:h-10 md:w-28">
                  <Image
                    src={`/logos/logo-${slug}.png`}
                    alt={slug}
                    fill
                    sizes="120px"
                    className="object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 sec-papper">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DETAILS.map((d) => (
              <div
                key={d.label}
                className="reveal rounded-2xl bg-sand/40 border border-[color:var(--border-soft)] p-6"
              >
                <div className="eyebrow-upper mb-2">{d.label}</div>
                <div className="font-[family-name:var(--font-lora)] font-semibold text-[1.3rem] text-[color:var(--marin)] leading-tight">
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-4">Känner du igen dig?</p>
            <h2 className="reveal reveal-d1">
              Du leder ett miljonbolag på <em>samma sätt</em> som när du startade.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Då är problemet inte att du behöver jobba hårdare. Det är att bolaget fortfarande är byggt runt dig.
            </p>
          </div>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {PAIN_POINTS.map((p, i) => (
              <div
                key={p}
                className={`reveal reveal-d${(i % 4) + 1} flex gap-4 items-start rounded-2xl bg-white border border-[color:var(--border-soft)] px-6 py-5`}
              >
                <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--marin)]/8 text-[color:var(--marin)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="13" />
                    <circle cx="12" cy="18" r="1.2" fill="currentColor" />
                  </svg>
                </span>
                <p className="text-[1.02rem] text-ink leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
          <p className="reveal reveal-d3 mt-10 text-center max-w-xl mx-auto text-[1.02rem] text-ink-soft italic font-[family-name:var(--font-lora)]">
            Det går att komma ur. Men inte med fler to-dos. Det handlar om hur du leder.
          </p>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <p className="reveal eyebrow mb-4">Agenda</p>
            <h2 className="reveal reveal-d1">
              Det här går jag igenom under de 60 minuterna.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Inga powerpoint-föreläsningar. Jag delar det jag faktiskt säger till
              bolagsägare när vi sitter öga mot öga, och visar exempel från klientarbete.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {LESSONS.map((l, i) => (
              <article
                key={l.n}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] p-7 md:p-8`}
              >
                <div className="font-[family-name:var(--font-lora)] italic font-semibold text-[2.2rem] leading-none text-[color:var(--glod)] mb-5">
                  {l.n}
                </div>
                <h3 className="text-[1.2rem] leading-tight mb-3 text-[color:var(--marin)]">
                  {l.title}
                </h3>
                <p className="text-[0.98rem] text-ink-soft leading-relaxed">{l.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="reveal eyebrow mb-4">Du får också</p>
            <h2 className="reveal reveal-d1">
              Tre saker du tar med dig, oavsett om du gör något mer med mig eller inte.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BONUSES.map((b, i) => (
              <div
                key={b.title}
                className={`reveal reveal-d${(i % 3) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] p-7`}
              >
                <div className="mb-5 h-11 w-11 rounded-full bg-[color:var(--glod-dim)] inline-flex items-center justify-center text-[color:var(--glod)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[1.15rem] leading-tight mb-3 text-[color:var(--marin)]">
                  {b.title}
                </h3>
                <p className="text-[0.95rem] text-ink-soft leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute -top-5 -right-5 w-[85%] h-[85%] rounded-3xl pointer-events-none"
                style={{
                  border: "2px solid var(--glod)",
                  clipPath: "polygon(0 0, 100% 0, 100% 72%, 70% 100%, 0 100%)",
                }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand">
                <Image
                  src="/images/ola-biljard-ko.jpg"
                  alt="Ola Wallström med biljardkö – mentor för bolagsägare i segmentet 10-50 Mkr"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-4">Vem håller i det</p>
              <h2 className="reveal reveal-d1">
                25 år som serieentreprenör. 650+ coachade bolagsägare.
              </h2>
              <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed">
                Jag är Ola Wallström. Civilekonom, tidigare marknadschef på Affärsvärlden
                och åtta egna bolag bakom mig. Jag jobbar främst med bolagsägare i
                segmentet 10-50 Mkr som vill växa vidare utan att offra livet runt omkring.
              </p>
              <p className="reveal reveal-d3 mt-5 text-[1.02rem] text-ink-soft leading-relaxed">
                Det jag delar på webinaret är inte en teaser. Det är samma ramverk som
                mina VIP-klienter jobbar med, förtätat till 60 minuter.
              </p>

              <dl className="reveal reveal-d4 mt-8 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <dt className="font-[family-name:var(--font-lora)] font-semibold text-[1.8rem] md:text-[2rem] leading-none text-[color:var(--marin)]">
                    650+
                  </dt>
                  <dd className="mt-2 text-[0.78rem] tracking-wide text-muted uppercase">
                    Coachade
                  </dd>
                </div>
                <div>
                  <dt className="font-[family-name:var(--font-lora)] font-semibold text-[1.8rem] md:text-[2rem] leading-none text-[color:var(--marin)]">
                    25 år
                  </dt>
                  <dd className="mt-2 text-[0.78rem] tracking-wide text-muted uppercase">
                    I rollen
                  </dd>
                </div>
                <div>
                  <dt className="font-[family-name:var(--font-lora)] font-semibold text-[1.8rem] md:text-[2rem] leading-none text-[color:var(--marin)]">
                    8
                  </dt>
                  <dd className="mt-2 text-[0.78rem] tracking-wide text-muted uppercase">
                    Egna bolag
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Testimonials tone="sand" />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <p className="reveal eyebrow mb-4 text-[color:var(--glod)]">Det här är för dig som</p>
              <ul className="reveal reveal-d1 space-y-3">
                {FOR_WHOM.map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[1rem] text-ink">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="reveal eyebrow mb-4 text-muted">Det här är inte för dig som</p>
              <ul className="reveal reveal-d2 space-y-3">
                {NOT_FOR_WHOM.map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[1rem] text-ink-soft">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--marin)]/8 text-[color:var(--marin)]/60">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="6" y1="6" x2="18" y2="18" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="reveal eyebrow mb-4">Vanliga frågor</p>
              <h2 className="reveal reveal-d1">
                Här är det jag brukar få frågor om innan.
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  className={`reveal reveal-d${(i % 4) + 1} group rounded-2xl bg-white border border-[color:var(--border-soft)] overflow-hidden`}
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-6 text-[1.02rem] font-semibold text-[color:var(--marin)]">
                    {item.q}
                    <span className="shrink-0 h-8 w-8 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)] transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-[0.98rem] text-ink-soft leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="anmal" className="py-[var(--section-y)] sec-marin relative overflow-hidden">
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
            <div className="reveal inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[color:var(--glod-dim)] border border-[color:var(--glod)]/30">
              <span className="h-2 w-2 rounded-full bg-[color:var(--glod)] animate-pulse" />
              <span className="text-[0.78rem] font-semibold tracking-wide uppercase text-[color:var(--papper)]">
                Max {SEATS_LIMIT} platser, {EVENT_DATE_LABEL}
              </span>
            </div>
            <h2 className="reveal reveal-d1 text-[color:var(--papper)]">
              Säkra din plats innan den är tagen.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-[color:var(--papper)]/80 leading-relaxed">
              Fyll i din mejl så får du Zoom-länken och bolagsdiagnosen direkt. Kommer du inte
              live skickar jag även inspelningen efteråt.
            </p>
          </div>

          <div className="reveal reveal-d3 max-w-xl mx-auto">
            <WebinarForm />
          </div>

          <p className="reveal reveal-d4 mt-6 text-center text-[0.85rem] text-[color:var(--papper)]/60">
            Inga uppsäljningar under webinaret. Inget köptvång efteråt.
          </p>
        </div>
      </section>
    </>
  );
}
