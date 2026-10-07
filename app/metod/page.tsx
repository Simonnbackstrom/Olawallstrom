import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MethodGrid from "@/components/MethodGrid";
import PainPoints from "@/components/PainPoints";
import ResultsGrid from "@/components/ResultsGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Metoden – Framgångsrikt Entreprenörskap",
  description:
    "Fyra nycklar och sex konkreta steg som tar ditt bolag från 10 till 50 Mkr. Så här jobbar jag med bolagsägare som vill äga ett självgående bolag.",
  alternates: { canonical: "/metod" },
};

export default function MetodPage() {
  return (
    <>
      <PageHero
        eyebrow="Framgångsrikt entreprenörskap"
        title={
          <>
            Min metod. <em className="not-italic text-[#E8500A]">Enkel att förstå.</em>
            <br />
            Svår att göra ensam.
          </>
        }
        intro="Metoden Framgångsrikt Entreprenörskap bygger på fyra nycklar och genomförs i sex konkreta steg tillsammans med mig. Hela upplägget är designat för bolag i spannet 10–50 Mkr där ägaren vill ut ur den operativa tröskverket."
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div className="reveal relative">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] aspect-[4/5] bg-[#EDE9E3]">
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
              <p className="reveal eyebrow mb-4">De fyra nycklarna</p>
              <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
                Fyra enkla frågor som avgör allt.
              </h2>
              <p className="reveal reveal-d2 mt-5 text-[16px] text-[#0B0E14]/70 leading-relaxed">
                Jag har sett över 650 bolag och nästan allt kokar ner till fyra frågor. Får du
                dem rätt växer bolaget — nästan oavsett bransch och konjunktur.
              </p>

              <div className="reveal reveal-d3 mt-8 space-y-4">
                {[
                  { num: "01", key: "Rätt riktning", q: "Vart ska bolaget faktiskt?" },
                  { num: "02", key: "Rätt struktur", q: "Levererar bolaget utan dig?" },
                  { num: "03", key: "Rätt människor", q: "Står rätt personer på rätt plats?" },
                  { num: "04", key: "Rätt lönsamhet", q: "Är tillväxten lönsam på riktigt?" },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex gap-5 items-start rounded-xl bg-[#F7F4F0] ring-1 ring-[#E2DDD8] p-5"
                  >
                    <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[#E8500A] text-[28px] leading-none">
                      {item.num}
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[18px] text-[#0B0E14] mb-1">
                        {item.key}
                      </div>
                      <p className="text-[15px] text-[#0B0E14]/70">{item.q}</p>
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

      <ResultsGrid
        eyebrow="Resultat av metoden"
        heading="Så här känns det efter sex månader."
      />

      <section className="py-20 md:py-24 bg-[#F7F4F0]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal eyebrow mb-4 justify-center">För vem är det här?</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)] leading-tight text-[#0B0E14]">
              Jag jobbar bäst med bolagsägare som:
            </h2>
            <ul className="reveal reveal-d2 mt-8 grid gap-3 text-left max-w-xl mx-auto">
              {[
                "Omsätter 10–50 Mkr och har tillväxtambition.",
                "Är själva flaskhalsen i det dagliga arbetet.",
                "Är öppna för att ändra på sig själva — inte bara teamet.",
                "Vill fatta beslut baserat på data, inte känsla.",
              ].map((p) => (
                <li key={p} className="flex gap-3 items-start text-[16px] text-[#0B0E14]/85 rounded-xl bg-white px-5 py-4 ring-1 ring-[#E2DDD8]">
                  <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[#E8500A]/15 text-[#E8500A]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="reveal reveal-d3 mt-10">
              <Link href="/kontakt" className="btn-primary">
                Boka kostnadsfritt strategisamtal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand tone="dark" />
    </>
  );
}
