import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testimonials";
import StatsBand from "@/components/StatsBand";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Resultat",
  description:
    "Riktiga resultat från bolag jag coachat. Case, testimonials och nyckeltal från mitt arbete som mentor för bolagsägare i segmentet 10-50 Mkr.",
  alternates: { canonical: "/resultat" },
};

export default function ResultatPage() {
  return (
    <>
      <PageHero
        eyebrow="Resultat"
        title={
          <>
            Resultat är <em>inte löften</em> - det är siffror på pappret.
          </>
        }
        intro="Det här är ett urval av bolag jag jobbat med och den förflyttning vi gjort tillsammans. Alla case bygger på verkliga samarbeten där ägaren själv valt att stå framför."
      />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="reveal rounded-3xl overflow-hidden sec-marin">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="p-10 md:p-14 relative">
                <div
                  aria-hidden
                  className="absolute -top-10 -left-10 w-[260px] h-[260px] rounded-full pointer-events-none opacity-70"
                  style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
                />
                <div className="relative">
                  <p className="eyebrow mb-6">Headline-case · Alex</p>
                  <h2 className="font-[family-name:var(--font-lora)] font-semibold text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.05]">
                    <span className="text-[color:var(--glod)]">19 Mkr</span>
                    <span className="text-[color:var(--papper)]/50"> → </span>
                    <span className="text-[color:var(--glod)]">1,9 Mdr</span>
                  </h2>
                  <p className="mt-6 text-[1.1rem] text-[color:var(--papper)]/85 leading-relaxed max-w-md">
                    Från ett tjänstebolag runt tjugo miljoner till ett bolag som idag omsätter nära
                    två miljarder - med en ägare som fortfarande har tid för familjen. Ett av de
                    resultat jag fått vara med och forma.
                  </p>
                  <dl className="mt-10 grid grid-cols-3 gap-6">
                    <div>
                      <dt className="font-[family-name:var(--font-lora)] font-semibold text-[1.6rem] text-[color:var(--papper)]">
                        100x
                      </dt>
                      <dd className="text-[0.75rem] uppercase tracking-wider text-[color:var(--papper)]/60 mt-1.5">
                        Omsättning
                      </dd>
                    </div>
                    <div>
                      <dt className="font-[family-name:var(--font-lora)] font-semibold text-[1.6rem] text-[color:var(--papper)]">
                        4+ år
                      </dt>
                      <dd className="text-[0.75rem] uppercase tracking-wider text-[color:var(--papper)]/60 mt-1.5">
                        Samarbete
                      </dd>
                    </div>
                    <div>
                      <dt className="font-[family-name:var(--font-lora)] font-semibold text-[1.6rem] text-[color:var(--papper)]">
                        1
                      </dt>
                      <dd className="text-[0.75rem] uppercase tracking-wider text-[color:var(--papper)]/60 mt-1.5">
                        Ägare
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="relative min-h-[320px] md:min-h-full">
                <Image
                  src="/images/ola-leader.jpg"
                  alt="Ola i arbete med klient"
                  fill
                  sizes="(min-width: 768px) 500px, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, rgba(23,59,96,0.6) 0%, transparent 40%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials tone="sand" />

      <StatsBand tone="himmel" />

      <LogoCarousel heading="Bolag jag arbetat med" />

      <section className="py-[var(--section-y)] sec-papper">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="reveal reveal-d1">
              Jag tar emot ett begränsat antal mentorsklienter per år.
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.02rem] text-ink-soft leading-relaxed">
              Varje samarbete kräver tid och fokus. Ett kostnadsfritt strategisamtal är
              startpunkten - där ser vi båda om det här är rätt för dig.
            </p>
            <div className="reveal reveal-d3 mt-10">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka ett samtal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand tone="marin" />
    </>
  );
}
