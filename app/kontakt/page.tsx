import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
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
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd id="kontakt-schema" data={[contactSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Hör av dig. <em>Jag läser allt själv.</em>
          </>
        }
        intro="Snabbaste vägen är att boka ett 30-minuters samtal direkt. Eller skicka ett meddelande. Oavsett väg landar det hos mig, inte hos en assistent."
      />

      {/* PRIMARY: CALENDLY */}
      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
            {/* Snabbaste vägen - Calendly */}
            <div className="reveal relative overflow-hidden rounded-3xl sec-marin p-8 md:p-10 flex flex-col">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
              />
              <div className="relative flex-1">
                <p className="eyebrow-upper text-[color:var(--glod)] mb-5">Snabbaste vägen</p>
                <h2 className="text-[color:var(--papper)]">
                  Boka 30 min på <em>Zoom</em> direkt.
                </h2>
                <p className="mt-5 text-[1rem] text-[color:var(--papper)]/80 leading-relaxed">
                  Du väljer en tid i min kalender, får ett Zoom-link direkt och vi pratar.
                  Du behöver inte förbereda något. Kostnadsfritt, inget säljtryck.
                </p>
                <ul className="mt-7 space-y-2.5">
                  {[
                    "Kostnadsfritt",
                    "30 minuter",
                    "Direkt med mig",
                    "Inget säljtryck",
                  ].map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2.5 text-[0.95rem] text-[color:var(--papper)]/90"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-8">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center w-full"
                >
                  Boka 30 min med Ola
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hellre skriva? - BookingForm */}
            <div className="reveal reveal-d1 flex flex-col rounded-3xl bg-white border border-[color:var(--border-soft)] p-8 md:p-10 shadow-sm">
              <div className="mb-6">
                <p className="eyebrow-upper mb-5">Hellre skriva?</p>
                <h2 className="text-[color:var(--marin)]">Skicka ett meddelande.</h2>
                <p className="mt-5 text-[0.98rem] text-ink-soft leading-relaxed">
                  Skriv några rader om var ditt bolag står idag. Jag läser allt själv och
                  återkommer så fort jag kan.
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY: EMAIL + "SO FUNKAR SAMTALET" */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand max-w-[460px] mx-auto">
                <Image
                  src="/images/ola-biljard-ko.jpg"
                  alt="Ola Wallström – mentor och serieentreprenör"
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="reveal reveal-d1">
              <p className="eyebrow mb-5">Så här fungerar samtalet</p>
              <h3>30 minuter, inget krux.</h3>
              <ul className="mt-8 space-y-3">
                {[
                  "Du berättar var bolaget står idag: vinster, utmaningar och mål.",
                  "Vi identifierar den största flaskhalsen just nu.",
                  "Du får konkreta råd att ta med dig direkt.",
                  "Om det känns rätt för oss båda pratar vi om fortsättning.",
                ].map((p, i) => (
                  <li key={p} className="flex gap-3 items-start text-[1rem] text-ink">
                    <span className="shrink-0 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)] font-bold text-[0.75rem]">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-sand border border-[color:var(--border-soft)] p-6">
                <p className="eyebrow-upper mb-3">Direkt till mig</p>
                <a
                  href="mailto:ola@olawallstrom.com"
                  className="font-[family-name:var(--font-lora)] font-semibold text-[1.2rem] text-[color:var(--marin)] hover:text-[color:var(--glod)] transition-colors"
                >
                  ola@olawallstrom.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
