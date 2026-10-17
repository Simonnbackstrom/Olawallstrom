type Props = {
  eyebrow?: string;
  heading: React.ReactNode;
  intro?: string;
  points: string[];
  closer?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "marin" | "sand";
};

export default function SharedPainPoints({
  eyebrow,
  heading,
  intro,
  points,
  closer,
  ctaLabel = "Boka ett samtal",
  ctaHref = "https://calendly.com/olawallstrom/30min",
  tone = "marin",
}: Props) {
  const dark = tone === "marin";
  const sectionClass = dark ? "sec-marin" : "sec-sand";
  const headingColor = dark ? "" : "text-[color:var(--marin)]";
  const introColor = dark ? "text-[color:var(--papper)]/75" : "text-ink-soft";
  const itemBg = dark
    ? "bg-white/[0.04] ring-1 ring-white/10"
    : "bg-white border border-[color:var(--border-soft)] shadow-[0_18px_42px_-30px_rgba(23,59,96,0.22)]";
  const itemText = dark ? "text-[color:var(--papper)]/90" : "text-ink";
  const closerColor = dark ? "text-[color:var(--papper)]/90" : "text-ink";

  return (
    <section className={`py-[var(--section-y)] ${sectionClass} relative overflow-hidden`}>
      {dark && (
        <>
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none opacity-60"
            style={{ background: "radial-gradient(circle, rgba(220,232,243,0.08) 0%, transparent 65%)" }}
          />
        </>
      )}

      <div className="container-site relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          {eyebrow && (
            <p className="reveal eyebrow mb-5 justify-center">{eyebrow}</p>
          )}
          <h2 className={`reveal reveal-d1 ${headingColor}`}>{heading}</h2>
          {intro && (
            <p className={`reveal reveal-d2 mt-6 text-[1.05rem] md:text-[1.1rem] leading-relaxed ${introColor}`}>
              {intro}
            </p>
          )}
        </div>

        <ul className={`mx-auto grid gap-4 ${dark ? "max-w-2xl" : "max-w-4xl md:grid-cols-2 md:gap-5"}`}>
          {points.map((p, i) => (
            <li
              key={p}
              className={`reveal reveal-d${(i % 5) + 1} flex gap-4 items-start rounded-2xl ${itemBg} px-6 py-5 md:px-7 md:py-6`}
            >
              <span className={`shrink-0 mt-0.5 h-8 w-8 inline-flex items-center justify-center rounded-full ${dark ? "bg-[color:var(--glod)]/20 text-[color:var(--glod)]" : "bg-[color:var(--glod-dim)] text-[color:var(--glod)]"}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              <p className={`text-[1rem] md:text-[1.05rem] leading-relaxed ${itemText}`}>
                {p}
              </p>
            </li>
          ))}
        </ul>

        {closer && (
          <div className="mt-14 text-center">
            <p className={`reveal reveal-d2 text-[1.1rem] md:text-[1.2rem] max-w-2xl mx-auto ${closerColor}`}>
              {closer}
            </p>
            <div className="reveal reveal-d3 mt-10">
              <a
                href={ctaHref}
                target={ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-primary"
              >
                {ctaLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
