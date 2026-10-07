type Props = {
  tone?: "dark" | "light";
};

const STATS = [
  { num: "650+", label: "Coachade bolagsägare" },
  { num: "25 år", label: "Som serieentreprenör" },
  { num: "8", label: "Egna bolag byggda" },
  { num: "19 Mkr → 1,9 Mdr", label: "Ett klientresultat" },
];

export default function StatsBand({ tone = "light" }: Props) {
  const isDark = tone === "dark";
  return (
    <section className={`py-16 md:py-20 ${isDark ? "bg-[#0B0E14] text-white" : "bg-[#F7F4F0] text-[#0B0E14]"}`}>
      <div className="container-site">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          {STATS.map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${(i % 5) + 1}`}>
              <dt
                className={`font-[family-name:var(--font-manrope)] font-extrabold leading-tight ${
                  s.num.length > 10 ? "text-[20px] md:text-[24px]" : "text-[36px] md:text-[44px]"
                } ${isDark ? "text-white" : "text-[#0B0E14]"}`}
              >
                {s.num}
              </dt>
              <dd className={`mt-2 text-[13px] md:text-[14px] ${isDark ? "text-white/60" : "text-[#6B7280]"}`}>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
