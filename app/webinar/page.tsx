import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WebinarForm from "@/components/WebinarForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Webinar - Så bygger du ett självgående bolag",
  description:
    "Kostnadsfritt webinar för bolagsägare i segmentet 10-50 Mkr. 60 minuter om de fyra principerna som bygger självgående bolag.",
  alternates: { canonical: "/webinar" },
};

const DETAILS = [
  { label: "Nästa datum", value: "Tisdag 11 november" },
  { label: "Tid", value: "09.00 - 10.00" },
  { label: "Format", value: "Live på Zoom" },
  { label: "Pris", value: "Kostnadsfritt" },
];

const LESSONS = [
  {
    n: "01",
    title: "Varför bolag stannar vid 10 Mkr",
    body: "De tre mönstren som gör att du blir flaskhals när omsättningen passerar 10 miljoner, och vad du kan göra åt dem.",
  },
  {
    n: "02",
    title: "Fyra principer som flyttar bolag",
    body: "Äkta, Klarhet, Genomförande, Frihet. Enkelt att förstå, svårt att göra ensam. Jag går igenom hur jag använder dem i varje klientarbete.",
  },
  {
    n: "03",
    title: "Första steget mot ett bolag som rullar själv",
    body: "En konkret bolagsdiagnos du kan göra på en helg för att se exakt var din tid läcker ut idag.",
  },
  {
    n: "04",
    title: "Frågestund med Ola",
    body: "Sista 15 minuterna är öppna. Ta med dina egna frågor om bolag, team eller nästa steg.",
  },
];

const FOR_WHOM = [
  "Du äger ett bolag i segmentet 10-50 Mkr.",
  "Du är själv flaskhals i det dagliga.",
  "Du vill växa vidare utan att offra livet runt omkring.",
  "Du är öppen för att ändra på dig själv, inte bara teamet.",
];

export default function WebinarPage() {
  return (
    <>
      <PageHero
        eyebrow="Webinar"
        title={
          <>
            Så bygger du ett bolag <em>som inte äger dig</em>.
          </>
        }
        intro="60 minuter om de fyra principerna som jag använt för att hjälpa 650+ bolagsägare bryta igenom taket vid 10 Mkr. Live på Zoom, kostnadsfritt, med öppen frågestund på slutet."
      />

      <section className="py-16 md:py-20 sec-papper border-b border-[color:var(--border-soft)]">
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

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
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
                  src="/images/ola-portratt.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="reveal reveal-d1">Vem håller i webinaret?</h2>
              <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed">
                Jag är Ola Wallström. Civilekonom, tidigare marknadschef på Affärsvärlden
                och serieentreprenör med åtta egna bolag bakom mig. Under 25 år har jag
                coachat över 650 bolagsägare, de flesta i segmentet 10-50 Mkr.
              </p>
              <p className="reveal reveal-d3 mt-5 text-[1.02rem] text-ink-soft leading-relaxed">
                Det jag delar på webinaret är samma sak som jag säger till mina VIP-klienter.
                Inget nytt påhittat, bara det som fungerat i verkligheten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal reveal-d1">För vem är det här?</h2>
            <ul className="reveal reveal-d2 mt-10 grid gap-3 max-w-xl mx-auto text-left">
              {FOR_WHOM.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 items-start text-[1rem] text-ink rounded-xl bg-white px-6 py-5 border border-[color:var(--border-soft)]"
                >
                  <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
            <h2 className="reveal reveal-d1 text-[color:var(--papper)]">
              Anmäl dig till nästa tillfälle.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[1.05rem] text-[color:var(--papper)]/80 leading-relaxed">
              Fyll i din mejl så får du Zoom-länken samma morgon som webinaret.
              Kommer du inte den dagen skickar jag även en inspelning efteråt.
            </p>
          </div>

          <div className="reveal reveal-d3 max-w-xl mx-auto">
            <WebinarForm />
          </div>
        </div>
      </section>

      <CtaBand tone="marin" />
    </>
  );
}
