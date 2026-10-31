type Marker = { angle: number; type: "session" | "avstamp" | "workshop" };

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAJ", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"];

// Angles follow the calendar (30° per month). Per quarter: 5, 5, 4 and 5 group sessions = 19.
const MARKERS: Marker[] = [
  { angle: 11, type: "avstamp" }, // 12 jan
  { angle: 20, type: "workshop" }, // 21 jan
  { angle: 32, type: "session" },
  { angle: 44, type: "session" },
  { angle: 56, type: "session" },
  { angle: 68, type: "session" },
  { angle: 80, type: "session" },

  { angle: 95, type: "avstamp" }, // 6 apr
  { angle: 105, type: "workshop" }, // 15 apr
  { angle: 117, type: "session" },
  { angle: 129, type: "session" },
  { angle: 141, type: "session" },
  { angle: 153, type: "session" },
  { angle: 165, type: "session" },

  { angle: 179, type: "avstamp" }, // 29 jun
  { angle: 200, type: "session" },
  { angle: 215, type: "session" },
  { angle: 230, type: "session" },
  { angle: 245, type: "session" },

  { angle: 267, type: "avstamp" }, // 28 sep
  { angle: 276, type: "workshop" }, // 7 okt
  { angle: 283, type: "workshop" }, // 8 okt
  { angle: 296, type: "session" },
  { angle: 309, type: "session" },
  { angle: 322, type: "session" },
  { angle: 335, type: "session" },
  { angle: 348, type: "session" },
];

const LEGEND = [
  {
    count: "19",
    title: "gemensamma sessioner",
    body: "Digitala träffar på en timme. Här tar vi upp frågor, utmaningar och beslut tillsammans med de andra ägarna.",
    marker: "session" as const,
  },
  {
    count: "4",
    title: "kvartalsavstamp",
    body: "Ett frågebatteri och två timmars digital fördjupning per kvartal.",
    marker: "avstamp" as const,
  },
  {
    count: "4",
    title: "workshopdagar",
    body: "En heldag per kvartal — Mental klarhet, Stjärnledarskap, Autentisk affärsutveckling och Smart säljstrategi.",
    marker: "workshop" as const,
  },
];

/* The count inside the brand's open circle (same mark as the logo and the values). */
function CountMark({ count }: { count: string }) {
  return (
    <span className="relative mx-auto flex h-14 w-14 items-center justify-center font-bold text-[1.25rem] text-[color:var(--marin)]">
      <svg viewBox="0 0 48 48" fill="none" aria-hidden className="absolute inset-0 h-full w-full text-[color:var(--glod)]">
        <path d="M 33 7 A 19 19 0 1 0 42 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {count}
    </span>
  );
}

/* Tiny key that matches the markers on the wheel. */
function WheelKey({ type }: { type: Marker["type"] }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="shrink-0">
      {type === "session" && <circle cx="6" cy="6" r="3" fill="#173B60" />}
      {type === "avstamp" && <circle cx="6" cy="6" r="4.2" fill="none" stroke="#F26A2E" strokeWidth="1.8" />}
      {type === "workshop" && <rect x="2.5" y="2.5" width="7" height="7" fill="#2A62A0" transform="rotate(45 6 6)" />}
    </svg>
  );
}

const polar = (angle: number, radius: number) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: 200 + radius * Math.cos(rad), y: 200 + radius * Math.sin(rad) };
};

