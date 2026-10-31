import Link from "next/link";

const SPOKES = [
  { n: 1, title: "Mental klarhet", desc: "Vart du är på väg, och varför." },
  { n: 2, title: "Ledarskap", desc: "Att göra andra bättre än dig." },
  { n: 3, title: "Affärsutveckling", desc: "Att sälja värdet ni faktiskt skapar." },
  { n: 4, title: "Försäljning", desc: "Att börja där förtroendet redan finns." },
];

function Wheel() {
  const size = 420;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 180;
  const innerR = 72;
  const centerR = 58;
  const gap = 2;

  const sector = (startDeg: number, endDeg: number) => {
    const toRad = (d: number) => ((d - 90) * Math.PI) / 180;
    const x1 = cx + outerR * Math.cos(toRad(startDeg));
    const y1 = cy + outerR * Math.sin(toRad(startDeg));
    const x2 = cx + outerR * Math.cos(toRad(endDeg));
    const y2 = cy + outerR * Math.sin(toRad(endDeg));
    const xi1 = cx + innerR * Math.cos(toRad(endDeg));
    const yi1 = cy + innerR * Math.sin(toRad(endDeg));
    const xi2 = cx + innerR * Math.cos(toRad(startDeg));
    const yi2 = cy + innerR * Math.sin(toRad(startDeg));
    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${xi1} ${yi1} A ${innerR} ${innerR} 0 0 0 ${xi2} ${yi2} Z`;
  };

  // Four quadrants, number position matches the pptx: 1 top-right, 2 bottom-right, 3 bottom-left, 4 top-left
  const quadrants = [
    { n: 1, start: 0 + gap, end: 90 - gap, labelAngle: 45 },
    { n: 2, start: 90 + gap, end: 180 - gap, labelAngle: 135 },
    { n: 3, start: 180 + gap, end: 270 - gap, labelAngle: 225 },
    { n: 4, start: 270 + gap, end: 360 - gap, labelAngle: 315 },
  ];

  const labelR = (outerR + innerR) / 2;
  const toRad = (d: number) => ((d - 90) * Math.PI) / 180;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-full"
      role="img"
      aria-labelledby="tillvaxthjulet-title"
    >
      <title id="tillvaxthjulet-title">
        Tillväxthjulet. Fyra ekrar runt dig som ägare.
      </title>

      {/* Open Glöd ring — opening at the top, matching the logo */}
      <path
        d={`M ${cx + (outerR + 22) * Math.cos(toRad(10))} ${cy + (outerR + 22) * Math.sin(toRad(10))}
            A ${outerR + 22} ${outerR + 22} 0 1 1 ${cx + (outerR + 22) * Math.cos(toRad(-10))} ${cy + (outerR + 22) * Math.sin(toRad(-10))}`}
        fill="none"
        stroke="#F26A2E"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Olablå quadrants */}
      {quadrants.map((q) => {
        const lx = cx + labelR * Math.cos(toRad(q.labelAngle));
        const ly = cy + labelR * Math.sin(toRad(q.labelAngle));
        return (
          <g key={q.n}>
            <path d={sector(q.start, q.end)} fill="#2A62A0" />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="var(--font-heading), ui-serif, Georgia, serif"
              fontWeight="600"
              fontSize="38"
              fill="#F7F3EC"
            >
              {q.n}
            </text>
          </g>
        );
      })}

      {/* Centrum: Du */}
      <circle cx={cx} cy={cy} r={centerR} fill="#173B60" />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-heading), ui-serif, Georgia, serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="34"
        fill="#F7F3EC"
      >
        Du
      </text>
    </svg>
  );
}

export default function TillvaxthjuletSection() {
  return (
    <section className="py-[var(--section-y)] sec-papper">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl sec-marin">
          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] items-stretch">
            {/* MOBIL: rubriken över hjulet */}
            <div className="lg:hidden text-center px-6 pt-10">
              <span className="reveal eyebrow-upper mx-auto">Metoden</span>
              <h2 className="reveal mt-4 text-[color:var(--papper)]">
                Tillväxthjulet. <em>Inifrån och ut.</em>
              </h2>
            </div>

            <div className="reveal relative flex items-center justify-center px-6 py-6 md:p-14 lg:min-h-[640px]">
              <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[460px] aspect-square">
                <Wheel />
              </div>
              <div
                aria-hidden
                className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[color:var(--marin)] pointer-events-none"
              />
            </div>

            <div className="relative px-6 pb-10 md:p-14 flex flex-col justify-center text-center">
              <span className="hidden lg:inline-block reveal eyebrow-upper mx-auto">Metoden</span>

              <h2 className="hidden lg:block reveal mt-5 text-[color:var(--papper)]">
                Tillväxthjulet. <em>Inifrån och ut.</em>
              </h2>

              <p className="reveal reveal-d2 lg:mt-6 text-[1.05rem] md:text-[1.1rem] text-[color:var(--papper)]/80 leading-relaxed max-w-xl mx-auto">
                Metoden jag jobbar efter, oavsett om vi möts i Ägarklivet eller
                VIP-coaching. Du står i mitten, fyra ekrar bär bolaget framåt.
                När en eker är svag skakar hela hjulet.
              </p>

              <ul className="reveal reveal-d3 mt-8 grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
                {SPOKES.map((s) => (
                  <li
                    key={s.n}
                    className="flex gap-3 items-start rounded-xl bg-white/[0.04] p-4 border border-white/10"
                  >
                    <span
                      aria-hidden
                      className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--olabla)] font-[family-name:var(--font-heading)] font-semibold text-[1rem] text-[color:var(--papper)]"
                    >
                      {s.n}
                    </span>
                    <div className="min-w-0">
                      <div className="font-[family-name:var(--font-heading)] font-semibold text-[1rem] text-[color:var(--papper)] leading-tight">
                        {s.title}
                      </div>
                      <div className="mt-1 text-[0.9rem] text-[color:var(--papper)]/70 leading-snug">
                        {s.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="reveal reveal-d4 mt-10 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="https://calendly.com/olawallstrom/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Boka kostnadsfritt strategisamtal
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
                <Link
                  href="/agarklivet"
                  className="inline-block py-2.5 text-[0.95rem] font-semibold text-[color:var(--papper)]/90 hover:text-[color:var(--glod)] transition-colors"
                >
                  Så ser metoden ut i Ägarklivet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
