import Link from "next/link";

type Props = {
  heading?: string;
  intro?: string;
  tone?: "marin" | "sand" | "olabla";
};

export default function CtaBand({
  heading = "Boka ett samtal. 30 minuter, direkt med mig.",
  intro = "Inget säljtryck. Oavsett om jag blir rätt mentor för dig eller inte lämnar du samtalet med något konkret att göra på måndag.",
  tone = "marin",
}: Props) {
  const sectionClass =
    tone === "sand" ? "sec-sand" : tone === "olabla" ? "sec-olabla" : "sec-marin";
  const dark = tone !== "sand";
  const sub = dark ? "text-[color:var(--papper)]/75" : "text-ink-soft";
  const secondaryBtn = dark ? "btn-dark-ghost" : "btn-ghost";

  return (
    <section className={`py-[var(--section-y)] ${sectionClass} relative overflow-hidden`}>
      {tone === "marin" && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(242,106,46,0.15) 0%, transparent 55%), radial-gradient(circle at 85% 70%, rgba(220,232,243,0.08) 0%, transparent 55%)",
          }}
        />
      )}

      <div className="container-site relative text-center">
        <h2 className="reveal max-w-3xl mx-auto">{heading}</h2>
        <p className={`reveal reveal-d1 mt-5 text-[1.05rem] md:text-[1.15rem] leading-relaxed max-w-2xl mx-auto ${sub}`}>
          {intro}
        </p>
        <div className="reveal reveal-d2 mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/strategisession" className="btn-primary">
            Boka strategisamtal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
          <Link href="/kontakt" className={secondaryBtn}>
            Skicka ett meddelande
          </Link>
        </div>
        <p className={`reveal reveal-d3 mt-6 text-[0.85rem] ${sub}`}>
          Kostnadsfritt · 30 minuter · Direkt med mig · Inget säljtryck
        </p>
      </div>
    </section>
  );
}
