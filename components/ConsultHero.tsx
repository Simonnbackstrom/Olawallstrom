import Image from "next/image";

export default function ConsultHero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-papper overflow-hidden">
      <div className="container-site relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 max-w-2xl mx-auto text-center lg:pt-16">
            <h1 className="reveal reveal-d1 text-[color:var(--marin)]">
              Äkta, rakt och med <em>riktning framåt.</em>
            </h1>

            <p className="reveal reveal-d2 mt-8 text-[1.1rem] md:text-[1.15rem] text-ink-soft leading-relaxed max-w-xl mx-auto">
              Du är inte den enda som fastnat vid ett omsättningstak eller känt att allt landar på dig.
              Här får du raka samtal utan konsultspråk, och fokus på det som faktiskt blir gjort.
              Så att bolaget kan växa utan att det tar all din tid och energi.
            </p>

            <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka ett strategisamtal med mig
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
            </div>

            {/* Proof row */}
            <dl className="reveal reveal-d4 mt-12 grid grid-cols-3 gap-4 sm:flex sm:justify-center sm:gap-14 text-center">
              {[
                { n: "650+", l: "coachade ägare" },
                { n: "25 år", l: "som entreprenör" },
                { n: "8", l: "egna bolag" },
              ].map((p) => (
                <div key={p.n} className="flex flex-col-reverse justify-end">
                  <dt className="mt-2 text-[0.85rem] text-muted leading-snug sm:whitespace-nowrap">{p.l}</dt>
                  <dd className="font-[family-name:var(--font-heading)] font-semibold text-[2rem] md:text-[2.3rem] leading-none text-[color:var(--marin)]">
                    {p.n}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-[520px] mx-auto">
              <Image
                src="/images/ola-portratt-leende-hd.jpg"
                alt="Ola Wallström ler i brun kavaj"
                fill
                quality={90}
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover object-[50%_20%] rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
