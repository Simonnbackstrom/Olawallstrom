import Link from "next/link";

type Props = {
  heading?: string;
  intro?: string;
  tone?: "dark" | "light" | "orange";
};

export default function CtaBand({
  heading = "Boka ett kostnadsfritt strategisamtal",
  intro = "30 minuter direkt med mig. Oavsett om jag blir rätt mentor för dig eller inte lämnar du samtalet med konkreta insikter om ditt bolag.",
  tone = "dark",
}: Props) {
  const bg =
    tone === "orange"
      ? "bg-[#E8500A] text-white"
      : tone === "light"
      ? "bg-[#F7F4F0] text-[#0B0E14]"
      : "bg-[#0B0E14] text-white";

  const sub =
    tone === "orange" || tone === "dark" ? "text-white/75" : "text-[#0B0E14]/70";

  return (
    <section className={`py-20 md:py-28 ${bg} relative overflow-hidden`}>
      {tone === "dark" && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(232,80,10,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(232,80,10,0.1) 0%, transparent 55%)",
          }}
        />
      )}
      <div className="container-site relative text-center">
        <h2 className="reveal font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(28px,4.2vw,48px)] leading-[1.1] max-w-3xl mx-auto">
          {heading}
        </h2>
        <p className={`reveal reveal-d1 mt-5 text-[17px] md:text-xl leading-relaxed max-w-2xl mx-auto ${sub}`}>
          {intro}
        </p>
        <div className="reveal reveal-d2 mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/kontakt" className="btn-primary">
            Boka strategisamtal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
          <a
            href="https://calendly.com/olawallstrom/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={tone === "dark" || tone === "orange" ? "btn-dark" : "btn-ghost"}
          >
            Hitta en tid direkt
          </a>
        </div>
        <p className={`reveal reveal-d3 mt-6 text-[13px] ${sub}`}>
          Kostnadsfritt · 30 minuter · Direkt med Ola · Inget säljtryck
        </p>
      </div>
    </section>
  );
}
