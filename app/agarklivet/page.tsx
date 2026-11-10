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
  title: "Ägarklivet. Ett år. Fyra teman.",
  description:
    "Tolv månader för dig som är ägare i ett bolag som omsätter minst 10 miljoner och vill ta klivet från att driva allt själv till att leda som ägare. Fyra teman, 19 gemensamma sessioner, 4 kvartalsavstamp, 4 workshopdagar och personligt stöd hela vägen.",
  alternates: { canonical: "/agarklivet" },
  openGraph: {
    title: "Ägarklivet. Ett år. Fyra teman.",
    description:
      "Tolv månader för ägare: fyra teman, 19 gemensamma sessioner och personligt stöd hela vägen.",
    url: "/agarklivet",
    type: "website",
  },
};

const JOURNEY = [
  {
    tag: "Start",
    title: "Personlig startworkshop",
    body: "Riktning, viktigaste förflyttningar och en personlig plan.",
    dot: "bg-white ring-2 ring-[color:var(--marin)]",
  },
  {
    tag: "Q1 · jan–mar",
    title: "Mental klarhet",
    body: "Du ser vad som verkligen är viktigt och tar tillbaka kontrollen över din tid och energi.",
    dot: "bg-[color:var(--marin)]",
  },
  {
    tag: "Q2 · apr–jun",
    title: "Stjärnledarskap",
    body: "Du får människor att ta ansvar, tänka själva och fungera tillsammans, utan att allt går via dig.",
    dot: "bg-[color:var(--olabla)]",
  },
  {
    tag: "Q3 · jul–sep",
    title: "Autentisk affärsutveckling",
    body: "Du utvecklar affären utifrån dina egna styrkor och det kunderna faktiskt värdesätter.",
    dot: "bg-[color:var(--glod)]",
  },
  {
    tag: "Q4 · okt–dec",
    title: "Smart säljstrategi",
    body: "Du bygger ett sälj som är tydligt, hållbart och inte hänger på dig.",
    dot: "bg-[color:var(--sand)] ring-2 ring-[color:var(--glod)]",
  },
];

const SITE_URL = "https://olawallstrom.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/agarklivet#service`,
  name: "Ägarklivet",
  serviceType: "Mentorship Program",
  description:
    "Tolv månader för ägare i bolag som omsätter minst 10 miljoner. Fyra teman, 19 gemensamma sessioner, 4 kvartalsavstamp, 4 workshopdagar och personligt stöd hela vägen. Du kan ansluta när som helst under året.",
  provider: { "@id": `${SITE_URL}#person` },
  areaServed: "SE",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Ägare i bolag som omsätter minst 10 miljoner",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/LimitedAvailability",
    url: `${SITE_URL}/agarklivet`,
  },
  url: `${SITE_URL}/agarklivet`,
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE_URL}/agarklivet#course`,
  name: "Ägarklivet",
  description:
    "Tolv månader för ägare som vill ta klivet från att driva allt själv till att leda som ägare. Fyra teman, 19 gemensamma sessioner, 4 workshopdagar.",
  provider: { "@id": `${SITE_URL}#organization` },
  educationalLevel: "Professional",
  inLanguage: "sv-SE",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Ägare i bolag som omsätter minst 10 miljoner",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Blended",
    courseWorkload: "PT12M",
    location: {
      "@type": "Place",
      name: "Sverige",
      address: { "@type": "PostalAddress", addressCountry: "SE" },
    },
    instructor: { "@id": `${SITE_URL}#person` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/LimitedAvailability",
      url: `${SITE_URL}/agarklivet`,
    },
  },
  url: `${SITE_URL}/agarklivet`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ägarklivet", item: `${SITE_URL}/agarklivet` },
  ],
};

