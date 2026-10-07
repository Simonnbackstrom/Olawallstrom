import Image from "next/image";
import Link from "next/link";

export default function QuoteBlock() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F4F0]">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <svg
            aria-hidden
            viewBox="0 0 48 32"
            className="h-10 w-10 md:h-12 md:w-12 text-[#E8500A] mb-8"
            fill="currentColor"
          >
            <path d="M14 32H0L8 0h10l-4 16h4v16zM42 32H28L36 0h10l-4 16h4v16z" />
          </svg>

          <blockquote className="reveal font-[family-name:var(--font-manrope)] font-semibold tracking-tight text-[clamp(22px,3vw,34px)] leading-[1.3] text-[#0B0E14]">
            Det jag uppskattar med Ola är kombinationen av skärpa och värme.
            Han är affärsmässig, konkret och hjälper oss snabbt att se vad som är viktigt.
          </blockquote>

          <div className="reveal reveal-d1 mt-10 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-[#E8500A]/40 bg-[#E8500A]/10 shrink-0">
              <Image
                src="/testimonials/fredrik.jpg"
                alt="Fredrik Birath"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-[family-name:var(--font-manrope)] font-bold text-[16px] text-[#0B0E14]">
                Fredrik Birath
              </div>
              <div className="text-[13.5px] text-[#6B7280]">Beras International</div>
            </div>
          </div>

          <div className="reveal reveal-d2 mt-10">
            <Link
              href="/resultat"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0B0E14] hover:text-[#E8500A] transition-colors"
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
