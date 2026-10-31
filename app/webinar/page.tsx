import Image from "next/image";
import type { Metadata } from "next";
import WebinarSignupForm from "@/components/WebinarSignupForm";
import WebinarCountdown from "@/components/WebinarCountdown";
import WebinarStickyCta from "@/components/WebinarStickyCta";
import TestimonialsClean from "@/components/TestimonialsClean";
import LogoCarousel from "@/components/LogoCarousel";
import JsonLd from "@/components/JsonLd";
import { WEBINAR } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Gratis webinar: så växer du från 10 till 50 miljoner, utan att jobba mer",
  description:
    "Live på Zoom 11, 12 och 13 november. 60 minuter för bolagsägare på 10 MSEK+. Ola Wallström delar Tillväxthjulet och fyra skiften bakom 650+ coachade bolag. Kostnadsfritt.",
  alternates: { canonical: "/webinar" },
  openGraph: {
    title: "Gratis webinar: så växer du från 10 till 50 miljoner",
    description:
      "Live på Zoom 11, 12 och 13 november. 60 minuter med Ola Wallström. Tillväxthjulet, fyra skiften, konkreta case.",
    url: "https://olawallstrom.com/webinar",
    type: "website",
  },
};

const EVENT_DATE_ISO = WEBINAR.startISO;
const EVENT_DATE_LABEL = WEBINAR.dateLabel;
const EVENT_TIME_LABEL = WEBINAR.timeLabel;
const SEATS_LIMIT = WEBINAR.seats;

const FACTS = [
  { label: "Datum", value: EVENT_DATE_LABEL },
  { label: "Längd", value: "60 min + Q&A" },
  { label: "Format", value: "Live på Zoom" },
  { label: "Pris", value: "Gratis" },
  { label: "Platser", value: `Max ${SEATS_LIMIT}/tillfälle` },
];

const RECOGNITION = [
  "Du släcker bränder varje dag!",
  "Du är flaskhalsen. Det mesta går via dig!",
  "Du jobbar hårdast, men ändå står ni still!",
  "Återkommande problem som aldrig blir lösta på riktigt!",
  "Du börjar bli trött. På riktigt!",
];

const SHIFTS = [
  {
    n: "01",
    title: "Mental klarhet",
    old: "”Jag sätter större mål och kör hårdare.”",
    neww: "”Jag vet vad jag egentligen vill, och bygger bolaget efter det.”",
    body: "Vart du är på väg, och varför. När riktningen är knivskarp blir varje beslut lättare.",
    caseLabel: "Case · 2 bolag",
    caseBody:
      "Två motsatta beslut: det ena bolaget säljs i stället för att växas vidare, det andra skalar ner och tjänar mer än någonsin.",
  },
  {
    n: "02",
    title: "Ledarskap",
    old: "”Det går fortast om jag gör det själv.”",
    neww: "”Mitt jobb är att göra andra bättre än mig.”",
    body: "Att göra andra självgående. Vet de vad? Vet de hur? Vill de?",
    caseLabel: "Case · 3 månader",
    caseBody:
      "Christoffer fick två mellanchefer på plats. I dag lämnar han på förskolan och tränar tre gånger i veckan, samtidigt som bolaget växer.",
  },
  {
    n: "03",
    title: "Affärsutveckling",
    old: "”Vi säljer det vi alltid sålt, till det pris vi alltid tagit.”",
    neww: "”Vi säljer det värde vi faktiskt skapar, till dem som kan betala för det.”",
    body: "Rätt kunder, rätt paketering, rätt marginal. Det är sällan ett volymproblem.",
    caseLabel: "Case · 24×",
    caseBody:
      "Från 20 000 kr till 480 000 kr på fyra månader, och det blev lättare att sälja, inte svårare.",
  },
  {
    n: "04",
    title: "Försäljning",
    old: "”Vi måste hitta fler nya kunder.”",
    neww: "”Vi börjar där förtroendet redan finns.”",
    body: "De flesta bolag jagar nya kunder när tillväxten faktiskt ligger i de befintliga.",
    caseLabel: "Case · +25 %",
    caseBody:
      "Högre omsättning på tre veckor, genom ett riktat erbjudande till befintliga kunder.",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Anmäl dig på 30 sekunder",
    body: "Välj en av tre dagar och fyll i namn + mejl. Bekräftelse i din inkorg direkt.",
  },
  {
    n: "02",
    title: "Få Zoom-länken",
    body: "Jag mejlar Zoom-länken så du är redo. Självskattning Tillväxthjulet (PDF) delar jag live under webinaret.",
  },
  {
    n: "03",
    title: "Live 60 minuter + öppen frågestund",
    body: "Vi går igenom modellen, de fyra skiften och riktiga case. Enbart live, ingen inspelning efteråt.",
  },
];

