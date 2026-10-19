import Image from "next/image";
import type { Metadata } from "next";
import WebinarSignupForm from "@/components/WebinarSignupForm";
import TestimonialsClean from "@/components/TestimonialsClean";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gratis webinar: så bygger du ett bolag som inte äger dig",
  description:
    "Live på Zoom i november. 60 minuter för bolagsägare i segmentet 10-50 Mkr. Ola Wallström delar de fyra principerna bakom 650+ coachade bolag. Kostnadsfritt.",
  alternates: { canonical: "/webinar" },
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
  "Nästan varje viktigt beslut går fortfarande via mig.",
  "Teamet gör sitt, men ingen rör sig som en delägare. Allt väntar på mig.",
  "Jag jobbar fler timmar nu än när bolaget var hälften så stort.",
  "Jag är aldrig riktigt ledig. Bolaget tar plats även på helgerna.",
  "Bolaget växer, men det gör också mitt behov av att vara med överallt.",
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
    body: "Äkta, Klarhet, Genomförande, Frihet. Samma ramverk som jag använder i varje VIP-coaching. Du får hela modellen på en A4.",
  },
  {
    n: "03",
    title: "Första steget mot ett bolag som rullar själv",
    body: "En konkret bolagsdiagnos du gör på en helg, där du ser svart på vitt var din tid faktiskt läcker ut i dag.",
  },
  {
    n: "04",
    title: "Öppen frågestund",
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

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h1 className="reveal" style={{ fontSize: "clamp(2.5rem, 4.6vw, 3.9rem)" }}>
                Så bygger du ett bolag <em>som inte äger dig</em>.
              </h1>
              <p className="reveal reveal-d1 mt-6 text-[1.1rem] md:text-[1.2rem] leading-relaxed text-ink-soft max-w-xl mx-auto">
                60 minuter där jag delar de fyra principerna jag har använt med fler än 650
                bolagsägare för att ta sig förbi taket vid 10 Mkr. Live på Zoom, kostnadsfritt och
                med öppen frågestund.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[0.98rem] font-semibold text-[color:var(--marin)]">
                {EVENT_DATE_LABEL} kl. {EVENT_TIME_LABEL} · max {SEATS_LIMIT} platser
              </p>

              <ul className="reveal reveal-d3 mt-8 mx-auto w-fit max-w-md flex flex-col gap-3 text-left">
                {[
                  "De tre mönstren som gör dig till flaskhals",
                  "Hela ramverket på en A4, samma som mina VIP-klienter får",
                  "Bolagsdiagnosen (PDF) direkt efter anmälan",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[1rem] text-ink leading-relaxed">
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

            <div id="anmal-top" className="reveal reveal-d2 flex">
              <div className="w-full rounded-3xl sec-marin px-7 py-10 md:px-10 flex flex-col justify-center text-center shadow-[0_30px_70px_-34px_rgba(23,59,96,0.6)]">
                <h2 className="text-[color:var(--papper)]" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2rem)" }}>
                  Säkra din plats. Gratis.
                </h2>
                <p className="mt-3 mb-7 text-[0.98rem] text-[color:var(--papper)]/70">
                  Du får Zoom-länken och bolagsdiagnosen direkt till din mejl.
                </p>
                <WebinarSignupForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 sec-sand">
        <div className="container-site text-center">
          <p className="reveal text-[1rem] text-ink-soft">Betrodd av fler än 650 bolagsägare sedan 2001</p>
          <div className="mt-7 flex items-center justify-center gap-8 md:gap-12 opacity-70 flex-wrap">
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
      </section>

      <section className="py-16 md:py-20 sec-papper">
        <div className="container-site">
          <dl className="grid gap-4 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {DETAILS.map((d) => (
              <div
                key={d.label}
                className="reveal flex flex-col-reverse justify-end rounded-2xl bg-white px-5 py-7 text-center shadow-[0_14px_36px_-30px_rgba(23,59,96,0.35)]"
              >
                <dt className="mt-1.5 text-[0.88rem] text-muted">{d.label}</dt>
                <dd className="font-[family-name:var(--font-lora)] font-semibold text-[1.25rem] md:text-[1.35rem] text-[color:var(--marin)] leading-tight">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">
              Du leder ett miljonbolag på <em>samma sätt</em> som när du startade.
            </h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.15rem] text-[color:var(--papper)]/75 leading-relaxed">
              Då är problemet inte att du behöver jobba hårdare. Känner du igen någon av de här
              tankarna?
            </p>
          </div>
          <ul className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4 md:gap-5">
            {PAIN_POINTS.map((p, i) => (
              <li
                key={p}
                className={`reveal reveal-d${(i % 4) + 1} w-full md:w-[calc(50%-0.625rem)] flex flex-col items-center justify-center text-center rounded-2xl bg-white/[0.06] ring-1 ring-white/12 px-8 py-10 md:px-11`}
              >
                <span aria-hidden className="font-[family-name:var(--font-lora)] text-[3.2rem] leading-[0.55] text-[color:var(--glod)]">
                  &ldquo;
                </span>
                <p className="mt-5 font-[family-name:var(--font-lora)] italic text-[1.18rem] md:text-[1.3rem] leading-relaxed text-[color:var(--papper)]/90">
                  {p}
                </p>
              </li>
            ))}
          </ul>
          <p className="reveal reveal-d3 mt-14 text-center max-w-2xl mx-auto font-[family-name:var(--font-lora)] text-[1.35rem] md:text-[1.6rem] leading-snug text-[color:var(--papper)]">
            Det går att komma ur. Inte med fler att göra-listor, utan genom <em className="text-[color:var(--glod)]">hur du leder</em>.
          </p>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="reveal">Det här går jag igenom under de 60 minuterna.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              Inga powerpoint-föreläsningar. Jag delar det jag faktiskt säger till bolagsägare när vi
              sitter öga mot öga, och visar exempel från mitt klientarbete.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {LESSONS.map((l, i) => (
              <article
                key={l.n}
                className={`reveal reveal-d${(i % 4) + 1} rounded-2xl bg-white border border-[color:var(--border-soft)] px-7 py-9 md:px-10 text-center`}
              >
                <div className="font-[family-name:var(--font-lora)] italic font-semibold text-[2.2rem] leading-none text-[color:var(--glod)]">
                  {l.n}
                </div>
                <h3 className="mt-4 mb-3 leading-tight" style={{ fontSize: "1.25rem" }}>{l.title}</h3>
                <p className="text-[0.98rem] text-ink-soft leading-relaxed max-w-md mx-auto">{l.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="reveal">
              Tre saker du tar med dig, oavsett om du gör något mer med mig eller inte.
            </h2>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
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
                <h3 className="mb-3 leading-tight" style={{ fontSize: "1.2rem" }}>{b.title}</h3>
                <p className="text-[0.96rem] text-ink-soft leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/5] bg-sand max-w-[480px] w-full mx-auto">
              <Image
                src="/images/ola-biljard-ko.jpg"
                alt="Ola Wallström vid ett biljardbord"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="reveal">25 år som entreprenör. Fler än 650 coachade bolagsägare.</h2>
              <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-lg mx-auto">
                Jag är Ola Wallström. Civilekonom, tidigare marknadschef på Affärsvärlden och med
                åtta egna bolag bakom mig. Jag jobbar främst med bolagsägare med bolag mellan 10 och
                50 miljoner som vill växa vidare utan att offra livet runt omkring.
              </p>
              <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-ink-soft leading-relaxed max-w-lg mx-auto">
                Det jag delar på webinaret är ingen teaser. Det är samma ramverk som mina VIP-klienter
                jobbar med, förtätat till 60 minuter.
              </p>

              <dl className="reveal reveal-d3 mt-10 flex justify-center gap-10 sm:gap-14">
                {[
                  { n: "650+", l: "coachade ägare" },
                  { n: "25 år", l: "som entreprenör" },
                  { n: "8", l: "egna bolag" },
                ].map((st) => (
                  <div key={st.l} className="flex flex-col-reverse justify-end">
                    <dt className="mt-2 text-[0.85rem] text-muted">{st.l}</dt>
                    <dd className="font-[family-name:var(--font-lora)] font-semibold text-[1.9rem] md:text-[2.2rem] leading-none text-[color:var(--marin)]">
                      {st.n}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsClean tone="sand" />

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
                    {p.replace(/^Du /, "")}
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
                    {p.replace(/^Du /, "")}
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
              <h2 className="reveal">Här är det jag brukar få frågor om innan.</h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  className={`reveal reveal-d${(i % 4) + 1} group rounded-2xl bg-white border border-[color:var(--border-soft)] overflow-hidden open:border-[color:var(--glod)]/40 transition-colors`}
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 font-[family-name:var(--font-lora)] font-semibold text-[1.05rem] md:text-[1.1rem] text-[color:var(--marin)]">
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
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="anmal" className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="reveal text-[color:var(--papper)]">Säkra din plats innan den är tagen.</h2>
            <p className="reveal reveal-d1 mt-5 text-[1.05rem] text-[color:var(--papper)]/75 leading-relaxed">
              {EVENT_DATE_LABEL} kl. {EVENT_TIME_LABEL}, max {SEATS_LIMIT} platser. Fyll i namn och
              e-post så får du Zoom-länken och bolagsdiagnosen direkt. Kan du inte vara med live
              skickar jag inspelningen efteråt.
            </p>
          </div>

          <div className="reveal reveal-d2 max-w-xl mx-auto">
            <WebinarSignupForm dark />
          </div>

          <p className="reveal reveal-d3 mt-6 text-center text-[0.85rem] text-[color:var(--papper)]/60">
            Inga uppsäljningar under webinaret. Inget köptvång efteråt.
          </p>
        </div>
      </section>
    </>
  );
}
