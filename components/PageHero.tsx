type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "papper" | "marin" | "sand";
  align?: "left" | "center";
  /** Hide the decorative glow circles. */
  plain?: boolean;
  /** Optional booking button under the intro. */
  cta?: { label: string; href: string; sub?: string };
};

export default function PageHero({ eyebrow, title, intro, tone = "papper", align = "left", plain = false, cta }: Props) {
  const sectionClass =
    tone === "marin" ? "sec-marin" : tone === "sand" ? "sec-sand" : "sec-papper";
  const isDark = tone === "marin";
  const centered = align === "center";

  return (
    <section
      className={`relative pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden ${sectionClass}`}
    >
      {!plain && (
        <>
          <div
            aria-hidden
            className="absolute -top-32 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-70"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)"
                : "radial-gradient(circle, rgba(242,106,46,0.14) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="absolute bottom-[-20%] left-[-8%] w-[460px] h-[460px] rounded-full pointer-events-none opacity-50"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(220,232,243,0.08) 0%, transparent 65%)"
                : "radial-gradient(circle, rgba(42,98,160,0.08) 0%, transparent 65%)",
            }}
          />
        </>
      )}

      <div className="container-site relative">
        <div className={centered ? "max-w-4xl mx-auto text-center" : "max-w-3xl"}>
          {eyebrow && <p className="reveal eyebrow mb-6">{eyebrow}</p>}
          <h1 className="reveal reveal-d1">{title}</h1>
          {intro && (
            <p
              className={`reveal reveal-d2 mt-6 text-[1.1rem] md:text-[1.2rem] leading-relaxed max-w-2xl ${
                centered ? "mx-auto" : ""
              } ${isDark ? "text-[color:var(--papper)]/80" : "text-ink-soft"}`}
            >
              {intro}
            </p>
          )}
          {cta && (
            <div className="reveal reveal-d3 mt-9">
              <a
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-primary"
              >
                {cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              {cta.sub && (
                <p className={`mt-4 text-[0.88rem] ${isDark ? "text-[color:var(--papper)]/60" : "text-muted"}`}>{cta.sub}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
