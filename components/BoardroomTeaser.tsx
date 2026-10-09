import Link from "next/link";

const THEMES = [
  { q: "Q1", title: "Mental klarhet", tone: "bg-white/10 text-[color:var(--papper)]" },
  { q: "Q2", title: "Stjärnledarskap", tone: "bg-[color:var(--olabla)] text-[color:var(--papper)]" },
  { q: "Q3", title: "Affärsutveckling", tone: "bg-[color:var(--glod)] text-white" },
  { q: "Q4", title: "Säljstrategi", tone: "bg-[color:var(--sand)] text-[color:var(--marin)]" },
];

export default function BoardroomTeaser() {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="reveal relative overflow-hidden rounded-3xl sec-marin p-8 md:p-14">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
          />
          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-[color:var(--papper)]">
                Boardroom 2027 - <em>ett år, fyra teman</em>.
              </h2>
              <p className="mt-6 text-[1.05rem] md:text-[1.1rem] text-[color:var(--papper)]/80 leading-relaxed max-w-xl">
                Vill du gå in i ett helt program? Boardroom är mitt 12-månaders upplägg för
                VD/ägare - i ett litet rum av erfarna ägare, med personligt stöd hela vägen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
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
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {THEMES.map((t) => (
                <span
                  key={t.q}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-[0.78rem] font-semibold ${t.tone}`}
                >
                  {t.q} {t.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
