type Props = {
  tone?: "marin" | "papper" | "himmel";
};

const STATS = [
  { num: "650+", label: "Coachade bolagsägare" },
  { num: "25 år", label: "Som serieentreprenör" },
  { num: "8", label: "Egna bolag byggda" },
  { num: "19 Mkr → 1,9 Mdr", label: "Ett klientresultat" },
];

export default function StatsBand({ tone = "himmel" }: Props) {
  const sectionClass =
    tone === "marin" ? "sec-marin" : tone === "papper" ? "sec-papper" : "sec-himmel";
  const isDark = tone === "marin";
  const numColor = isDark ? "text-[color:var(--papper)]" : "text-[color:var(--marin)]";
  const labelColor = isDark ? "text-[color:var(--papper)]/65" : "text-muted";

  return (
    <section className={`py-16 md:py-20 ${sectionClass}`}>
      <div className="container-site">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 text-center">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${(i % 5) + 1}`}>
              <dt
                className={`font-[family-name:var(--font-lora)] font-semibold leading-tight ${
                  s.num.length > 10 ? "text-[1.3rem] md:text-[1.55rem]" : "text-[2.4rem] md:text-[3rem]"
                } ${numColor}`}
              >
                {s.num}
              </dt>
              <dd className={`mt-3 text-[0.85rem] md:text-[0.9rem] tracking-wide ${labelColor}`}>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
