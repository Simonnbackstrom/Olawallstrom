import { MAX_PER_SPOKE, SPOKES } from "@/lib/strategyPrep";

/*
 * The visitor's growth wheel (like "Ditt hjul" in the Tillväxthjulet PDF):
 * four spokes, 0 in the centre and MAX_PER_SPOKE at the edge.
 */
export default function GrowthWheel({ scores }: { scores: Record<string, number> }) {
  // Wider than tall, so the side labels sit outside the wheel instead of on top of it.
  const width = 440;
  const height = 320;
  const cx = width / 2;
  const cy = height / 2;
  const r = 112;
  // Spoke 1 at the top, then clockwise: right, bottom, left (same as the PDF).
  const angles = [-90, 0, 90, 180];
  const point = (i: number, v: number) => {
    const a = (angles[i] * Math.PI) / 180;
    const d = (Math.max(v, 0.25) / MAX_PER_SPOKE) * r;
    return [cx + Math.cos(a) * d, cy + Math.sin(a) * d];
  };
  const shape = SPOKES.map((s, i) => point(i, scores[s.id] ?? 0).join(",")).join(" ");
  const labelPos = [
    { x: cx, y: 22, anchor: "middle" },
    { x: cx + r + 10, y: cy + 4, anchor: "start" },
    { x: cx, y: height - 10, anchor: "middle" },
    { x: cx - r - 10, y: cy + 4, anchor: "end" },
  ] as const;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[460px] mx-auto" role="img" aria-label="Ditt hjul">
      {[1, 2, 3, 4].map((ring) => (
        <circle
          key={ring}
          cx={cx}
          cy={cy}
          r={(ring / 4) * r}
          fill={ring % 2 ? "rgba(23,59,96,0.035)" : "transparent"}
          stroke="rgba(23,59,96,0.12)"
          strokeWidth={ring === 4 ? 1.5 : 1}
        />
      ))}
      {angles.map((_, i) => {
        const [x, y] = point(i, MAX_PER_SPOKE);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(23,59,96,0.15)" />;
      })}
      <polygon points={shape} fill="rgba(242,106,46,0.22)" stroke="var(--glod)" strokeWidth={2.5} strokeLinejoin="round" />
      {SPOKES.map((s, i) => {
        const [x, y] = point(i, scores[s.id] ?? 0);
        return <circle key={s.id} cx={x} cy={y} r={5} fill="var(--glod)" stroke="white" strokeWidth={2} />;
      })}
      <circle cx={cx} cy={cy} r={7} fill="var(--marin)" />
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
