import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BoardroomWheel from "@/components/BoardroomWheel";
import JsonLd from "@/components/JsonLd";
import SharedPainPoints from "@/components/SharedPainPoints";
import TestimonialsClean from "@/components/TestimonialsClean";
import PageFAQ from "@/components/PageFAQ";

export const metadata: Metadata = {
  title: "Boardroom 2027. Ett år. Fyra teman.",
  description:
    "Tolv månader för dig som VD eller ägare. Fyra teman, 19 Boardroom sessions, 4 kvartalsavstamp, 4 workshopdagar och personligt stöd hela vägen. Max 15 deltagare.",
  alternates: { canonical: "/boardroom" },
};

const THEMES = [
  {
    q: "Q1 (jan-mar)",
    title: "Mental klarhet",
    body: "Du ser vad som verkligen är viktigt och tar tillbaka kontrollen över din tid och energi.",
    dot: "bg-[color:var(--marin)]",
  },
  {
    q: "Q2 (apr-jun)",
    title: "Stjärnledarskap",
    body: "Du får människor att ta ansvar, tänka själva och fungera bättre tillsammans, utan att allt går via dig.",
    dot: "bg-[color:var(--olabla)]",
  },
  {
    q: "Q3 (jul-sep)",
    title: "Autentisk affärsutveckling",
    body: "Du utvecklar affären utifrån dina egna styrkor och det kunderna faktiskt värdesätter.",
    dot: "bg-[color:var(--glod)]",
  },
  {
    q: "Q4 (okt-dec)",
    title: "Smart säljstrategi",
    body: "Du bygger ett sälj som är tydligt, hållbart och inte hänger på dig.",
    dot: "bg-[color:var(--sand)] ring-1 ring-[color:var(--glod)]/40",
  },
];

const LOOP_STEPS = [
  { n: "01", title: "Frågebatteri", body: "Du reflekterar i lugn och ro inför kvartalets tema." },
  { n: "02", title: "Kvartalsavstamp", body: "Två timmars digital fördjupning tillsammans med gruppen." },
  { n: "03", title: "Workshopdag", body: "En heldag tillsammans, med fullt fokus på temat." },
  { n: "04", title: "Boardroom sessions", body: "4-5 digitala träffar på ungefär en timme var." },
];

const JOURNEY = [
  {
    tag: "Start",
    title: "Personlig startworkshop",
    meta: "4 tim i Stockholm",
    body: "Riktning, viktigaste förflyttningar och en personlig plan.",
    dot: "bg-white ring-2 ring-[color:var(--marin)]",
  },
  {
    tag: "Q1 (jan-mar)",
    title: "Mental klarhet",
    meta: "Avstamp 12 jan, WS 21 jan, 5 sessions",
    body: "Riktning, fokus och kontroll över tid och energi.",
    dot: "bg-[color:var(--marin)]",
  },
  {
    tag: "Q2 (apr-jun)",
    title: "Stjärnledarskap",
    meta: "Avstamp 6 apr, WS 15 apr, 5 sessions",
    body: "Få människor att ta ansvar och fungera tillsammans.",
    dot: "bg-[color:var(--olabla)]",
  },
  {
    tag: "Q3 (jul-sep)",
    title: "Autentisk affärsutveckling",
    meta: "Avstamp 29 jun, WS 7 okt, 4 sessions",
    body: "Utveckla affären utifrån egna styrkor och kundvärde.",
    dot: "bg-[color:var(--glod)]",
  },
  {
    tag: "Q4 (okt-dec)",
    title: "Smart säljstrategi",
    meta: "Avstamp 28 sep, WS 8 okt, 5 sessions",
    body: "Ett sälj som är tydligt, hållbart och mindre personberoende.",
    dot: "bg-[color:var(--sand)] ring-2 ring-[color:var(--glod)]/50",
  },
];

const ONGOING = [
  {
    title: "3 coachingsamtal",
    body: "45 minuter var, bara du och jag. Vi tar det som är viktigast för dig just då.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16 14.4c2.3.1 4 1.6 4.5 4.6" />
      </svg>
    ),
  },
  {
    title: "Signal-kanal",
    body: "Med mig och de andra ägarna, så att du har stöd även mellan träffarna.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12a8.5 8.5 0 0 1-12.3 7.6L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12z" />
        <path d="M8.5 11h7M8.5 14h4.5" />
      </svg>
    ),
  },
  {
    title: "19 Boardroom sessions",
    body: "Ungefär en timme var, digitalt. Här tar vi upp frågor, utmaningar och beslut.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
        <path d="M8.5 14.5l2 2 4-4" />
      </svg>
    ),
  },
];

