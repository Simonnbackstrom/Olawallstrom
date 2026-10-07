import Image from "next/image";

const LOGOS = [
  { src: "/logos/logo-rals.png", alt: "Räls & Markservice AB" },
  { src: "/logos/logo-gavle.png", alt: "Gävle Ventilationsteknik AB" },
  { src: "/logos/logo-safestep.png", alt: "Safestep" },
  { src: "/logos/logo-belatchew.png", alt: "Belatchew Arkitekter" },
  { src: "/logos/logo-ezelius.png", alt: "Ezelius Elektriska" },
  { src: "/logos/logo-pmab.png", alt: "PMAB" },
  { src: "/logos/logo-needvisuals.png", alt: "Need Visuals" },
  { src: "/logos/logo-mediateknik.png", alt: "Mediateknik" },
  { src: "/logos/logo-wolfbuilder.png", alt: "Wolfbuilder" },
  { src: "/logos/logo-viredo.svg", alt: "ViRedo" },
];

export default function LogoCarousel({ heading = "Några av de bolag jag coachat" }: { heading?: string }) {
  return (
    <section className="py-16 md:py-20 bg-[#F7F4F0]">
      <div className="container-site">
        <h2 className="reveal text-center text-[11px] font-bold uppercase tracking-[3px] text-[#6B7280] mb-10">
          {heading}
        </h2>
      </div>
      <div className="marquee" aria-label="Kundlogotyper">
        {[0, 1].map((set) => (
          <div className="marquee-track" aria-hidden={set === 1} key={set}>
            {LOGOS.map((logo, i) => (
              <div key={`${set}-${i}`} className="shrink-0 h-14 md:h-16 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={set === 0 ? logo.alt : ""}
                  width={160}
                  height={64}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
