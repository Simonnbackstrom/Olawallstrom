import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StrategyHero from "@/components/StrategyHero";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Boka ett strategisamtal",
  description:
    "30 min direkt med Ola Wallström. Konkreta nästa steg för din tillväxt - oavsett om vi fortsätter jobba ihop eller inte.",
  alternates: { canonical: "/strategisession" },
};

const CREDS = [
  "Civilekonom och tidigare marknadschef på Affärsvärlden",
  "Byggt och drivit åtta egna bolag i olika branscher",
  "Coachat 650+ bolagsägare under 25 år",
];

export default function Strategisession() {
  return (
    <>
      <StrategyHero />
      <LogoCarousel />

      {/* ABOUT */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div className="reveal relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[3rem] bg-sand"
              />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] max-w-[480px] mx-auto">
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
              <p className="reveal eyebrow mb-5">Vem är det som ringer upp</p>
              <h2 className="reveal reveal-d1">
                25 års erfarenhet som serieentreprenör och mentor.
              </h2>
              <div className="reveal reveal-d2 mt-6 space-y-4 text-[1.02rem] text-ink-soft leading-relaxed">
                <p>
                  Jag är civilekonom och har en bakgrund som marknadschef på Affärsvärlden.
                  Serieentreprenör med åtta egna bolag i olika branscher, så jag vet av egen
                  erfarenhet vad som krävs för att skala ett bolag lönsamt.
                </p>
                <p>
                  Under 25 år har jag coachat över 650 bolagsägare och ledare. Min VIP-coaching bygger på
                  fyra principer - <em>Äkta, Klarhet, Genomförande, Frihet</em> - som hjälper dig
                  att gå från 10 till 50 Mkr utan att offra livet runt omkring.
                </p>
                <p>
                  Jag tar emot ett begränsat antal klienter per år för att hålla kvaliteten hög i
                  varje samarbete.
                </p>
              </div>
              <ul className="reveal reveal-d3 mt-10 space-y-3">
                {CREDS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1rem] text-ink">
                    <span className="shrink-0 mt-0.5 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)]">
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

      <Testimonials tone="sand" />

      {/* CALENDLY EMBED */}
      <section id="boka" className="py-[var(--section-y)] sec-marin relative overflow-hidden">
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
            <h2 className="reveal reveal-d1">Välj en tid som passar dig.</h2>
            <div className="reveal reveal-d2 mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.9rem] text-[color:var(--papper)]/80">
              {["Kostnadsfritt", "30 minuter", "Direkt med mig", "Inget säljtryck"].map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d3 max-w-4xl mx-auto rounded-3xl overflow-hidden bg-papper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <iframe
              src="https://calendly.com/olawallstrom/30min?hide_gdpr_banner=1"
              title="Boka strategisamtal med Ola Wallström"
              width="100%"
              height="720"
              frameBorder="0"
              className="block"
            />
          </div>
        </div>
      </section>

      {/* BOARDROOM TEASER */}
      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="reveal relative overflow-hidden rounded-3xl sec-marin p-8 md:p-12">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
            />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
              <div>
                <p className="eyebrow-upper mb-5">Ola erbjuder också</p>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight text-[color:var(--papper)]">
                  Boardroom 2027 - ett år, fyra teman.
                </h3>
                <p className="mt-5 text-[1rem] text-[color:var(--papper)]/80 leading-relaxed max-w-xl">
                  Vill du gå in i ett helt program? Boardroom är Olas 12-månaders upplägg för
                  VD/ägare - i ett litet rum av erfarna ägare, med personligt stöd hela vägen.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link href="/boardroom" className="btn-primary">
                    Se programmet
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </Link>
                  <span className="text-[0.85rem] text-[color:var(--papper)]/60">
                    195 000 kr · max 15 deltagare
                  </span>
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-2 justify-end">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-[color:var(--papper)] text-[0.78rem] font-semibold">Q1 Mental klarhet</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--olabla)] text-[color:var(--papper)] text-[0.78rem] font-semibold">Q2 Stjärnledarskap</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--glod)] text-white text-[0.78rem] font-semibold">Q3 Affärsutveckling</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[color:var(--sand)] text-[color:var(--marin)] text-[0.78rem] font-semibold">Q4 Säljstrategi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