const SITE_URL = "https://olawallstrom.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/boardroom#service`,
  name: "Boardroom 2027",
  serviceType: "Mentorship Program",
  description:
    "Tolv månader för VD och ägare i segmentet 10-50 Mkr. Fyra teman, 19 Boardroom sessions, 4 kvartalsavstamp, 4 workshopdagar och personligt stöd hela vägen.",
  provider: { "@id": `${SITE_URL}#person` },
  areaServed: "SE",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Bolagsägare och VD i segmentet 10-50 Mkr",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/LimitedAvailability",
    url: `${SITE_URL}/boardroom`,
    eligibleQuantity: {
      "@type": "QuantitativeValue",
      maxValue: 15,
      unitText: "deltagare",
    },
    validFrom: "2027-01-01",
  },
  url: `${SITE_URL}/boardroom`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Boardroom 2027", item: `${SITE_URL}/boardroom` },
  ],
};

export default function BoardroomPage() {
  return (
    <>
      <JsonLd id="boardroom-schema" data={[serviceSchema, breadcrumbSchema]} />
      <PageHero
        align="center"
        plain
        title={
          <>
            Boardroom 2027.<br />
            <em>Ett år. Fyra teman.</em>
          </>
        }
        intro="Det är ensamt högst upp. Därför samlar jag ett litet rum av erfarna ägare under ett helt år. Här får du några att tänka högt med, en gemensam rytm och personligt stöd från mig hela vägen. Max 15 platser."
      />

      <section className="sec-papper pb-[var(--section-y)]">
        <div className="container-site">
          <div className="reveal relative mx-auto max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden bg-sand">
            <Image
              src="/images/ola-runda-bordet.jpg"
              alt="Ola Wallström och bolagsägare runt det runda bordet under en Boardroom-dag"
              fill
              quality={85}
              priority
              sizes="(min-width: 1200px) 1120px, 92vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </section>

      <SharedPainPoints
        plain
        image={{ src: "/images/ola-ensam-fatolj.jpg", alt: "Ola Wallström sitter ensam i en fåtölj" }}
        heading={
          <>
            Du leder, men du är <em>själv i rummet</em> med besluten.
          </>
        }
        intro="Jag har suttit där själv. Ingen i teamet står där du står, och styrelsen, om du har en, pratar sällan om det du faktiskt brottas med. Känner du igen någon av de här tankarna?"
        points={[
          "Varje viktigt beslut landar hos mig, och jag har ingen på samma nivå att bolla det med.",
          "Jag vet att jag borde tänka ett år framåt, men den här veckan tar all min tid.",
          "Någonstans har jag blivit flaskhalsen, och ingen säger det rakt ut.",
          "Jag har byggt ett bra team, men det är ändå ensamt högst upp.",
        ]}
        closer="Det är därför Boardroom finns. Ett rum där du inte behöver bära allt ensam."
        ctaLabel="Boka ett samtal med mig"
      />

      <BoardroomWheel />

      {/* THEMES */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="reveal">Ett år tillsammans, fyra riktningar att växa i.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.1rem] text-ink-soft leading-relaxed">
              Varje kvartal har sitt eget fokus. Vi tar dem i en ordning där det ena bygger vidare på
              det andra.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
            {THEMES.map((t, i) => (
              <article
                key={t.title}
                className={`reveal reveal-d${(i % 4) + 1} rounded-3xl bg-white border border-[color:var(--border-soft)] px-8 py-10 md:px-10 text-center`}
              >
                <div className="inline-flex items-center gap-2.5 text-[0.82rem] text-muted">
                  <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${t.dot}`} />
                  {t.q}
                </div>
                <h3 className="mt-4 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.8rem)" }}>
                  {t.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink-soft max-w-sm mx-auto">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTER LOOP */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="reveal">Samma rytm, fyra varv per år.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
              Varje tema får 90 dagar och fyra steg som bygger på varandra. Du vet alltid var du är i
              resan.
            </p>
          </div>

          <div className="relative grid gap-5 md:gap-6 md:grid-cols-4">
            {LOOP_STEPS.map((s, i) => (
              <article
                key={s.n}
                className={`reveal reveal-d${(i % 4) + 1} relative rounded-2xl bg-white border border-[color:var(--border-soft)] px-6 py-8 text-center shadow-[0_18px_40px_-32px_rgba(23,59,96,0.35)]`}
              >
                <span
                  aria-hidden
                  className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center font-[family-name:var(--font-lora)] italic text-[1.15rem] text-[color:var(--marin)]"
                >
                  <svg viewBox="0 0 48 48" fill="none" className="absolute inset-0 h-full w-full text-[color:var(--glod)]">
                    <path d="M 33 7 A 19 19 0 1 0 42 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  {i + 1}
                </span>
                <h3 className="leading-tight" style={{ fontSize: "1.2rem" }}>{s.title}</h3>
                <p className="mt-3 text-[0.95rem] text-ink-soft leading-relaxed">{s.body}</p>
                {i < LOOP_STEPS.length - 1 && (
                  <svg
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-[color:var(--glod)]"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                )}
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
            <h2 className="reveal">Din resa i Boardroom.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
              Tolv månader, från en personlig start med mig till fyra teman tillsammans med andra
              erfarna ägare.
            </p>
          </div>

          <ol className="relative grid gap-12 md:gap-6 md:grid-cols-5">
            <span
              aria-hidden
              className="hidden md:block absolute top-[7px] left-[10%] right-[10%] h-px bg-[color:var(--marin)]/30"
            />
            {JOURNEY.map((j, i) => (
              <li key={j.tag} className={`reveal reveal-d${(i % 5) + 1} relative flex flex-col items-center text-center`}>
                <span aria-hidden className={`h-[15px] w-[15px] rounded-full ${j.dot}`} />
                <p className="mt-5 text-[0.82rem] text-muted">{j.tag}</p>
                <h3 className="mt-2 leading-tight" style={{ fontSize: "1.15rem" }}>
                  {j.title}
                </h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-soft max-w-[15rem]">{j.body}</p>
                <p className="mt-3 text-[0.8rem] text-muted max-w-[15rem]">{j.meta}</p>
              </li>
            ))}
          </ol>

          <div className="mt-24 text-center">
            <h3 style={{ fontSize: "clamp(1.6rem, 2.6vw, 2rem)" }}>Löpande under hela året</h3>
            <p className="mt-4 text-[1.05rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
              Mellan kvartalen är du aldrig ensam. Jag och gruppen finns där hela vägen.
            </p>
            <ul className="mt-12 grid gap-5 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {ONGOING.map((o, i) => (
                <li
                  key={o.title}
                  className={`reveal reveal-d${i + 1} flex flex-col items-center rounded-3xl bg-white px-7 py-10 shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)]`}
                >
                  <span className="h-14 w-14 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                    {o.icon}
                  </span>
                  <h4 className="mt-6 font-[family-name:var(--font-lora)] font-semibold text-[1.25rem] leading-tight text-[color:var(--marin)]">
                    {o.title}
                  </h4>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft max-w-[16rem]">{o.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsClean tone="papper" />

      <PageFAQ
        eyebrow={null}
        centered
        hideCta
        heading="Vanliga frågor innan du bokar samtal"
        intro="De vanligaste frågorna jag får innan vi börjar. Hittar du inte svaret, boka 30 min så pratar vi."
        items={[
          {
            q: "Hur mycket tid tar Boardroom i anspråk under året?",
            a: (
              <>
                Räkna med ungefär 3-4 timmar i månaden: 19 Boardroom sessions på ungefär en timme
                digitalt, 4 workshopdagar och en personlig startworkshop. Upplägget ska spara mer tid än
                det kostar, genom att ta bort det som i dag äter upp din vecka.
              </>
            ),
          },
          {
            q: "Vem passar programmet för?",
            a: (
              <>
                VD eller ägare i bolag mellan 10 och 50 Mkr som vill växa tillsammans med andra erfarna
                ägare. Du är redo att ändra på dig själv, inte bara teamet, och vill ha ett rum där du både får
                hjälp och bidrar.
              </>
            ),
          },
          {
            q: "Vad händer efter att jag bokat ett samtal?",
            a: (
              <>
                Vi tar ett samtal på 30 minuter, du och jag, kostnadsfritt. Vi tittar på var ditt bolag
                står i dag och om Boardroom är rätt för dig. Tycker vi båda det bokar vi in din
                startworkshop. Om inte går du ändå därifrån med något konkret.
              </>
            ),
          },
          {
            q: "Vad kostar Boardroom?",
            a: (
              <>
                Investeringen går vi igenom på samtalet, när vi vet om Boardroom är rätt för dig.
                Allt under året ingår, och betalningen går att dela upp.
              </>
            ),
          },
          {
            q: "Vad är skillnaden mot VIP-coaching (1:1)?",
            a: (
              <>
                Boardroom är ett år tillsammans med 14 andra ägare. VIP-coaching är 1:1 med mig direkt.
                Många väljer Boardroom för att få andras perspektiv och lärande, och VIP när de vill ha
                maximal personlig djupgång.{" "}
                <Link href="/metod" className="font-semibold text-[color:var(--marin)] underline underline-offset-4 hover:text-[color:var(--glod)]">
                  Läs om VIP-coaching
                </Link>
                .
              </>
            ),
          },
        ]}
      />

      {/* CLOSING: who it is for + the one booking CTA */}
      <section className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal">Vill du ha en plats vid bordet?</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.15rem] text-[color:var(--papper)]/80 leading-relaxed">
              Boardroom är för dig som leder ett bolag mellan 10 och 50 miljoner och är redo att ändra
              på dig själv, inte bara på teamet. Börja med 30 minuter med mig, så ser vi tillsammans om
              det är rätt för dig.
            </p>
            <div className="reveal reveal-d2 mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka ett samtal med mig
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
              Kostnadsfritt och utan säljtryck. Vill du hellre jobba 1:1?{" "}
              <Link href="/metod" className="font-semibold text-[color:var(--papper)] underline underline-offset-4 hover:text-[color:var(--glod)] transition-colors">
                Läs om VIP-coaching
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
