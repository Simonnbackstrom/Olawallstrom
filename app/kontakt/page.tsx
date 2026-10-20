import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import TestimonialsClean from "@/components/TestimonialsClean";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://olawallstrom.com";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/kontakt#contact`,
  name: "Kontakt Ola Wallström",
  url: `${SITE_URL}/kontakt`,
  about: { "@id": `${SITE_URL}#person` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: `${SITE_URL}/kontakt` },
  ],
};

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Hör av dig. Jag läser alla meddelanden själv och återkommer så fort jag kan.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt",
    description:
      "Hör av dig. Jag läser alla meddelanden själv och återkommer så fort jag kan.",
    url: "/kontakt",
    type: "website",
  },
};

/* Dividers for the 2×2 step panel: stacked on mobile, grid lines from sm up. */
const STEP_BORDERS = ["border-b sm:border-r", "border-b", "border-b sm:border-b-0 sm:border-r", ""];

const STEPS = [
  { title: "Du berättar", body: "Var bolaget står i dag, vad som går bra, vad som skaver och vart du vill." },
  { title: "Vi hittar flaskhalsen", body: "Tillsammans ringar vi in det som bromsar mest just nu." },
  { title: "Du får konkreta råd", body: "Saker du kan ta med dig och göra något åt direkt." },
  { title: "Vi ser om det klickar", body: "Känns det rätt för oss båda pratar vi om hur vi kan fortsätta." },
];

export default function KontaktPage() {
  return (
    <>
      <JsonLd id="kontakt-schema" data={[contactSchema, breadcrumbSchema]} />
      <section className="sec-papper pt-28 md:pt-40 pb-14 md:pb-16">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="reveal" style={{ fontSize: "clamp(2.5rem, 5vw, 3.9rem)" }}>
              Hör av dig. <em>Så ser vi klart tillsammans.</em>
            </h1>
            <p className="reveal reveal-d1 mt-6 text-[1.08rem] md:text-[1.18rem] text-ink-soft leading-relaxed">
              Jag är närvarande i varje samtal och säger som det är. Boka 30 minuter eller skriv
              några rader, så tittar vi på vad som är viktigast för ditt bolag just nu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch max-w-5xl mx-auto">
            <div className="reveal rounded-3xl sec-marin px-7 py-9 md:px-10 md:py-10 flex flex-col items-center text-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden ring-2 ring-white/15">
                <Image
                  src="/images/ola-arbete.jpg"
                  alt="Ola Wallström"
                  fill
                  quality={90}
                  sizes="64px"
                  className="object-cover object-[50%_22%]"
                />
              </div>
              <h2 className="mt-5 text-[color:var(--papper)]" style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.1rem)" }}>
                Boka <em>30 minuter</em> på Zoom
              </h2>
              <p className="mt-3 text-[1rem] text-[color:var(--papper)]/75 leading-relaxed max-w-sm">
                Välj en tid i min kalender, så får du en Zoom-länk direkt. På 30 minuter får du:
              </p>

              <ul className="mt-7 mx-auto w-fit flex flex-col gap-3.5 text-left text-[1rem] text-[color:var(--papper)]/90">
                {[
                  "En tydlig bild av var bolaget står",
                  "Den största flaskhalsen just nu",
                  "Ett konkret nästa steg",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="shrink-0 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--glod)]/20 text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-6 flex flex-col items-center">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center w-full !py-4"
                >
                  Välj en tid
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
                <p className="pt-4 text-[0.8rem] leading-[1.65] text-[color:var(--papper)]/60">
                  Kostnadsfritt · Direkt med mig · Inget säljtryck
                </p>
              </div>
            </div>

            <div className="reveal reveal-d1 rounded-3xl bg-white px-7 py-9 md:px-10 md:py-10 shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)] flex flex-col">
              <div className="mb-6 text-center">
                <h2 style={{ fontSize: "clamp(1.7rem, 2.6vw, 2.1rem)" }}>Eller skriv till mig</h2>
                <p className="mt-3 text-[1rem] text-ink-soft leading-relaxed max-w-sm mx-auto">
                  Några rader om var ditt bolag står i dag räcker. Jag läser allt själv.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
            <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:min-h-[520px] bg-sand w-full max-w-[460px] lg:max-w-none mx-auto">
              <Image
                src="/images/ola-soffa.jpg"
                alt="Ola Wallström sitter avslappnat i en soffa"
                fill
                quality={90}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover object-[50%_40%]"
              />
            </div>

            <div className="flex flex-col justify-center text-center">
              <h2 className="reveal" style={{ fontSize: "clamp(2rem, 3.4vw, 2.7rem)" }}>
                30 minuter, rakt på sak.
              </h2>
              <p className="reveal reveal-d1 mt-4 text-[1.05rem] text-ink-soft leading-relaxed max-w-md mx-auto">
                Inga säljpresentationer. Så här brukar samtalet gå till.
              </p>

              <ol className="reveal reveal-d2 mt-10 grid sm:grid-cols-2 rounded-3xl bg-white shadow-[0_18px_44px_-34px_rgba(23,59,96,0.4)] overflow-hidden">
                {STEPS.map((step, i) => (
                  <li
                    key={step.title}
                    className={`flex flex-col items-center px-6 py-8 md:px-8 text-center border-[color:var(--border-soft)] ${STEP_BORDERS[i]}`}
                  >
                    <span className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-[color:var(--glod)] font-[family-name:var(--font-heading)] font-semibold text-[0.98rem] text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 leading-tight" style={{ fontSize: "1.12rem" }}>{step.title}</h3>
                    <p className="mt-2 text-[0.94rem] text-ink-soft leading-relaxed max-w-[15rem]">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsClean tone="sand" />

      <section className="py-[var(--section-y)] sec-marin">
        <div className="container-site">
          <div className="reveal max-w-2xl mx-auto text-center">
            <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden ring-4 ring-white/10">
              <Image
                src="/images/ola-kontakt.jpg"
                alt="Ola Wallström"
                fill
                quality={90}
                sizes="96px"
                className="object-cover object-[50%_25%]"
              />
            </div>
            <h2 className="mt-8">Hellre mejl eller LinkedIn?</h2>
            <p className="mt-5 text-[1.05rem] md:text-[1.1rem] text-[color:var(--papper)]/75 leading-relaxed">
              Skriv direkt till mig, eller hör av dig där du redan är.
            </p>
            <a
              href="mailto:ola@olawallstrom.com"
              className="mt-8 inline-block font-[family-name:var(--font-heading)] font-semibold text-[1.5rem] md:text-[1.8rem] text-[color:var(--papper)] underline decoration-[color:var(--glod)] decoration-2 underline-offset-8 hover:text-[color:var(--glod)] transition-colors"
            >
              ola@olawallstrom.com
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="https://se.linkedin.com/in/olawallstrom" target="_blank" rel="noopener noreferrer" className="btn-dark-ghost">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/ola.wallstrom/" target="_blank" rel="noopener noreferrer" className="btn-dark-ghost">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
