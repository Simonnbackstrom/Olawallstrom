import JsonLd from "./JsonLd";

type Item = { q: string; a: React.ReactNode };

type Props = {
  eyebrow?: string | null;
  heading: React.ReactNode;
  intro?: string;
  items: Item[];
  tone?: "sand" | "papper";
  ctaLabel?: string;
  ctaHref?: string;
  ctaSub?: string;
  /** Center question and answer text inside each item. */
  centered?: boolean;
  /** Leave out the booking button under the list (when a CTA section follows directly). */
  hideCta?: boolean;
  /** Stable id used in the emitted FAQPage JSON-LD schema id. */
  schemaId?: string;
};

type NodeLike = { props?: { children?: unknown } };

function nodeToText(node: unknown): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in (node as NodeLike)) {
    return nodeToText((node as NodeLike).props?.children);
  }
  return "";
}

export default function PageFAQ({
  eyebrow = "Vanliga frågor",
  heading,
  intro,
  items,
  tone = "papper",
  ctaLabel = "Boka 30 min med Ola",
  ctaHref = "https://calendly.com/olawallstrom/30min",
  ctaSub = "Kostnadsfritt. Inget säljtryck.",
  centered = false,
  hideCta = false,
  schemaId = "faq",
}: Props) {
  const sectionClass = tone === "sand" ? "sec-sand" : "sec-papper";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: nodeToText(item.a).replace(/\s+/g, " ").trim(),
      },
    })),
  };

  return (
    <section className={`py-[var(--section-y)] ${sectionClass}`}>
      <JsonLd id={`${schemaId}-faq-schema`} data={faqSchema} />
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            {eyebrow && <p className="reveal eyebrow mb-5 justify-center">{eyebrow}</p>}
            <h2 className="reveal reveal-d1">{heading}</h2>
            {intro && (
              <p className="reveal reveal-d2 mt-6 text-[1rem] text-ink-soft leading-relaxed">
                {intro}
              </p>
            )}
          </div>

          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={item.q} className={`reveal reveal-d${(i % 4) + 1}`}>
                <details className="group rounded-2xl bg-white border border-[color:var(--border-soft)] open:border-[color:var(--glod)]/40 transition-colors">
                  <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between gap-4">
                    {centered && <span aria-hidden className="shrink-0 w-8" />}
                    <span className={`font-[family-name:var(--font-heading)] font-semibold text-[1.05rem] md:text-[1.1rem] text-[color:var(--marin)] leading-snug${centered ? " flex-1 text-center" : ""}`}>
                      {item.q}
                    </span>
                    <span className="shrink-0 h-8 w-8 inline-flex items-center justify-center rounded-full bg-[color:var(--glod-dim)] text-[color:var(--glod)] transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <div className={`px-6 pb-6 pt-0 text-[0.98rem] text-ink-soft leading-relaxed ${centered ? "text-center md:px-14" : ""}`}>
                    {item.a}
                  </div>
                </details>
              </li>
            ))}
          </ul>

          {!hideCta && (
          <div className="mt-12 text-center">
            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-primary"
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
            {ctaSub && (
              <p className="mt-4 text-[0.85rem] text-muted">{ctaSub}</p>
            )}
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
