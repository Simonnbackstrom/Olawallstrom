import Image from "next/image";

type Props = {
  eyebrow?: string;
  heading: React.ReactNode;
  body: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  tone?: "sand" | "papper";
};

export default function PainStory({
  eyebrow = "Jag har varit där du är",
  heading,
  body,
  image,
  tone = "sand",
}: Props) {
  const sectionClass = tone === "sand" ? "sec-sand" : "sec-papper";

  return (
    <section className={`py-[var(--section-y)] ${sectionClass}`}>
      <div className="container-site">
        {image ? (
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal relative order-2 lg:order-1">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-[color:var(--glod)]/15"
              />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--border-soft)] aspect-[4/5] max-w-[460px] mx-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="reveal eyebrow mb-5">{eyebrow}</p>
              <h2 className="reveal reveal-d1">{heading}</h2>
              <div className="reveal reveal-d2 mt-6 space-y-5 text-[1.05rem] text-ink-soft leading-relaxed">
                {body}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <p className="reveal eyebrow mb-5">{eyebrow}</p>
            <h2 className="reveal reveal-d1">{heading}</h2>
            <div className="reveal reveal-d2 mt-6 space-y-5 text-[1.05rem] md:text-[1.1rem] text-ink-soft leading-relaxed">
              {body}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
