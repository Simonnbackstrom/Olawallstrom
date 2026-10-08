type Marker = { angle: number; type: "session" | "avstamp" | "workshop" };

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAJ", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"];

const MARKERS: Marker[] = [
  { angle: 11, type: "avstamp" },
  { angle: 20, type: "workshop" },
  { angle: 35, type: "session" },
  { angle: 50, type: "session" },
  { angle: 65, type: "session" },
  { angle: 80, type: "session" },

  { angle: 95, type: "avstamp" },
  { angle: 105, type: "workshop" },
  { angle: 120, type: "session" },
  { angle: 135, type: "session" },
  { angle: 150, type: "session" },
  { angle: 165, type: "session" },

  { angle: 180, type: "avstamp" },
  { angle: 200, type: "session" },
  { angle: 220, type: "session" },
  { angle: 240, type: "session" },

  { angle: 265, type: "avstamp" },
  { angle: 278, type: "workshop" },
  { angle: 290, type: "session" },
  { angle: 305, type: "session" },
  { angle: 320, type: "session" },
  { angle: 335, type: "session" },
  { angle: 350, type: "session" },
];

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
              viewBox="0 0 400 400"
              className="w-full h-auto"
              role="img"
              aria-label="Årshjul 2027 med fyra kvartalsteman"
            >
              <circle cx="200" cy="200" r={outerR} fill="var(--papper)" stroke="var(--border-soft)" strokeWidth="1" />

              {/* Q1 Mental klarhet — Marin */}
              <path
                d={`M 200 200 L ${200} ${200 - quadrantR} A ${quadrantR} ${quadrantR} 0 0 1 ${200 + quadrantR} 200 Z`}
                fill="#173B60"
              />
              {/* Q2 Stjärnledarskap — Olablå */}
              <path
                d={`M 200 200 L ${200 + quadrantR} 200 A ${quadrantR} ${quadrantR} 0 0 1 200 ${200 + quadrantR} Z`}
                fill="#2A62A0"
              />
              {/* Q3 Autentisk affärsutveckling — Glöd */}
              <path
                d={`M 200 200 L 200 ${200 + quadrantR} A ${quadrantR} ${quadrantR} 0 0 1 ${200 - quadrantR} 200 Z`}
                fill="#F26A2E"
              />
              {/* Q4 Smart säljstrategi — Sand */}
              <path
                d={`M 200 200 L ${200 - quadrantR} 200 A ${quadrantR} ${quadrantR} 0 0 1 200 ${200 - quadrantR} Z`}
                fill="#EDE4D6"
              />

              <g fontFamily="var(--font-lora), serif" fontWeight="600" textAnchor="middle">
                <text x="275" y="112" fill="#F7F3EC" fontSize="14">Mental klarhet</text>
                <text x="275" y="128" fill="#F7F3EC" fontSize="10" fontWeight="400" opacity="0.75" fontStyle="italic">Q1 · jan–mar</text>

                <text x="275" y="275" fill="#F7F3EC" fontSize="14">Stjärnledarskap</text>
                <text x="275" y="291" fill="#F7F3EC" fontSize="10" fontWeight="400" opacity="0.75" fontStyle="italic">Q2 · apr–jun</text>

                <text x="125" y="268" fill="#F7F3EC" fontSize="12">Autentisk</text>
                <text x="125" y="283" fill="#F7F3EC" fontSize="12">affärsutveckling</text>
                <text x="125" y="299" fill="#F7F3EC" fontSize="10" fontWeight="400" opacity="0.85" fontStyle="italic">Q3 · jul–sep</text>

                <text x="125" y="112" fill="#173B60" fontSize="12">Smart sälj­</text>
                <text x="125" y="127" fill="#173B60" fontSize="12">strategi</text>
                <text x="125" y="143" fill="#173B60" fontSize="10" fontWeight="400" opacity="0.7" fontStyle="italic">Q4 · okt–dec</text>
              </g>

              <circle cx="200" cy="200" r={centerR} fill="#F7F3EC" stroke="var(--border-soft)" strokeWidth="1" />
              <text
                x="200"
                y="195"
                textAnchor="middle"
                fontFamily="var(--font-lora), serif"
                fontWeight="600"
                fontSize="18"
                fill="#173B60"
              >
                Boardroom
              </text>
              <text
                x="200"
                y="214"
                textAnchor="middle"
                fontFamily="var(--font-raleway), sans-serif"
                fontSize="10"
                fill="#6B6B6B"
              >
                2027 · 12 månader
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
                    fontFamily="var(--font-raleway), sans-serif"
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

          <div>
            <p className="reveal eyebrow mb-5">Årshjul 2027</p>
            <h2 className="reveal reveal-d1">
              Ett år. <em>Fyra teman.</em>
            </h2>
            <p className="reveal reveal-d2 mt-6 text-[1.05rem] text-ink-soft leading-relaxed max-w-md">
              Tolv månader för dig som VD eller ägare — i ett litet rum av erfarna ägare,
              med personligt stöd hela vägen.
            </p>

            <ul className="reveal reveal-d3 mt-10 space-y-6">
              <li className="flex gap-4 items-start">
                <span className="shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--marin)]" />
                <div>
                  <div className="font-[family-name:var(--font-raleway)] font-bold text-[1rem] text-[color:var(--marin)]">
                    19 Boardroom sessions
                  </div>
                  <p className="text-[0.95rem] text-ink-soft leading-relaxed mt-1">
                    Digitala träffar à ca en timme. Lyft frågor, utmaningar och beslut med andra erfarna ägare.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="shrink-0 mt-2 h-3 w-3 rounded-full border-2 border-[color:var(--glod)]" />
                <div>
                  <div className="font-[family-name:var(--font-raleway)] font-bold text-[1rem] text-[color:var(--marin)]">
                    4 kvartalsavstamp
                  </div>
                  <p className="text-[0.95rem] text-ink-soft leading-relaxed mt-1">
                    Frågebatteri + två timmars digital fördjupning.{" "}
                    <span className="text-muted">12 jan · 6 apr · 29 jun · 28 sep</span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="shrink-0 mt-2 h-3 w-3 bg-[color:var(--olabla)] rotate-45" />
                <div>
                  <div className="font-[family-name:var(--font-raleway)] font-bold text-[1rem] text-[color:var(--marin)]">
                    4 workshopdagar
                  </div>
                  <p className="text-[0.95rem] text-ink-soft leading-relaxed mt-1">
                    21 jan Mental klarhet · 15 apr Stjärnledarskap · 7–8 okt Affärsutveckling + Säljstrategi
                  </p>
                </div>
              </li>
            </ul>

            <div className="reveal reveal-d4 mt-10 pt-6 border-t border-[color:var(--border-soft)]">
              <p className="eyebrow-upper mb-4">Personligt för dig</p>
              <ul className="space-y-2 text-[0.95rem] text-ink-soft">
                <li>Startworkshop 4 tim i Stockholm</li>
                <li>3 coachingsamtal à 45 min</li>
                <li>Signal-kanal med Ola och de andra ägarna — löpande</li>
              </ul>
            </div>

            <div className="reveal reveal-d5 mt-10 flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-lora)] font-semibold text-[2.4rem] md:text-[2.8rem] text-[color:var(--marin)] leading-none">
                195 000 kr
              </span>
              <span className="text-[0.85rem] text-muted">max 15 deltagare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
