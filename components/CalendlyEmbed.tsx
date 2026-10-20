"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Props = {
  url: string;
  title: string;
};

const noopSubscribe = () => () => {};

/*
 * Inline Calendly booking. Calendly reports its content height via postMessage when
 * embed_domain/embed_type are set, so the frame grows with the calendar instead of
 * hiding times and the booking form behind an inner scrollbar (mostly on mobile).
 */
export default function CalendlyEmbed({ url, title }: Props) {
  // The host is only known in the browser; on the server this stays null.
  const host = useSyncExternalStore(noopSubscribe, () => window.location.host, () => null);
  const [height, setHeight] = useState<number | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  let src: string | null = null;
  if (host) {
    const u = new URL(url);
    u.searchParams.set("embed_domain", host);
    u.searchParams.set("embed_type", "Inline");
    u.searchParams.set("hide_gdpr_banner", "1");
    src = u.toString();
  }

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const data = e.data as { event?: string; payload?: { height?: string } };
      if (data?.event === "calendly.page_height" && data.payload?.height) {
        const h = parseInt(data.payload.height, 10);
        if (h > 0) setHeight(h);
        // Like Calendly's own widget: when a step change shrinks the page, bring the calendar back into view.
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
      {src ? (
        <iframe src={src} title={title} className="absolute inset-0 block h-full w-full border-0" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-[0.95rem] text-muted">
          Kalendern laddas...
        </div>
      )}
      <noscript>
        <a href={url} className="btn-primary">
          Öppna kalendern
        </a>
      </noscript>
    </div>
  );
}
