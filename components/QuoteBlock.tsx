import Image from "next/image";
import Link from "next/link";

export default function QuoteBlock() {
  return (
    <section className="py-[var(--section-y)] sec-sand">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          {/* Open-circle motif as quote mark */}
          <svg
            aria-hidden
            viewBox="0 0 80 80"
            className="h-14 w-14 mb-8 text-[color:var(--glod)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          >
            <path d="M 40 10 A 30 30 0 1 1 15 60" />
          </svg>

          <blockquote className="reveal font-[family-name:var(--font-lora)] italic font-medium text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.35] text-[color:var(--marin)]">
            Det jag uppskattar med Ola är kombinationen av skärpa och värme. Han är
            konkret och hjälper oss snabbt att se vad som faktiskt är viktigt.
          </blockquote>

          <div className="reveal reveal-d1 mt-10 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full overflow-hidden bg-[color:var(--glod-dim)] shrink-0">
              <Image
                src="/testimonials/fredrik.jpg"
                alt="Fredrik Birath"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-[family-name:var(--font-raleway)] font-bold text-[1rem] text-[color:var(--marin)]">
                Fredrik Birath
              </div>
              <div className="text-[0.85rem] text-muted">Beras International</div>
            </div>
          </div>

          <div className="reveal reveal-d2 mt-10">
            <Link
              href="/resultat"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--marin)] hover:text-[color:var(--glod)] transition-colors"
            >
              Fler kundberättelser
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
