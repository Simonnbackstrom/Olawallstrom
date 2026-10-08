import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import NewsletterForm from "@/components/NewsletterForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Nyhetsbrev",
  description:
    "En tanke i veckan som flyttar bolaget framåt. Prenumerera gratis.",
  alternates: { canonical: "/nyhetsbrev" },
};

export default function NyhetsbrevPage() {
  return (
    <>
      <PageHero
        eyebrow="Nyhetsbrev"
        title={
          <>
            En tanke i veckan. <em>Noll fluff.</em>
          </>
        }
        intro="Jag skriver bara när jag har något att säga. Varje brev är kort — en konkret insikt från ett verkligt klientarbete, tänkt för dig som äger ett bolag mellan 10 och 50 Mkr."
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand">
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
              <p className="reveal eyebrow mb-5">Vad du får</p>
              <h2 className="reveal reveal-d1">
                Insikter från 25 år bland bolagsägare — direkt till din inkorg.
              </h2>
              <ul className="reveal reveal-d2 mt-8 space-y-3 mb-10">
                {[
                  "En kort tanke per vecka — tillväxt, ledarskap eller lönsamhet.",
                  "Konkreta exempel från verkliga klientcase.",
                  "Enkla verktyg du kan använda direkt i din vardag.",
                  "Inbjudningar till utvalda event och frukostmöten.",
                ].map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[1rem] text-ink">
                    <span className="shrink-0 mt-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d3 rounded-3xl bg-sand border border-[color:var(--border-soft)] p-6 md:p-8">
                <p className="eyebrow mb-3">Prenumerera</p>
                <h3 className="mb-5">Gå med i listan</h3>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-y)] sec-marin relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-70"
          style={{ background: "radial-gradient(circle, rgba(242,106,46,0.18) 0%, transparent 65%)" }}
        />
        <div className="container-site relative">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <p className="eyebrow mb-5">Kommande</p>
              <h2>
                Boken: <em>Autentisk affärsutveckling</em>
              </h2>
              <p className="mt-6 text-[1.02rem] text-[color:var(--papper)]/80 leading-relaxed max-w-md">
                Jag arbetar just nu på en bok som samlar de fyra principerna och de misstag jag
                själv gjort i åtta bolag. Prenumerera på nyhetsbrevet så är du först med
                släppdatum och får läsa utvalda kapitel innan den trycks.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[0.72rem] uppercase tracking-wider text-[color:var(--papper)]/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--glod)]" />
                Pre-release via nyhetsbrevet
              </div>
            </div>
            <div className="reveal reveal-d1 order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-2xl bg-gradient-to-br from-[color:var(--glod)] to-[color:var(--glod-dark)] aspect-[3/4] shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
                    <div>
                      <div className="text-[0.7rem] uppercase tracking-[0.3em] opacity-80 mb-4">
                        Av Ola Wallström
                      </div>
                      <div className="font-[family-name:var(--font-lora)] font-semibold text-[2rem] leading-[1.05]">
                        Autentisk<br />affärsutveckling
                      </div>
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-lora)] italic text-[0.95rem] opacity-95 leading-snug">
                        Fyra principer som bygger självgående bolag.
                      </div>
                      <div className="mt-6 text-[0.7rem] uppercase tracking-wider opacity-75">
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

      <CtaBand
        tone="sand"
        heading="Hellre direkt till saken?"
        intro="Boka ett kostnadsfritt strategisamtal med mig istället. 30 minuter, inget säljtryck."
      />
    </>
  );
}
