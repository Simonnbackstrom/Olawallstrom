import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Boka strategisamtal",
  description:
    "Boka ett kostnadsfritt 30 minuters strategisamtal med Ola Wallström. Direkt med mig — inget säljtryck.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Boka strategisamtal"
        title={
          <>
            30 minuter som kan ändra <em className="not-italic text-[#E8500A]">riktningen</em> för ditt bolag.
          </>
        }
        intro="Du bokar ett kostnadsfritt strategisamtal direkt med mig. Vi tittar på var ditt bolag står idag och vad som sannolikt bromsar nästa steg. Oavsett om jag blir rätt mentor för dig eller inte går du från samtalet med konkreta insikter."
      />

      <section className="py-16 md:py-24 bg-[#F7F4F0]">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16">
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-[#E2DDD8] aspect-[4/5] bg-[#EDE9E3] mb-6">
                <Image
                  src="/images/ola-kontakt.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mb-4">
                Så här fungerar strategisamtalet
              </h3>
              <ul className="space-y-3">
                {[
                  "Du berättar var bolaget står idag — vinster, utmaningar och mål.",
                  "Vi identifierar den största flaskhalsen just nu.",
                  "Du får konkreta råd att ta med dig direkt.",
                  "Om det känns rätt för oss båda pratar vi om fortsättning.",
                ].map((p, i) => (
                  <li key={p} className="flex gap-3 items-start text-[15px] text-[#0B0E14]/85">
                    <span className="shrink-0 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[#E8500A]/15 text-[#E8500A] font-bold text-[12px]">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white ring-1 ring-[#E2DDD8] p-5">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                  Direkt med mig
                </p>
                <a href="mailto:ola@olawallstrom.com" className="font-[family-name:var(--font-manrope)] font-bold text-[18px] text-[#0B0E14] hover:text-[#E8500A] transition-colors">
                  ola@olawallstrom.com
                </a>
                <p className="text-[13px] text-[#6B7280] mt-3">
                  Vill du hellre bara se mina lediga tider?{" "}
                  <a
                    href="https://calendly.com/olawallstrom/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8500A] font-semibold hover:underline"
                  >
                    Öppna Calendly →
                  </a>
                </p>
              </div>
            </div>

            <div className="reveal reveal-d1">
              <div className="rounded-3xl bg-white ring-1 ring-[#E2DDD8] p-6 md:p-8 shadow-sm">
                <div className="mb-6">
                  <div className="eyebrow mb-2">Formulär</div>
                  <h2 className="font-[family-name:var(--font-manrope)] font-extrabold text-[26px] md:text-[32px] text-[#0B0E14] leading-tight">
                    Boka strategisamtal
                  </h2>
                  <p className="text-[14px] text-[#0B0E14]/70 mt-2">
                    Kostnadsfritt · 30 minuter · Inget säljtryck
                  </p>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
