type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "papper" | "marin" | "sand";
};

export default function PageHero({ eyebrow, title, intro, tone = "papper" }: Props) {
  const sectionClass =
    tone === "marin" ? "sec-marin" : tone === "sand" ? "sec-sand" : "sec-papper";
  const isDark = tone === "marin";

  return (
    <section
      className={`relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden ${sectionClass}`}
    >
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none opacity-70"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(242,106,46,0.22) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(242,106,46,0.14) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-8%] w-[460px] h-[460px] rounded-full pointer-events-none opacity-50"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(220,232,243,0.08) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(42,98,160,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="container-site relative">
        <div className="max-w-3xl">
          <p className="reveal eyebrow mb-6">{eyebrow}</p>
          <h1 className="reveal reveal-d1">{title}</h1>
          {intro && (
            <p
              className={`reveal reveal-d2 mt-6 text-[1.1rem] md:text-[1.2rem] leading-relaxed max-w-2xl ${
                isDark ? "text-[color:var(--papper)]/80" : "text-ink-soft"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
