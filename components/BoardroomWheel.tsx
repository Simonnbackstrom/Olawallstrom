type Marker = { angle: number; type: "session" | "avstamp" | "workshop" };

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAJ", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"];

// 19 Boardroom sessions distributed across the year, excluding WS/avstamp slots
// Angles in degrees, 0 = top (JAN start)
const MARKERS: Marker[] = [
  // Q1 Mental klarhet — avstamp 12 jan, WS 21 jan + 5 sessions
  { angle: 11, type: "avstamp" },
  { angle: 20, type: "workshop" },
  { angle: 35, type: "session" },
  { angle: 50, type: "session" },
  { angle: 65, type: "session" },
  { angle: 80, type: "session" },

  // Q2 Stjärnledarskap — avstamp 6 apr, WS 15 apr + 5 sessions
  { angle: 95, type: "avstamp" },
  { angle: 105, type: "workshop" },
  { angle: 120, type: "session" },
  { angle: 135, type: "session" },
  { angle: 150, type: "session" },
  { angle: 165, type: "session" },

  // Q3 Autentisk affärsutveckling — avstamp 29 jun + 4 sessions
  { angle: 180, type: "avstamp" },
  { angle: 200, type: "session" },
  { angle: 220, type: "session" },
  { angle: 240, type: "session" },

  // Q4 Smart säljstrategi — avstamp 28 sep, WS 7-8 okt + 5 sessions
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
    <section className="py-20 md:py-28 bg-[#F7F4F0]">
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
              {/* Outer light ring */}
              <circle cx="200" cy="200" r={outerR} fill="#F7F4F0" stroke="#E2DDD8" strokeWidth="1" />

              {/* Four quadrants, starting at top (12 o'clock) */}
              {/* Q1 Mental klarhet — top-right (0 to 90°) */}
              <path
                d={`M 200 200 L ${200} ${200 - quadrantR} A ${quadrantR} ${quadrantR} 0 0 1 ${200 + quadrantR} 200 Z`}
                fill="#1C2944"
              />
              {/* Q2 Stjärnledarskap — bottom-right (90 to 180°) */}
              <path
                d={`M 200 200 L ${200 + quadrantR} 200 A ${quadrantR} ${quadrantR} 0 0 1 200 ${200 + quadrantR} Z`}
                fill="#2E6BB8"
              />
              {/* Q3 Autentisk affärsutveckling — bottom-left (180 to 270°) */}
              <path
                d={`M 200 200 L 200 ${200 + quadrantR} A ${quadrantR} ${quadrantR} 0 0 1 ${200 - quadrantR} 200 Z`}
                fill="#E8500A"
              />
              {/* Q4 Smart säljstrategi — top-left (270 to 360°) */}
              <path
                d={`M 200 200 L ${200 - quadrantR} 200 A ${quadrantR} ${quadrantR} 0 0 1 200 ${200 - quadrantR} Z`}
                fill="#FFC9A6"
              />

              {/* Quadrant labels */}
              <g fontFamily="var(--font-manrope), sans-serif" fontWeight="800" textAnchor="middle">
                <text x="275" y="112" fill="#ffffff" fontSize="14">Mental klarhet</text>
                <text x="275" y="128" fill="#ffffff" fontSize="10" fontWeight="500" opacity="0.75">Q1 · jan–mar</text>

                <text x="275" y="275" fill="#ffffff" fontSize="14">Stjärnledarskap</text>
                <text x="275" y="291" fill="#ffffff" fontSize="10" fontWeight="500" opacity="0.75">Q2 · apr–jun</text>

                <text x="125" y="268" fill="#ffffff" fontSize="12">Autentisk</text>
                <text x="125" y="283" fill="#ffffff" fontSize="12">affärsutveckling</text>
                <text x="125" y="299" fill="#ffffff" fontSize="10" fontWeight="500" opacity="0.8">Q3 · jul–sep</text>

                <text x="125" y="112" fill="#0B0E14" fontSize="12">Smart sälj­</text>
                <text x="125" y="127" fill="#0B0E14" fontSize="12">strategi</text>
                <text x="125" y="143" fill="#0B0E14" fontSize="10" fontWeight="500" opacity="0.7">Q4 · okt–dec</text>
              </g>

              {/* Center disc */}
              <circle cx="200" cy="200" r={centerR} fill="#ffffff" stroke="#E2DDD8" strokeWidth="1" />
              <text
                x="200"
                y="195"
                textAnchor="middle"
                fontFamily="var(--font-manrope), sans-serif"
                fontWeight="800"
                fontSize="18"
                fill="#0B0E14"
              >
                Boardroom
              </text>
              <text
                x="200"
                y="214"
                textAnchor="middle"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="10"
                fill="#6B7280"
              >
                2027 · 12 månader
              </text>

              {/* Month labels around the outside */}
              {MONTHS.map((m, i) => {
                const angle = i * 30 + 15;
                const p = polar(angle, outerR + 15);
                return (
                  <text
                    key={m}
                    x={p.x}
                    y={p.y + 3}
                    textAnchor="middle"
                    fontFamily="var(--font-inter), sans-serif"
                    fontSize="9"
                    fontWeight="600"
                    fill="#6B7280"
                    letterSpacing="1"
                  >
                    {m}
                  </text>
                );
              })}

              {/* Markers */}
              {MARKERS.map((m, i) => {
                const p = polar(m.angle, markerR);
                if (m.type === "session") {
                  return <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#0B0E14" />;
                }
                if (m.type === "avstamp") {
                  return (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r="5"
                      fill="none"
                      stroke="#E8500A"
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
                    fill="#2E6BB8"
                    transform={`rotate(45 ${p.x} ${p.y})`}
                  />
                );
              })}
            </svg>
          </div>

          {/* Offer column */}
          <div>
            <p className="reveal eyebrow mb-4">Årshjul 2027</p>
            <h2 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] leading-[1.08] text-[#0B0E14]">
              Ett år. <span className="text-[#E8500A]">Fyra teman.</span>
            </h2>
            <p className="reveal reveal-d2 mt-5 text-[16.5px] text-[#0B0E14]/70 leading-relaxed max-w-md">
              Tolv månader för dig som VD eller ägare — i ett litet rum av erfarna ägare,
              med personligt stöd hela vägen.
            </p>

            <ul className="reveal reveal-d3 mt-8 space-y-5">
              <li className="flex gap-4 items-start">
                <span className="shrink-0 mt-1.5 h-2.5 w-2.5 rounded-full bg-[#0B0E14]" />
                <div>
                  <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[16px] text-[#0B0E14]">
                    19 Boardroom sessions
                  </div>
                  <p className="text-[14.5px] text-[#0B0E14]/70 leading-relaxed mt-0.5">
                    Digitala träffar à ca en timme. Lyft frågor, utmaningar och beslut med andra erfarna ägare.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="shrink-0 mt-1.5 h-3 w-3 rounded-full border-2 border-[#E8500A]" />
                <div>
                  <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[16px] text-[#0B0E14]">
                    4 kvartalsavstamp
                  </div>
                  <p className="text-[14.5px] text-[#0B0E14]/70 leading-relaxed mt-0.5">
                    Frågebatteri + två timmars digital fördjupning. <span className="text-[#0B0E14]/55">12 jan · 6 apr · 29 jun · 28 sep</span>
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="shrink-0 mt-1.5 h-3 w-3 bg-[#2E6BB8] rotate-45" />
                <div>
                  <div className="font-[family-name:var(--font-manrope)] font-extrabold text-[16px] text-[#0B0E14]">
                    4 workshopdagar
                  </div>
                  <p className="text-[14.5px] text-[#0B0E14]/70 leading-relaxed mt-0.5">
                    21 jan Mental klarhet · 15 apr Stjärnledarskap · 7–8 okt Affärsutveckling + Säljstrategi
                  </p>
                </div>
              </li>
            </ul>

            <div className="reveal reveal-d4 mt-8 pt-6 border-t border-[#E2DDD8]">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8500A] mb-3">
                Personligt för dig
              </p>
              <ul className="space-y-1.5 text-[14.5px] text-[#0B0E14]/80">
                <li>Startworkshop 4 tim i Stockholm</li>
                <li>3 coachingsamtal à 45 min</li>
                <li>Signal-kanal med Ola och de andra ägarna — löpande</li>
              </ul>
            </div>

            <div className="reveal reveal-d5 mt-8 flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-manrope)] font-extrabold text-[36px] md:text-[42px] text-[#0B0E14] leading-none">
                195 000 kr
              </span>
              <span className="text-[13px] text-[#6B7280]">max 15 deltagare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
