type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "light" | "dark";
};

export default function PageHero({ eyebrow, title, intro, tone = "light" }: Props) {
  const isDark = tone === "dark";
  return (
    <section
      className={`relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden ${
        isDark ? "bg-[#0B0E14] text-white" : "bg-[#F7F4F0] text-[#0B0E14]"
      }`}
    >
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(232,80,10,0.22) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(232,80,10,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="container-site relative">
        <div className="max-w-3xl">
          <div className="reveal eyebrow mb-5">{eyebrow}</div>
          <h1 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(32px,5vw,56px)] leading-[1.08]">
            {title}
          </h1>
          {intro && (
            <p className={`reveal reveal-d2 mt-6 text-[17px] md:text-xl leading-relaxed max-w-2xl ${isDark ? "text-white/75" : "text-[#0B0E14]/70"}`}>
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