const BONUSES = [
  {
    title: "Självskattning Tillväxthjulet (PDF)",
    body: "Mallen jag använder med mina VIP-kunder. Du får den live på webinaret, så vi fyller i den tillsammans och du ser svart på vitt vilken eker som bromsar mest.",
  },
  {
    title: "Ljudboken Ledarskap utan ansträngning",
    body: "Min bok om hur du leder så att andra blir bättre än dig, i stället för att allt landar hos dig. Hela boken i ljud, gratis.",
  },
];

const FOR_WHOM = [
  "Du äger eller leder ett bolag som omsätter minst 10 miljoner.",
  "Du har medarbetare, och allt för många beslut går fortfarande via dig.",
  "Du vill växa, men inte genom att slita mer.",
  "Du är beredd att ändra på dig själv, inte bara teamet.",
];

const NOT_FOR_WHOM = [
  "Du har precis startat och letar efter en första kund.",
  "Du söker en snabb lösning eller en ny marknadsföringskanal.",
  "Du vill bli underhållen snarare än utmanad.",
];

const DATE_OPTIONS_LABEL = WEBINAR.sessions.map((s) => s.label).join(", ");

const FAQ: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: "Är det verkligen gratis?",
    a: "Ja, webinaret är kostnadsfritt. Jag presenterar också ett erbjudande för dig som vill jobba vidare med mig, men det är helt upp till dig om du nappar.",
  },
  {
    q: "Måste jag välja vilken dag jag kommer?",
    a: `Ja. Jag kör samma webinar tre gånger: ${DATE_OPTIONS_LABEL}. Välj den som passar dig bäst när du anmäler dig. Du får en bekräftelse direkt och Zoom-länken före den dagen.`,
  },
  {
    q: "Vad händer om jag inte kan vara med live?",
    a: "Webinaret körs enbart live, ingen inspelning efteråt. Välj det tillfälle som funkar bäst, du har tre att välja på. Det är live som frågestunden och självskattningen händer, och det är då du får mest värde.",
  },
  {
    q: "Är det för mig som precis har startat?",
    a: "Nej, ärligt talat. Innehållet är byggt för etablerade bolag på 10 MSEK och uppåt med medarbetare. Är du i början, väx först, eller läs om mina andra program på sajten.",
  },
  {
    q: "Vad gör jag om jag inte vill vänta till november?",
    a: "Boka ett kostnadsfritt strategisamtal på 30 minuter med mig i stället. Inget säljtryck. Vi tittar på var ditt bolag står och vilken eker som bromsar.",
    link: { href: "https://calendly.com/olawallstrom/30min", label: "Boka ett strategisamtal" },
  },
];

const SITE_URL = "https://olawallstrom.com";

