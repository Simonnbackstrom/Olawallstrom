export default function StrategyTeaser() {
  return (
    <section className="py-[var(--section-y)] sec-sand relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full bg-himmel/50 blur-3xl pointer-events-none"
      />

      <div className="container-site relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal reveal-d1">
            30 minuter som ger dig <em>riktning för de närmaste tolv</em>.
          </h2>
          <p className="reveal reveal-d2 mt-6 text-[1.05rem] md:text-[1.15rem] text-ink-soft leading-relaxed max-w-2xl mx-auto">
            Boka ett kostnadsfritt samtal med mig. Vi går igenom var du är, var du vill
            och vad som faktiskt behöver flyttas först. Du går därifrån med konkreta
            nästa steg, oavsett om vi fortsätter jobba ihop eller inte.
          </p>

          <ul className="reveal reveal-d3 mt-10 grid gap-3 sm:grid-cols-3 max-w-2xl mx-auto text-[0.95rem] text-ink-soft">
            {[
              "Kostnadsfritt",
              "Inga säljpitchar",
              "Konkreta steg",
            ].map((p) => (
              <li
                key={p}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[color:var(--border-soft)] px-4 py-2"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--glod)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <div className="reveal reveal-d4 mt-10">
            <a
              href="https://calendly.com/olawallstrom/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Boka ett strategisamtal
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
