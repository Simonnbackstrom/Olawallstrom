import Link from "next/link";
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
              Jag är Ola. Du är inte först som fastnat vid ett omsättningstak eller blivit
              flaskhals i ditt eget bolag. Jag säger som det är, utan konsultspråk, och vi mäter
              framgång i det som faktiskt blir gjort. Ditt bolag kan växa utan att du blir någon annan.
            </p>

            <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka ett samtal med mig
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <Link
                href="/agarklivet"
                className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--marin)] hover:text-[color:var(--glod)] transition-colors px-2 py-3"
              >
                Se Ägarklivet 2027
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
