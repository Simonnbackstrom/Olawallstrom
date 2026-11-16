import { MAX_PER_SPOKE, SPOKES } from "@/lib/strategyPrep";

/*
 * The visitor's growth wheel (like "Ditt hjul" in the Tillväxthjulet PDF):
 * four spokes, 0 in the centre and MAX_PER_SPOKE at the edge.
 */
export default function GrowthWheel({ scores }: { scores: Record<string, number> }) {
  const size = 320;
  const c = size / 2;
  const r = 112;
  // Spoke 1 at the top, then clockwise: right, bottom, left (same as the PDF).
  const angles = [-90, 0, 90, 180];
  const point = (i: number, v: number) => {
    const a = (angles[i] * Math.PI) / 180;
    const d = (Math.max(v, 0.25) / MAX_PER_SPOKE) * r;
    return [c + Math.cos(a) * d, c + Math.sin(a) * d];
  };
  const shape = SPOKES.map((s, i) => point(i, scores[s.id] ?? 0).join(",")).join(" ");
  const labelPos = [
    { x: c, y: 18, anchor: "middle" },
    { x: size - 4, y: c + 4, anchor: "end" },
    { x: c, y: size - 8, anchor: "middle" },
    { x: 4, y: c + 4, anchor: "start" },
  ] as const;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[340px] mx-auto" role="img" aria-label="Ditt hjul">
      {[1, 2, 3, 4].map((ring) => (
        <circle
          key={ring}
          cx={c}
          cy={c}
          r={(ring / 4) * r}
          fill={ring % 2 ? "rgba(23,59,96,0.035)" : "transparent"}
          stroke="rgba(23,59,96,0.12)"
          strokeWidth={ring === 4 ? 1.5 : 1}
        />
      ))}
      {angles.map((_, i) => {
        const [x, y] = point(i, MAX_PER_SPOKE);
        return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke="rgba(23,59,96,0.15)" />;
      })}
      <polygon points={shape} fill="rgba(242,106,46,0.22)" stroke="var(--glod)" strokeWidth={2.5} strokeLinejoin="round" />
      {SPOKES.map((s, i) => {
        const [x, y] = point(i, scores[s.id] ?? 0);
        return <circle key={s.id} cx={x} cy={y} r={5} fill="var(--glod)" stroke="white" strokeWidth={2} />;
      })}
      <circle cx={c} cy={c} r={7} fill="var(--marin)" />
      {SPOKES.map((s, i) => (
        <text
          key={s.id}
          x={labelPos[i].x}
          y={labelPos[i].y}
          textAnchor={labelPos[i].anchor}
          fontSize="12.5"
          fontWeight={600}
          fill="var(--marin)"
        >
          {s.n}. {s.title}
        </text>
      ))}
    </svg>
  );
}
