import Image from "next/image";
import Link from "next/link";

const THEMES = [
  { q: "Q1", title: "Mental klarhet", tone: "bg-white/10 text-[color:var(--papper)]" },
  { q: "Q2", title: "Stjärnledarskap", tone: "bg-[color:var(--olabla)] text-[color:var(--papper)]" },
  { q: "Q3", title: "Affärsutveckling", tone: "bg-[color:var(--glod)] text-white" },
  { q: "Q4", title: "Säljstrategi", tone: "bg-[color:var(--sand)] text-[color:var(--marin)]" },
];

export default function BoardroomPrimary() {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl sec-marin">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
          />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
            <div className="reveal relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px]">
              <Image
                src="/images/ola-leader.jpg"
                alt="Ola Wallström leder Boardroom-session med bolagsägare"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[color:var(--marin)]/70 lg:to-[color:var(--marin)]"
              />
            </div>

            <div className="relative p-8 md:p-14 flex flex-col justify-center">
              <p className="reveal eyebrow-upper text-[color:var(--glod)] mb-5">
                Primärt program 2027
              </p>

              <h2 className="reveal reveal-d1 text-[color:var(--papper)]">
                Boardroom. <em>Ett år, fyra teman,</em> 14 andra ägare runt bordet.
              </h2>

              <p className="reveal reveal-d2 mt-6 text-[1.05rem] md:text-[1.1rem] text-[color:var(--papper)]/80 leading-relaxed max-w-xl">
                12 månader av strukturerat ägararbete tillsammans med Ola och ett
                litet rum av erfarna bolagsägare. Fyra workshopdagar, 19 Boardroom-sessioner,
                personlig startworkshop och tre 1:1-samtal med mig under året.
              </p>

              <div className="reveal reveal-d3 mt-7 flex flex-wrap gap-2">
                {THEMES.map((t) => (
                  <span
                    key={t.q}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-[0.78rem] font-semibold ${t.tone}`}
                  >
                    {t.q} {t.title}
                  </span>
                ))}
              </div>

              <div className="reveal reveal-d4 mt-8 flex flex-wrap items-center gap-5">
                <Link href="/boardroom" className="btn-primary">
                  Se programmet
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </Link>
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] font-semibold text-[color:var(--papper)]/90 hover:text-[color:var(--glod)] transition-colors"
                >
                  Eller boka ett strategisamtal
                </a>
              </div>

              <p className="reveal reveal-d5 mt-6 text-[0.85rem] text-[color:var(--papper)]/60">
                195 000 kr, max 15 deltagare, begränsat antal platser 2027.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
