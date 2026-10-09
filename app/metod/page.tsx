import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MethodGrid from "@/components/MethodGrid";
import PainPoints from "@/components/PainPoints";
import ResultsGrid from "@/components/ResultsGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "VIP-coaching - Autentisk affärsutveckling",
  description:
    "VIP-coaching för bolagsägare som vill äga ett självgående bolag. Fyra principer och sex konkreta steg som tar bolaget från 10 till 50 Mkr.",
  alternates: { canonical: "/metod" },
};

const PRINCIPLES = [
  { num: "01", key: "Äkta", q: "Utgår från vem du är. Ingen mall, inga lånade ord." },
  { num: "02", key: "Klarhet", q: "Du vet alltid vad nästa steg är. Varje gång." },
  { num: "03", key: "Genomförande", q: "Ord blir handling. Det som syns blir gjort." },
  { num: "04", key: "Frihet", q: "Allt pekar mot ett bolag som inte äger dig." },
];

const FOR_WHOM = [
  "Omsätter 10-50 Mkr och vill växa vidare.",
  "Är själv flaskhals i det dagliga.",
  "Är öppen för att ändra på sig själv - inte bara teamet.",
  "Vill fatta beslut på data och känsla, inte bara känsla.",
];

export default function MetodPage() {
  return (
    <>
      <PageHero
        eyebrow="VIP-coaching"
        title={
          <>
            Autentisk affärsutveckling. <em>Enkel att förstå.</em>
            <br />
            Svår att göra ensam.
          </>
        }
        intro="VIP-coachingen vilar på fyra principer och genomförs i sex konkreta steg tillsammans med mig. Hela upplägget är designat för bolag i spannet 10-50 Mkr där ägaren vill ut ur det operativa."
      />

      <section className="py-16 md:py-20 sec-papper border-b border-[color:var(--border-soft)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal eyebrow mb-5 justify-center">Varför VIP-coaching?</p>
            <p className="reveal reveal-d1 text-[1.15rem] md:text-[1.25rem] text-ink leading-relaxed font-[family-name:var(--font-lora)] italic">
              &ldquo;Jag har inte hittat på VIP-coachingen från scratch. Den har växt fram under 25
              år med 650+ bolagsägare - och jag har plockat bort allt som inte funkar i
              verkligheten. Det som är kvar är fyra principer och sex steg som faktiskt flyttar
              bolag.&rdquo;
            </p>
            <p className="reveal reveal-d2 mt-6 text-[0.95rem] text-muted font-semibold tracking-wide">
              - Ola Wallström
            </p>
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
                style={{ border: "2px solid var(--glod)", clipPath: "polygon(0 0, 100% 0, 100% 72%, 70% 100%, 0 100%)" }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand">
                <Image
                  src="/images/ola-metod.jpg"
                  alt="Ola Wallström i arbete"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-5">De fyra principerna</p>
              <h2 className="reveal reveal-d1">Fyra ord som styr allt.</h2>
              <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed">
                Jag har sett över 650 bolag och nästan allt kokar ner till fyra frågor. Får du dem
                rätt växer bolaget - nästan oavsett bransch och konjunktur.
              </p>

              <div className="reveal reveal-d3 mt-10 space-y-4">
                {PRINCIPLES.map((item) => (
                  <div
                    key={item.num}
                    className="flex gap-6 items-start rounded-xl bg-white border border-[color:var(--border-soft)] p-6"
                  >
                    <div className="font-[family-name:var(--font-lora)] italic font-semibold text-[color:var(--glod)] text-[2rem] md:text-[2.3rem] leading-none min-w-[52px]">
                      {item.num}
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-lora)] font-semibold text-[1.2rem] text-[color:var(--marin)] mb-1.5">
                        {item.key}
                      </div>
                      <p className="text-[0.95rem] text-ink-soft">{item.q}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PainPoints />

      <MethodGrid variant="steps" />

      <ResultsGrid heading="Så här känns det efter sex månader." />

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal reveal-d1">Jag jobbar bäst med bolagsägare som:</h2>
            <ul className="reveal reveal-d2 mt-10 grid gap-3 max-w-xl mx-auto text-left">
              {FOR_WHOM.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 items-start text-[1rem] text-ink rounded-xl bg-white px-6 py-5 border border-[color:var(--border-soft)]"
                >
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
        </div>
      </section>

      <CtaBand tone="marin" />
    </>
  );
}
