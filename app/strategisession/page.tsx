import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StrategyHero from "@/components/StrategyHero";
import LogoCarousel from "@/components/LogoCarousel";
import PainPoints from "@/components/PainPoints";
import ResultsGrid from "@/components/ResultsGrid";
import Testimonials from "@/components/Testimonials";
import MethodGrid from "@/components/MethodGrid";
import StatsBand from "@/components/StatsBand";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Boka ett kostnadsfritt strategisamtal",
  description:
    "30 min direkt med Ola Wallström. Konkreta nästa steg för din tillväxt — oavsett om vi fortsätter jobba ihop eller inte.",
  alternates: { canonical: "/strategisession" },
};

const CREDS = [
  "Jag är civilekonom och f.d. marknadschef på Affärsvärlden",
  "Jag har byggt och medverkat i åtta bolag i olika branscher",
  "Jag har coachat 650+ bolagsägare på mer än 25 år",
];

export default function Strategisession() {
  return (
    <>
      <StrategyHero />
      <LogoCarousel />
      <PainPoints />
      <ResultsGrid />
      <Testimonials />
      <MethodGrid variant="steps" eyebrow="Det här får du" heading="Så jobbar vi tillsammans — steg för steg." />
      <StatsBand tone="light" />

      {/* ABOUT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[3rem] bg-[#F7F4F0]"
              />
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] aspect-[4/5] max-w-[480px] mx-auto">
                <Image
                  src="/images/ola-portratt.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="reveal eyebrow mb-4">Vem är det som ringer upp</p>
              <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.1] text-[#0B0E14]">
                Jag har mer än 25 års erfarenhet som serieentreprenör och mentor.
              </h2>
              <div className="reveal reveal-d2 mt-6 space-y-4 text-[16.5px] text-[#0B0E14]/75 leading-relaxed">
                <p>
                  Jag är civilekonom och har en bakgrund som marknadschef på Affärsvärlden.
                  Jag är serieentreprenör och har själv byggt upp åtta företag i olika branscher,
                  så jag vet av egen erfarenhet vad som krävs för att skala ett bolag lönsamt.
                </p>
                <p>
                  Under mer än 25 år har jag coachat över 650 bolagsägare och ledare.
                  Min metod &ldquo;Framgångsrikt Entreprenörskap&rdquo; bygger på fyra nycklar som hjälper dig
                  att gå från 10 till 50 miljoner utan att offra livet runt omkring.
                </p>
                <p>Jag tar emot ett begränsat antal klienter per år för att hålla kvaliteten hög i varje samarbete.</p>
              </div>
              <ul className="reveal reveal-d3 mt-8 space-y-3">
                {CREDS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[15px] text-[#0B0E14]/85">
                    <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[#E8500A]/10 text-[#E8500A]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="boka" className="py-20 md:py-28 bg-[#0B0E14] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(232,80,10,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(232,80,10,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="container-site relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="reveal eyebrow mb-4 justify-center">För dig som vill äga ditt bolag på riktigt</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4.2vw,48px)] leading-[1.1]">
              Boka ett kostnadsfritt 30-minuters samtal.
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[17px] md:text-xl text-white/75 leading-relaxed">
              Jag ger dig konkreta insikter — oavsett om jag blir rätt mentor för dig eller inte.
            </p>
          </div>

          <div className="reveal reveal-d3 max-w-2xl mx-auto rounded-3xl bg-white text-[#0B0E14] p-6 md:p-10 ring-1 ring-white/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <div className="text-center mb-6">
              <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] md:text-[26px] text-[#0B0E14]">
                Boka strategisamtal
              </h3>
              <p className="mt-1.5 text-[14px] text-[#6B7280]">Kostnadsfritt · 30 minuter · Direkt med mig</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-7 text-[13px] text-[#6B7280]">
              {["Kostnadsfritt", "Inget säljtryck", "Direkt med mig"].map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8500A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {m}
                </span>
              ))}
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* BOARDROOM TEASER */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-site">
          <div className="reveal relative overflow-hidden rounded-3xl bg-[#0B0E14] text-white p-8 md:p-12 ring-1 ring-white/10">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(232,80,10,0.22) 0%, transparent 65%)" }}
            />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8500A] mb-4">
                  Ola erbjuder också
                </p>
                <h3 className="font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.4vw,36px)] leading-[1.1]">
                  Boardroom 2027 — ett år, fyra teman.
                </h3>
                <p className="mt-4 text-[16px] text-white/75 leading-relaxed max-w-xl">
                  Vill du gå in i ett helt program? Boardroom är Olas 12-månaders upplägg för VD/ägare —
                  i ett litet rum av erfarna ägare, med personligt stöd hela vägen.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/boardroom" className="btn-primary">
                    Se programmet
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </Link>
                  <span className="text-[13px] text-white/55">195 000 kr · max 15 deltagare</span>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-2 justify-end">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#1C2944] text-white text-[12px] font-semibold">Q1 Mental klarhet</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2E6BB8] text-white text-[12px] font-semibold">Q2 Stjärnledarskap</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#E8500A] text-white text-[12px] font-semibold">Q3 Affärsutveckling</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#FFC9A6] text-[#0B0E14] text-[12px] font-semibold">Q4 Säljstrategi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-20 md:py-24 bg-[#F7F4F0]">
        <div className="container-site text-center">
          <div className="reveal inline-flex items-center justify-center mb-6">
            <Image src="/logo.png" alt="Ola Wallström" width={64} height={64} className="h-14 w-auto" />
          </div>
          <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(26px,3.6vw,38px)] leading-tight text-[#0B0E14]">
            Följ mig på sociala medier
          </h2>
          <div className="reveal reveal-d2 mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.instagram.com/ola.wallstrom/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white ring-1 ring-[#E2DDD8] text-[#0B0E14] font-semibold text-[15px] hover:ring-[#E8500A] hover:text-[#E8500A] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
              Instagram
            </a>
            <a
              href="https://se.linkedin.com/in/olawallstrom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white ring-1 ring-[#E2DDD8] text-[#0B0E14] font-semibold text-[15px] hover:ring-[#E8500A] hover:text-[#E8500A] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" />
                <path d="M.5 8h4V24h-4z" />
                <path d="M8 8h3.8v2.2h.1c.5-1 1.9-2.4 4.1-2.4 4.4 0 5.2 2.9 5.2 6.7V24h-4v-8.4c0-2-.1-4.5-2.8-4.5s-3.2 2.1-3.2 4.3V24H8z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
