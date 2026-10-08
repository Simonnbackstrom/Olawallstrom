import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Hör av dig. Jag läser alla meddelanden själv och återkommer så fort jag kan.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Hör av dig. <em>Jag läser allt själv.</em>
          </>
        }
        intro="Vill du prata? Skicka ett meddelande eller boka ett 30-minuters samtal direkt. Oavsett väg landar det hos mig — inte hos en assistent."
      />

      <section className="py-[var(--section-y)] sec-sand">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16">
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] bg-sand mb-8">
                <Image
                  src="/images/ola-kontakt.jpg"
                  alt="Ola Wallström"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mb-5">Så här fungerar samtalet</h3>
              <ul className="space-y-3">
                {[
                  "Du berättar var bolaget står idag — vinster, utmaningar och mål.",
                  "Vi identifierar den största flaskhalsen just nu.",
                  "Du får konkreta råd att ta med dig direkt.",
                  "Om det känns rätt för oss båda pratar vi om fortsättning.",
                ].map((p, i) => (
                  <li key={p} className="flex gap-3 items-start text-[1rem] text-ink">
                    <span className="shrink-0 h-6 w-6 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)] font-bold text-[0.75rem]">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-white border border-[color:var(--border-soft)] p-6">
                <p className="eyebrow-upper mb-3">Direkt med mig</p>
                <a
                  href="mailto:ola@olawallstrom.com"
                  className="font-[family-name:var(--font-lora)] font-semibold text-[1.2rem] text-[color:var(--marin)] hover:text-[color:var(--glod)] transition-colors"
                >
                  ola@olawallstrom.com
                </a>
              </div>
            </div>

            <div className="reveal reveal-d1">
              <div className="rounded-3xl bg-white border border-[color:var(--border-soft)] p-6 md:p-10 shadow-sm">
                <div className="mb-8">
                  <p className="eyebrow mb-3">Formulär</p>
                  <h2>Skriv till mig</h2>
                  <p className="text-[0.95rem] text-ink-soft mt-3">
                    Kostnadsfritt · Direkt med mig · Inget säljtryck
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
