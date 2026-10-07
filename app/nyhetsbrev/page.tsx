import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Nyhetsbrev & insikter",
  description:
    "Varje månad delar jag konkreta insikter för dig som äger ett bolag mellan 10–50 Mkr. Prenumerera gratis.",
  alternates: { canonical: "/nyhetsbrev" },
};

export default function NyhetsbrevPage() {
  return (
    <>
      <PageHero
        eyebrow="Nyhetsbrev"
        title={
          <>
            En artikel i månaden. <em className="not-italic text-[#E8500A]">Noll fluff.</em>
          </>
        }
        intro="Jag skriver bara när jag har något att säga. Varje nyhetsbrev innehåller en konkret insikt från ett verkligt klientarbete — tänkt för dig som äger ett bolag mellan 10 och 50 Mkr och vill växa utan att bolaget äger dig tillbaka."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] aspect-[4/5] bg-[#EDE9E3]">
                <Image
                  src="/images/ola-arbete.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-4">Vad du får</p>
              <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)] leading-[1.12] text-[#0B0E14]">
                Insikter från 25 år bland bolagsägare — direkt till din inkorg.
              </h2>
              <ul className="reveal reveal-d2 mt-6 space-y-3 mb-8">
                {[
                  "En längre artikel per månad om tillväxt, ledarskap eller lönsamhet.",
                  "Konkreta exempel från verkliga klientcase.",
                  "Enkla verktyg du kan använda direkt i din vardag.",
                  "Inbjudningar till utvalda event och frukostmöten.",
                ].map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[15px] text-[#0B0E14]/85">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[#E8500A]/15 text-[#E8500A]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d3 rounded-3xl bg-[#F7F4F0] ring-1 ring-[#E2DDD8] p-6 md:p-8">
                <div className="eyebrow mb-2">Prenumerera</div>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mb-4">
                  Gå med i listan
                </h3>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0B0E14] text-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="eyebrow mb-4">Kommande</div>
              <h2 className="font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)] leading-[1.1]">
                Boken: <em className="not-italic text-[#E8500A]">Framgångsrikt Entreprenörskap</em>
              </h2>
              <p className="mt-5 text-[16px] text-white/75 leading-relaxed max-w-md">
                Jag arbetar just nu på en bok som samlar de fyra nycklarna och de misstag jag själv
                gjort i åtta bolag. Prenumerera på nyhetsbrevet så är du först med släppdatum och
                får läsa utvalda kapitel innan den trycks.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-[12px] uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8500A]" />
                Pre-release information kommer via nyhetsbrevet
              </div>
            </div>
            <div className="reveal reveal-d1 order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-2xl bg-gradient-to-br from-[#E8500A] to-[#C43F00] aspect-[3/4] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.3em] opacity-80 mb-3">Av Ola Wallström</div>
                      <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] leading-[1.05]">
                        Framgångsrikt<br />Entreprenörskap
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold opacity-90">
                        Fyra nycklar som tar ditt bolag från 10 till 50 miljoner.
                      </div>
                      <div className="mt-6 text-[11px] uppercase tracking-wider opacity-70">
                        Kommer 2026
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand tone="light" heading="Hellre direkt till saken?" intro="Boka ett kostnadsfritt strategisamtal med mig istället. 30 minuter, inget säljtryck." />
    </>
  );
}
