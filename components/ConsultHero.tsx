import Link from "next/link";
import Image from "next/image";

export default function ConsultHero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 bg-papper overflow-hidden">
      {/* Subtle Himmel wash top-right as brand accent */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full bg-himmel/60 blur-3xl pointer-events-none"
      />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 max-w-2xl">
            <p className="reveal eyebrow mb-6">Autentisk affärsutveckling</p>

            <h1 className="reveal reveal-d1 text-[color:var(--marin)]">
              Äkta, rakt{" "}
              <em className="text-[color:var(--glod)] not-italic font-[family-name:var(--font-lora)]">
                och med
              </em>{" "}
              <span className="italic">riktning framåt.</span>
            </h1>

            <p className="reveal reveal-d2 mt-8 text-[1.1rem] md:text-[1.15rem] text-ink-soft leading-relaxed max-w-xl">
              Jag är Ola. Jag pratar rakt och på du, utan konsultspråk. Vi mäter framgång
              i det som faktiskt blir gjort — så du kan äga din tid och ditt företag.
            </p>

            <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/strategisession" className="btn-primary">
                Boka ett samtal med mig
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </Link>
              <Link
                href="/metod"
                className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--marin)] hover:text-[color:var(--glod)] transition-colors px-2 py-3"
              >
                Så jobbar jag
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </Link>
            </div>

            {/* Proof row */}
            <div className="reveal reveal-d4 mt-14 pt-8 border-t border-[color:var(--border-soft)] grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "650+", l: "Bolagsägare\njag coachat" },
                { n: "25 år", l: "Som serie-\nentreprenör" },
                { n: "8", l: "Bolag jag\nbyggt själv" },
              ].map((p) => (
                <div key={p.n}>
                  <div className="font-[family-name:var(--font-lora)] font-semibold text-[2rem] md:text-[2.25rem] leading-none text-[color:var(--marin)]">
                    {p.n}
                  </div>
                  <div className="mt-2 text-[0.78rem] text-muted leading-snug whitespace-pre-line">
                    {p.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 relative">
            {/* Open-circle brand accent behind */}
            <svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-[110%] h-auto -z-0 text-[color:var(--glod)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            >
              <path d="M 200 30 A 170 170 0 1 1 330 320" />
            </svg>

            <div className="relative aspect-[4/5] max-w-[520px] mx-auto">
              <Image
                src="/images/ola-studio.jpg"
                alt="Ola Wallström"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover object-top rounded-[2rem]"
              />
              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-papper border border-[color:var(--border-soft)] rounded-2xl px-5 py-4 shadow-[0_14px_38px_-14px_rgba(23,59,96,0.3)]">
                <div className="eyebrow-upper">Metoden</div>
                <div className="mt-2 font-[family-name:var(--font-lora)] font-semibold text-[0.95rem] text-[color:var(--marin)] leading-tight">
                  Fyra principer<br />som flyttar bolag framåt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