export default function BoardroomWheel() {
  const outerR = 190;
  const quadrantR = 160;
  const markerR = 175;
  const centerR = 70;

  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Wheel */}
          <div className="reveal relative mx-auto w-full max-w-[520px]">
            <svg
              viewBox="-28 -28 456 456"
              className="w-full h-auto"
              role="img"
              aria-label="Årshjul med fyra kvartalsteman"
            >
              <circle cx="200" cy="200" r={outerR} fill="var(--papper)" stroke="var(--border-soft)" strokeWidth="1" />

              {/* Q1 Mental klarhet - Marin */}
              <path
                d={`M 200 200 L ${200} ${200 - quadrantR} A ${quadrantR} ${quadrantR} 0 0 1 ${200 + quadrantR} 200 Z`}
                fill="#173B60"
                stroke="#F7F3EC"
                strokeWidth="4"
              />
              {/* Q2 Stjärnledarskap - Olablå */}
              <path
                d={`M 200 200 L ${200 + quadrantR} 200 A ${quadrantR} ${quadrantR} 0 0 1 200 ${200 + quadrantR} Z`}
                fill="#2A62A0"
                stroke="#F7F3EC"
                strokeWidth="4"
              />
              {/* Q3 Autentisk affärsutveckling - Glöd */}
              <path
                d={`M 200 200 L 200 ${200 + quadrantR} A ${quadrantR} ${quadrantR} 0 0 1 ${200 - quadrantR} 200 Z`}
                fill="#F26A2E"
                stroke="#F7F3EC"
                strokeWidth="4"
              />
              {/* Q4 Smart säljstrategi - Sand */}
              <path
                d={`M 200 200 L ${200 - quadrantR} 200 A ${quadrantR} ${quadrantR} 0 0 1 200 ${200 - quadrantR} Z`}
                fill="#EDE4D6"
                stroke="#F7F3EC"
                strokeWidth="4"
              />

              <g fontFamily="var(--font-heading), ui-serif, Georgia, serif" fontWeight="600" textAnchor="middle">
                <text x="275" y="112" fill="#F7F3EC" fontSize="14">Mental klarhet</text>
                <text x="275" y="128" fill="#F7F3EC" fontSize="10" fontWeight="400" opacity="0.75">Q1 (jan–mar)</text>

                <text x="275" y="275" fill="#F7F3EC" fontSize="14">Stjärnledarskap</text>
                <text x="275" y="291" fill="#F7F3EC" fontSize="10" fontWeight="400" opacity="0.75">Q2 (apr–jun)</text>

                <text x="125" y="268" fill="#F7F3EC" fontSize="12">Autentisk</text>
                <text x="125" y="283" fill="#F7F3EC" fontSize="12">affärsutveckling</text>
                <text x="125" y="299" fill="#F7F3EC" fontSize="10" fontWeight="400" opacity="0.85">Q3 (jul–sep)</text>

                <text x="125" y="112" fill="#173B60" fontSize="12">Smart sälj­</text>
                <text x="125" y="127" fill="#173B60" fontSize="12">strategi</text>
                <text x="125" y="143" fill="#173B60" fontSize="10" fontWeight="400" opacity="0.7">Q4 (okt–dec)</text>
              </g>

              <circle cx="200" cy="200" r={centerR} fill="#F7F3EC" />
              <text
                x="200"
                y="195"
                textAnchor="middle"
                fontFamily="var(--font-heading), ui-serif, Georgia, serif"
                fontWeight="600"
                fontSize="18"
                fill="#173B60"
              >
                Ägarklivet
              </text>
              <text
                x="200"
                y="214"
                textAnchor="middle"
                fontFamily="var(--font-text), sans-serif"
                fontSize="10"
                fill="#6B6B6B"
              >
                12 månader
              </text>

              {MONTHS.map((m, i) => {
                const angle = i * 30 + 15;
                const p = polar(angle, outerR + 15);
                return (
                  <text
                    key={m}
                    x={p.x}
                    y={p.y + 3}
                    textAnchor="middle"
                    fontFamily="var(--font-text), sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    fill="#6B6B6B"
                    letterSpacing="1"
                  >
                    {m}
                  </text>
                );
              })}

              {MARKERS.map((m, i) => {
                const p = polar(m.angle, markerR);
                if (m.type === "session") {
                  return <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#173B60" />;
                }
                if (m.type === "avstamp") {
                  return (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r="5"
                      fill="none"
                      stroke="#F26A2E"
                      strokeWidth="2"
                    />
                  );
                }
                return (
                  <rect
                    key={i}
                    x={p.x - 4}
                    y={p.y - 4}
                    width="8"
                    height="8"
                    fill="#2A62A0"
                    transform={`rotate(45 ${p.x} ${p.y})`}
                  />
                );
              })}
            </svg>
          </div>

          <div className="text-center">
            <h2 className="reveal">
              Så ser <em>året</em> ut.
            </h2>
            <p className="reveal reveal-d1 mt-6 text-[1.05rem] md:text-[1.1rem] text-ink-soft leading-relaxed max-w-md mx-auto">
              Tolv månader i ett sammanhang av erfarna ägare och med mig vid din sida hela vägen.
            </p>

            <ul className="reveal reveal-d2 mt-10 rounded-3xl bg-white border border-[color:var(--border-soft)] divide-y divide-[color:var(--border-soft)] text-center">
              {LEGEND.map((l) => (
                <li key={l.title} className="px-6 py-7 md:px-8">
                  <CountMark count={l.count} />
                  <p className="mt-3 inline-flex items-center gap-2 font-semibold text-[1.05rem] text-[color:var(--marin)]">
                    <WheelKey type={l.marker} />
                    {l.title.charAt(0).toUpperCase() + l.title.slice(1)}
                  </p>
                  <p className="mt-2 text-[0.96rem] text-ink-soft leading-relaxed max-w-sm mx-auto">
                    {l.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-d3 mt-10">
              <h3 style={{ fontSize: "1.25rem" }}>Personligt för dig</h3>
              <ul className="mt-3 space-y-1.5 text-[0.98rem] text-ink-soft">
                <li>En startworkshop på 4 timmar i Stockholm</li>
                <li>3 coachingsamtal på 45 minuter, bara du och jag</li>
                <li>En chatt-kanal med mig och de andra ägarna, hela året</li>
              </ul>
            </div>

            <div className="reveal reveal-d4 mt-10 flex flex-col items-center gap-3">
              <a
                href="https://calendly.com/olawallstrom/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Boka ett strategisamtal med mig
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
              <span className="text-[0.88rem] text-muted">Strategisamtalet är kostnadsfritt och tar 30 minuter.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
