type Props = {
  tone?: "marin" | "papper" | "himmel";
};

const STATS = [
  { num: "650+", label: "Coachade bolagsägare" },
  { num: "25 år", label: "Som serieentreprenör" },
  { num: "8", label: "Egna bolag byggda" },
  { num: "100×", label: "Tillväxt i ett klientcase" },
];

export default function StatsBand({ tone = "himmel" }: Props) {
  const sectionClass =
    tone === "marin" ? "sec-marin" : tone === "papper" ? "sec-papper" : "sec-himmel";
  const isDark = tone === "marin";
  const numColor = isDark ? "text-[color:var(--papper)]" : "text-[color:var(--marin)]";
  const labelColor = isDark ? "text-[color:var(--papper)]/65" : "text-muted";

  return (
    <section className={`py-14 md:py-20 ${sectionClass}`}>
      <div className="container-site">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 max-w-5xl mx-auto text-center">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${(i % 5) + 1} flex flex-col-reverse justify-end`}>
              <dt className={`mt-3 text-[0.85rem] md:text-[0.92rem] ${labelColor}`}>{s.label}</dt>
              <dd
                className={`font-[family-name:var(--font-heading)] font-semibold leading-none whitespace-nowrap text-[2.4rem] md:text-[3rem] ${numColor}`}
              >
                {s.num}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
