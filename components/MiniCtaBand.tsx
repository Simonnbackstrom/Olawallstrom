type Props = {
  headline: string;
  subline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "marin" | "sand" | "glod";
};

export default function MiniCtaBand({
  headline,
  subline,
  ctaLabel = "Boka 30 min med Ola",
  ctaHref = "https://calendly.com/olawallstrom/30min",
  tone = "marin",
}: Props) {
  const dark = tone !== "sand";
  const sectionClass =
    tone === "sand" ? "sec-sand" : tone === "glod" ? "sec-marin" : "sec-marin";
  const headingColor = dark ? "text-[color:var(--papper)]" : "text-[color:var(--marin)]";
  const subColor = dark ? "text-[color:var(--papper)]/75" : "text-ink-soft";
  const btnClass = dark ? "btn-primary" : "btn-primary";

  return (
    <section className={`py-14 md:py-16 ${sectionClass} relative overflow-hidden`}>
      {dark && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 15% 50%, rgba(242,106,46,0.18) 0%, transparent 55%)",
          }}
        />
      )}

      <div className="container-site relative">
        <div className="reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 rounded-3xl bg-white/[0.03] ring-1 ring-white/10 px-6 md:px-10 py-7 md:py-8"
          style={dark ? undefined : { background: "white", border: "1px solid var(--border-soft)", boxShadow: "0 18px 42px -24px rgba(23,59,96,0.18)" }}
        >
          <div className="flex-1">
            <h3 className={`font-[family-name:var(--font-lora)] font-semibold text-[1.3rem] md:text-[1.5rem] leading-tight ${headingColor}`}>
              {headline}
            </h3>
            {subline && (
              <p className={`mt-2 text-[0.95rem] md:text-[1rem] leading-relaxed ${subColor}`}>
                {subline}
              </p>
            )}
          </div>
          <a
            href={ctaHref}
            target={ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${btnClass} shrink-0`}
          >
            {ctaLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
