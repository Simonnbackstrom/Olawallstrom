type Props = {
  heading: React.ReactNode;
  points: string[];
  intro?: string;
  tone?: "sand" | "papper" | "himmel";
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  sand: "sec-sand",
  papper: "sec-papper",
  himmel: "sec-himmel",
};

export default function PageQualifier({ heading, points, intro, tone = "himmel" }: Props) {
  return (
    <section className={`py-[var(--section-y)] ${toneClass[tone]}`}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="reveal reveal-d1">{heading}</h2>
          {intro && (
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        <ul className="mx-auto grid gap-4 md:gap-5 max-w-3xl">
          {points.map((p, i) => (
            <li
              key={p}
              className={`reveal reveal-d${(i % 5) + 1} flex items-start gap-4 rounded-2xl bg-white px-6 py-5 md:px-7 md:py-6 shadow-[0_18px_42px_-34px_rgba(23,59,96,0.3)]`}
            >
              <span className="shrink-0 mt-0.5 h-7 w-7 inline-flex items-center justify-center rounded-full bg-glod-dim text-[color:var(--glod)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="text-[1rem] md:text-[1.05rem] leading-relaxed text-ink">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
