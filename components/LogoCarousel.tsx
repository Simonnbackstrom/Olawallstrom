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

export default function LogoCarousel({
  heading = "Några av bolagen jag jobbat med",
}: {
  heading?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-sand">
      <div className="container-site text-center">
        <h2 className="reveal inline-block eyebrow-upper mb-10 !border-t-0 !pt-0">
          {heading}
        </h2>
      </div>
      <div className="marquee" aria-label="Kundlogotyper">
        {[0, 1].map((set) => (
          <div className="marquee-track" aria-hidden={set === 1} key={set}>
            {LOGOS.map((logo, i) => (
              <div
                key={`${set}-${i}`}
                className="shrink-0 h-14 md:h-16 flex items-center opacity-60 hover:opacity-100 transition-opacity"
              >
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