export default function AgarklivetPage() {
  return (
    <>
      <JsonLd id="agarklivet-schema" data={[serviceSchema, courseSchema, breadcrumbSchema]} />
      <PageHero
        align="center"
        plain
        title={
          <>
            Ägarklivet.<br />
            <em>Ett år. <span className="whitespace-nowrap">Fyra teman.</span></em>
          </>
        }
        intro="Det är ensamt i toppen. I Ägarklivet samlar jag ett sammanhang av erfarna ägare under ett helt år, för att ta klivet från att driva allt själv till att leda som ägare. Du får andra att tänka högt med, en gemensam rytm och personligt stöd från mig hela vägen."
      />

      <section className="sec-papper pb-[var(--section-y)]">
        <div className="container-site">
          <div className="reveal relative mx-auto max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden bg-sand">
            <Image
              src="/images/ola-grusvagen.jpg"
              alt="Ola Wallström går på en grusväg genom sommarfälten"
              fill
              quality={90}
              priority
              sizes="(min-width: 1200px) 1120px, 92vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </section>

      <SharedPainPoints
        plain
        image={{ src: "/images/ola-ensam-fatolj.jpg", alt: "Ola Wallström sitter ensam i en fåtölj" }}
        heading={
          <>
            Du leder, men du är <em>ensam i rummet</em> med besluten.
          </>
        }
        intro="Jag har suttit där själv. Ingen i teamet står där du står, och styrelsen, om du har en, pratar sällan om det du faktiskt brottas med. Känner du igen någon av de här tankarna?"
        points={[
          "Varje viktigt beslut landar hos mig, och jag har ingen på samma nivå att bolla det med.",
          "Jag vet att jag borde tänka ett år framåt, men den här veckan tar all min tid.",
          "Någonstans har jag börjat sinka hela bolaget, och ingen säger det rakt ut.",
          "Jag har byggt ett bra team, men det är ändå ensamt i toppen.",
        ]}
        closer="Det är därför Ägarklivet finns. Ett sammanhang där du inte behöver bära allt ensam."
        ctaLabel="Boka ett strategisamtal med mig"
      />

      <BoardroomWheel />

      {/* CUSTOMER JOURNEY */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="reveal text-balance">Fyra teman, ett i taget.</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
              Du börjar med en personlig startworkshop med mig. Sedan får varje tema ett kvartal, i en
              ordning där det ena bygger vidare på det andra.
            </p>
            <p className="reveal reveal-d2 mt-5 inline-flex items-start sm:items-center gap-2 text-left sm:text-center text-pretty rounded-2xl sm:rounded-full border border-[color:var(--glod)]/40 bg-[color:var(--glod)]/10 px-4 py-2 text-[0.9rem] font-semibold text-[color:var(--marin)]">
              <svg width="16" height="16" className="shrink-0 mt-0.5 sm:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
              Du kan ansluta när som helst under året. Vi plockar in dig vid närmaste kvartalsstart.
            </p>
          </div>

          <ol className="relative mx-auto grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-5 lg:gap-4 sm:[&>li:last-child]:col-span-2 lg:[&>li:last-child]:col-span-1">
            {/* Connecting line: vertical on phones, horizontal through the dots on desktop. */}
            <span aria-hidden className="sm:hidden absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-[color:var(--marin)]/20" />
            <span aria-hidden className="hidden lg:block absolute top-[18px] left-[10%] right-[10%] h-px bg-[color:var(--marin)]/25" />
            {JOURNEY.map((j, i) => (
              <li key={j.tag} className={`reveal reveal-d${(i % 5) + 1} relative flex flex-col items-center`}>
                <span aria-hidden className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand">
                  <span className={`h-4 w-4 rounded-full ${j.dot}`} />
                </span>
                <div className="relative z-10 mt-3 flex h-full w-full flex-col items-center rounded-2xl bg-white px-6 pt-6 pb-7 text-center shadow-[0_18px_40px_-30px_rgba(23,59,96,0.4)] sm:max-w-sm lg:max-w-none lg:px-5">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-[color:var(--glod)]">{j.tag}</p>
                  <h3 className="mt-2 leading-tight" style={{ fontSize: "1.15rem" }}>
                    {j.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{j.body}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </section>

      <TestimonialsClean tone="papper" />

      <PageFAQ
        eyebrow={null}
        centered
        hideCta
        heading="Vanliga frågor innan du bokar ett strategisamtal"
        items={[
          {
            q: "Hur mycket tid tar Ägarklivet under året?",
            a: (
              <>
                Räkna med 2–3 timmar i månaden för de digitala träffarna. Totalt under året är det
                19 gemensamma sessioner på en timme och 4 kvartalsavstamp på två timmar. Till det
                kommer 4 workshopdagar och en personlig startworkshop på fyra timmar. Upplägget
                spar mer tid än det kostar genom att du fokuserar på det som ger bäst resultat.
              </>
            ),
          },
          {
            q: "Vem passar programmet för?",
            a: (
              <>
                Ägare i bolag som omsätter minst 10 miljoner och som vill växa utan att behöva offra sin hälsa, sina relationer eller all sin fritid.
                Du är redo att utveckla dig själv och vill vara i ett sammanhang där du både får hjälp
                av andra och bidrar med din erfarenhet.
              </>
            ),
          },
          {
            q: "Vad händer efter att jag bokat ett strategisamtal?",
            a: (
              <>
                Vi tar ett strategisamtal på 30 minuter, du och jag, kostnadsfritt. Vi tittar på var ditt bolag
                står i dag och om Ägarklivet är rätt för dig. Tycker vi båda det bokar vi in din
                startworkshop. Om inte går du ändå därifrån med något konkret.
              </>
            ),
          },
          {
            q: "Vad kostar Ägarklivet?",
            a: (
              <>
                Investeringen går vi igenom på strategisamtalet, när vi vet om Ägarklivet är rätt för dig.
                Allt under året ingår, och betalningen går att dela upp.
              </>
            ),
          },
          {
            q: "Vad är skillnaden mot VIP-coaching?",
            a: (
              <>
                Ägarklivet är ett år tillsammans med mig och andra erfarna ägare. VIP-coaching är
                personligen med mig och passar bättre för bolag där flera personer är inblandade,
                som till exempel flera delägare, generationsskifte eller familjeföretag.{" "}
                <Link href="/vip-coaching" className="font-semibold text-[color:var(--marin)] underline underline-offset-4 hover:text-[color:var(--glod)]">
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
            <h2 className="reveal text-balance">Bolaget växer, men måste allt hänga på dig?</h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.15rem] text-[color:var(--papper)]/80 leading-relaxed">
              Ägarklivet är för dig som är ägare i ett bolag som omsätter minst 10 miljoner och
              som vill växa utan att behöva offra sin hälsa, sina relationer eller all sin fritid.
              Börja med 30 minuter med mig, så ser vi tillsammans om det är rätt för dig.
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
              Kostnadsfritt. Är ni flera delägare?{" "}
              <Link href="/vip-coaching" className="whitespace-nowrap font-semibold text-[color:var(--papper)] underline underline-offset-4 hover:text-[color:var(--glod)] transition-colors">
                Läs om VIP-coaching
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