const EVENT_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: WEBINAR.title,
  description:
    "Kostnadsfritt live-webinar för bolagsägare på 10 MSEK+. 60 minuter om Tillväxthjulet och de fyra skiften bakom 650+ coachade bolag.",
  startDate: EVENT_DATE_ISO,
  endDate: WEBINAR.endISO,
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
      <JsonLd id="webinar-schema" data={[EVENT_LD, breadcrumbSchema]} />

      {/* 1. HERO */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h1 className="reveal" style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.5rem)" }}>
                Så växer du från 10 till 50 miljoner, <em>utan att behöva jobba mer.</em>
              </h1>
              <p className="reveal reveal-d1 mt-4 font-[family-name:var(--font-heading)] text-[1.1rem] md:text-[1.25rem] text-[color:var(--marin)]">
                Mer tillväxt. Mindre slit.
              </p>

              <ul className="reveal reveal-d2 mt-6 mx-auto w-fit max-w-md flex flex-col gap-2.5 text-left">
                {[
                  "Konkret var ditt bolag bromsar, och hur du släpper fram tillväxten utan att själv jobba mer",
                  "Fyra skiften med riktiga case: 10 till 50 MSEK, 24× marginal, +25 % på tre veckor",
                  "Självskattning Tillväxthjulet (PDF) live på webinaret, plus ljudbok till din mejl",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.98rem] text-ink leading-relaxed">
                    <span className="mt-[0.2rem] shrink-0 h-5 w-5 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="anmal-top" className="reveal reveal-d1 flex">
              <div className="w-full rounded-3xl sec-marin px-7 py-9 md:px-10 flex flex-col justify-center text-center shadow-[0_30px_70px_-34px_rgba(23,59,96,0.6)]">
                <WebinarCountdown tone="dark" />

                <h2 className="mt-6 text-[color:var(--papper)]" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2rem)" }}>
                  Säkra din plats. Gratis.
                </h2>

                <div className="mt-4 mb-6 inline-flex items-center justify-center gap-2.5 text-[0.9rem] text-[color:var(--papper)]/80">
                  <span className="inline-flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--glod)">
                        <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
                      </svg>
                    ))}
                  </span>
                  <span>
                    <strong className="font-semibold text-[color:var(--papper)]">650+ bolagsägare</strong>
                    {" "}har jobbat med Ola
                  </span>
                </div>

                <WebinarSignupForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO CAROUSEL */}
      <LogoCarousel eyebrow="Betrodd av fler än 650 bolagsägare sedan 2001" />

      {/* 3. FACT BAR */}
      <section className="py-8 md:py-10 sec-papper border-y border-[color:var(--border-soft)]">
        <div className="container-site">
          <ul className="reveal flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10 text-center">
            {FACTS.map((f, i) => (
              <li key={f.label} className="flex items-center gap-3">
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-[0.78rem] uppercase tracking-[0.14em] text-muted">{f.label}</span>
                  <span className="font-[family-name:var(--font-heading)] font-semibold text-[1rem] md:text-[1.05rem] text-[color:var(--marin)]">
                    {f.value}
                  </span>
                </span>
                {i < FACTS.length - 1 && (
                  <span aria-hidden className="hidden md:inline-block h-4 w-px bg-[color:var(--border-soft)]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. VEM ÄR OLA — flyttad upp */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/5] bg-sand max-w-[480px] w-full mx-auto">
              <Image
                src="/images/ola-staende.jpg"
                alt="Ola Wallström står i ett rum med en tavla bakom sig"
                fill
                quality={90}
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <div className="text-center">
              <h2 className="reveal">Vem är Ola?</h2>
              <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-lg mx-auto">
                Civilekonom, författare till fyra böcker om ledarskap och entreprenörskap, och med
                åtta grundade bolag i bagaget. Senaste 25 åren har jag jobbat med fler än 650
                bolagsägare i över 100 branscher, bland annat med ett bolag som gick från 19 MSEK
                till 1,9 miljarder på två år, utan att någon gick sönder.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-ink-soft leading-relaxed max-w-lg mx-auto">
                Det jag delar på webinaret är ingen teaser. Det är samma ramverk som mina
                VIP-kunder jobbar med, förtätat till 60 minuter.
              </p>

              <dl className="reveal reveal-d3 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-xl mx-auto">
                {[
                  { n: "650+", l: "coachade ägare" },
                  { n: "25 år", l: "som entreprenör" },
                  { n: "8", l: "grundade bolag" },
                  { n: "4", l: "böcker" },
                ].map((st) => (
                  <div key={st.l} className="flex flex-col-reverse justify-end">
                    <dt className="mt-2 text-[0.82rem] text-muted leading-tight">{st.l}</dt>
                    <dd className="font-[family-name:var(--font-heading)] font-semibold text-[1.7rem] md:text-[1.9rem] leading-none text-[color:var(--marin)]">
                      {st.n}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PAIN — "Ju mer du gör själv..." */}
      <section className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[color:var(--papper)]">
              Ju mer du gör själv, <em className="text-[color:var(--glod)]">desto mindre jobbar andra.</em>
            </h2>
            <p className="mt-6 text-[1.1rem] md:text-[1.2rem] text-[color:var(--papper)]/80 leading-relaxed">
              Ett bolag kan bara växa så långt som dess trångaste flaskhals tillåter. I bolag
              mellan 10 och 50 miljoner är den nästan alltid ägaren.
            </p>
            <p className="mt-8 font-[family-name:var(--font-heading)] text-[1.15rem] md:text-[1.3rem] text-[color:var(--papper)]/90">
              Känner du igen dig?
            </p>
          </div>

          <ul className="mt-10 mx-auto max-w-4xl flex flex-wrap justify-center gap-4 md:gap-5">
            {RECOGNITION.map((p) => (
              <li
                key={p}
                className="w-full md:w-[calc(50%-0.625rem)] flex items-center gap-4 rounded-2xl bg-white px-6 py-5 md:px-7 md:py-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)]"
              >
                <span
                  aria-hidden
                  className="shrink-0 h-10 w-10 inline-flex items-center justify-center rounded-full bg-red-600 font-[family-name:var(--font-heading)] font-bold text-[1.25rem] text-white leading-none"
                >
                  !
                </span>
                <p className="text-left font-[family-name:var(--font-heading)] text-[1.05rem] md:text-[1.15rem] leading-snug text-[color:var(--marin)]">
                  {p}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center max-w-2xl mx-auto font-[family-name:var(--font-heading)] text-[1.25rem] md:text-[1.5rem] leading-snug text-[color:var(--papper)]">
            Så vad gör ägarna som bryter kurvan? De slutar jobba <em className="text-[color:var(--glod)]">i</em> bolaget och börjar jobba <em className="text-[color:var(--glod)]">på</em> det.
          </p>

          <div className="mt-10 flex justify-center">
            <a href="#anmal" className="btn-primary !py-3.5 !px-6">
              Jag vill växa utan att slita mer
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 6. TILLVÄXTHJULET + 4 SKIFTEN */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="reveal">
              Tillväxthjulet. <em>Fyra ekrar som bär bolaget.</em>
            </h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.15rem] text-ink-soft leading-relaxed">
              Samma modell som ligger bakom 650 entreprenörers resor. När en eker är svag skakar
              hela hjulet, och det du känner som ”brandkårstider” är nästan alltid en specifik
              eker som inte roterar.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {SHIFTS.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] px-7 py-9 md:px-9 flex flex-col`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-[family-name:var(--font-heading)] font-semibold text-[2rem] leading-none text-[color:var(--glod)]">
                    {s.n}
                  </span>
                  <h3 className="leading-tight" style={{ fontSize: "1.35rem" }}>
                    {s.title}
                  </h3>
                </div>

                <p className="mt-5 text-[0.98rem] text-ink-soft leading-relaxed">{s.body}</p>

                <dl className="mt-6 grid gap-3 text-left">
                  <div className="rounded-xl bg-sand px-4 py-3">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Gammalt
                    </dt>
                    <dd className="mt-1 text-[0.98rem] text-ink/80 italic">{s.old}</dd>
                  </div>
                  <div className="rounded-xl bg-glod-dim px-4 py-3">
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--glod)]">
                      Nytt
                    </dt>
                    <dd className="mt-1 text-[0.98rem] text-[color:var(--marin)] font-medium italic">
                      {s.neww}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t border-[color:var(--border-soft)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--glod)]">
                    {s.caseLabel}
                  </p>
                  <p className="mt-2 text-[0.98rem] text-ink leading-relaxed">{s.caseBody}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <a href="#anmal" className="btn-primary !py-3.5 !px-6">
              Anmäl mig till kostnadsfritt webinar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
            <p className="text-[0.85rem] text-muted">Max {SEATS_LIMIT} platser per tillfälle</p>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS — flyttad upp */}
      <TestimonialsClean tone="sand" cta={{ href: "#anmal", label: "Anmäl mig till kostnadsfritt webinar" }} />

      {/* 8. SÅ FUNKAR DET — 3 steg */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">Så funkar det.</h2>
            <p className="reveal reveal-d1 mt-5 text-[1.05rem] text-ink-soft leading-relaxed">
              Tre steg. Första tar 30 sekunder.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {HOW_IT_WORKS.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-d${(i % 3) + 1} relative rounded-2xl bg-white border border-[color:var(--border-soft)] px-7 py-9 md:px-8 text-center`}
              >
                <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-[color:var(--marin)] inline-flex items-center justify-center font-[family-name:var(--font-heading)] font-semibold text-[1.3rem] text-[color:var(--papper)]">
                  {s.n}
                </div>
                <h3 className="mb-3 leading-tight" style={{ fontSize: "1.2rem" }}>
                  {s.title}
                </h3>
                <p className="text-[0.98rem] text-ink-soft leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BONUSAR */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">
              Två saker du tar med dig, oavsett om du gör något mer med mig eller inte.
            </h2>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {BONUSES.map((b, i) => (
              <div
                key={b.title}
                className={`reveal reveal-d${(i % 3) + 1} rounded-2xl bg-white px-7 py-9 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)]`}
              >
                <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-glod-dim inline-flex items-center justify-center text-[color:var(--glod)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mb-3 leading-tight" style={{ fontSize: "1.2rem" }}>
                  {b.title}
                </h3>
                <p className="text-[0.96rem] text-ink-soft leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MID-PAGE CTA BAND — flyttad hit */}
      <section className="py-14 md:py-16 sec-marin">
        <div className="container-site">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[color:var(--marin)] border border-white/15 px-7 py-9 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-[0_30px_70px_-34px_rgba(0,0,0,0.6)]">
            <div className="flex-1">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--glod)]">
                Få platser kvar
              </p>
              <h3 className="mt-2 text-[color:var(--papper)] leading-tight" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)" }}>
                Säkra din plats, gratis.
              </h3>
              <p className="mt-2 text-[0.95rem] text-[color:var(--papper)]/70">
                {EVENT_DATE_LABEL} · {EVENT_TIME_LABEL} · max {SEATS_LIMIT} platser per gång.
              </p>
            </div>
            <a
              href="#anmal"
              className="btn-primary !py-3.5 !px-6 whitespace-nowrap"
            >
              Anmäl mig till kostnadsfritt webinar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 12. FÖR DIG SOM / INTE FÖR DIG SOM */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            <div className="reveal rounded-3xl bg-white px-7 py-9 md:px-9 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)]">
              <h3 style={{ fontSize: "1.3rem" }}>Det här är för dig som</h3>
              <ul className="mt-6 mx-auto w-fit flex flex-col gap-3 text-left">
                {FOR_WHOM.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[1rem] text-ink leading-relaxed">
                    <span className="mt-[0.2rem] shrink-0 h-5 w-5 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal reveal-d1 rounded-3xl bg-sand px-7 py-9 md:px-9 text-center">
              <h3 style={{ fontSize: "1.3rem" }}>Det här är inte för dig som</h3>
              <ul className="mt-6 mx-auto w-fit flex flex-col gap-3 text-left">
                {NOT_FOR_WHOM.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[1rem] text-ink-soft leading-relaxed">
                    <span className="mt-[0.2rem] shrink-0 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--marin)]/10 text-[color:var(--marin)]/60">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

      {/* 12. FAQ */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="reveal">Här är det jag brukar få frågor om innan.</h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  className={`reveal reveal-d${(i % 4) + 1} group rounded-2xl bg-white border border-[color:var(--border-soft)] overflow-hidden open:border-[color:var(--glod)]/40 transition-colors`}
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 font-[family-name:var(--font-heading)] font-semibold text-[1.05rem] md:text-[1.1rem] text-[color:var(--marin)]">
                    <span aria-hidden className="shrink-0 w-8" />
                    <span className="flex-1 text-center">{item.q}</span>
                    <span className="shrink-0 h-8 w-8 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)] transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 md:px-14 pb-6 text-center text-[0.98rem] text-ink-soft leading-relaxed">
                    {item.a}
                    {item.link && (
                      <>
                        {" "}
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[color:var(--marin)] underline underline-offset-4 hover:text-[color:var(--glod)] transition-colors"
                        >
                          {item.link.label}
                        </a>
                      </>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL SIGNUP */}
      <section id="anmal" className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="reveal text-[color:var(--papper)]">Säkra din plats innan den är tagen.</h2>
            <p className="reveal reveal-d1 mt-5 text-[1.05rem] text-[color:var(--papper)]/75 leading-relaxed">
              Tre tillfällen: {EVENT_DATE_LABEL} kl. {EVENT_TIME_LABEL}. Max {SEATS_LIMIT} platser
              per gång. Välj den dag som passar dig. Du får bekräftelsen direkt och Zoom-länken
              före webinaret. Webinaret körs enbart live, ingen inspelning efteråt.
            </p>
          </div>

          <div className="reveal reveal-d2 max-w-xl mx-auto">
            <WebinarSignupForm dark />
          </div>
        </div>
      </section>

      <WebinarStickyCta />
    </>
  );
}
