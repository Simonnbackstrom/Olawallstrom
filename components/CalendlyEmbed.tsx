"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title: string;
};

/*
 * Inline Calendly booking. The iframe src is built at module scope so it is
 * server-rendered and starts fetching on first paint — no round-trip wait for
 * hydration. Calendly's postMessage height event lets the frame grow with the
 * calendar instead of hiding steps behind an inner scrollbar.
 */
export default function CalendlyEmbed({ url, title }: Props) {
  const [height, setHeight] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const u = new URL(url);
  u.searchParams.set("embed_domain", "olawallstrom.com");
  u.searchParams.set("embed_type", "Inline");
  u.searchParams.set("hide_gdpr_banner", "1");
  const src = u.toString();

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const data = e.data as { event?: string; payload?: { height?: string } };
      if (data?.event === "calendly.page_height" && data.payload?.height) {
        const h = parseInt(data.payload.height, 10);
        if (h > 0) {
          setHeight(h);
          setLoaded(true);
        }
        const box = boxRef.current;
        if (box && box.getBoundingClientRect().top < 0) box.scrollIntoView({ block: "start" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative w-full min-h-[1080px] md:min-h-[720px] scroll-mt-24"
      style={height ? { minHeight: 0, height } : undefined}
    >
      {!loaded && (
        <div aria-hidden className="absolute inset-0 flex items-center justify-center bg-papper">
          <div className="w-full max-w-md px-6">
            <div className="h-5 w-32 mx-auto rounded bg-[color:var(--marin)]/10 animate-pulse" />
            <div className="mt-3 h-3 w-48 mx-auto rounded bg-[color:var(--marin)]/10 animate-pulse" />
            <div className="mt-8 grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded bg-[color:var(--marin)]/5 animate-pulse"
                  style={{ animationDelay: `${(i % 7) * 60}ms` }}
                />
              ))}
            </div>
            <p className="mt-6 text-center text-[0.9rem] text-muted">Kalendern laddas…</p>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        loading="eager"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 block h-full w-full border-0"
      />
      <noscript>
        <a href={url} className="btn-primary">
          Öppna kalendern
        </a>
      </noscript>
    </div>
  );
}
