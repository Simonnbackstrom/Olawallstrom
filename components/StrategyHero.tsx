"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Player = {
  setMuted: (m: boolean) => Promise<void>;
  setVolume: (v: number) => Promise<void>;
  play: () => Promise<void>;
  on: (event: string, cb: (data: { volume: number }) => void) => void;
};

declare global {
  interface Window {
    Vimeo?: {
      Player: new (iframe: HTMLIFrameElement | string) => Player;
    };
  }
}

export default function StrategyHero() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const existing = document.querySelector<HTMLScriptElement>('script[data-vimeo="1"]');
    if (existing) {
      Promise.resolve().then(() => setReady(true));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.dataset.vimeo = "1";
    script.onload = () => setReady(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!ready || !iframeRef.current || !window.Vimeo) return;
    const player = new window.Vimeo.Player(iframeRef.current);
    playerRef.current = player;
    player.on("volumechange", (data) => {
      if (data.volume > 0) setMuted(false);
    });
  }, [ready]);

  const unmute = async () => {
    const player = playerRef.current;
    if (!player) return;
    try {
      await player.setMuted(false);
      await player.setVolume(1);
      await player.play();
      setMuted(false);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 sec-papper overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(242,106,46,0.14) 0%, transparent 65%)" }}
      />

      <div className="container-site relative text-center">
        <p className="reveal eyebrow mb-6 justify-center">Kostnadsfritt · 30 minuter</p>

        <h1 className="reveal reveal-d1 max-w-4xl mx-auto">
          Fullt huvud, team som väntar — och allt{" "}
          <em>landar på dig</em>.
        </h1>

        <p className="reveal reveal-d2 mt-7 text-[1.15rem] md:text-[1.25rem] text-ink-soft max-w-2xl mx-auto leading-relaxed">
          För dig som äger ett bolag mellan 10–50 Mkr och kört på autopilot för länge.
          I ett 30-minuters samtal får du konkreta nästa steg — oavsett om vi fortsätter jobba ihop eller inte.
        </p>

        <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/kontakt" className="btn-primary">
            Boka strategisamtal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
          <Link href="/metod" className="btn-ghost">
            Så fungerar metoden
          </Link>
        </div>

        <div className="reveal reveal-d4 mt-14 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(23,59,96,0.3)] ring-1 ring-[color:var(--marin)]/10 bg-[color:var(--marin)]">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1198692854?badge=0&autopause=0&autoplay=1&muted=1&playsinline=1&title=0&byline=0&portrait=0&controls=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="absolute inset-0 w-full h-full"
              title="Ola Wallström – om metoden"
            />
            {muted && (
              <button
                type="button"
                onClick={unmute}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--papper)]/95 backdrop-blur text-[0.85rem] font-semibold text-[color:var(--marin)] shadow-lg hover:bg-[color:var(--papper)] transition"
                aria-label="Aktivera ljud"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
                Aktivera ljud
              </button>
            )}
          </div>
        </div>

        <dl className="reveal reveal-d5 mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto">
          <div className="text-center">
            <dt className="font-[family-name:var(--font-lora)] font-semibold text-[2.2rem] md:text-[2.6rem] text-[color:var(--marin)] leading-none">
              650+
            </dt>
            <dd className="mt-3 text-[0.85rem] text-muted">Coachade bolagsägare</dd>
          </div>
          <div className="text-center">
            <dt className="font-[family-name:var(--font-lora)] font-semibold text-[2.2rem] md:text-[2.6rem] text-[color:var(--marin)] leading-none">
              25 år
            </dt>
            <dd className="mt-3 text-[0.85rem] text-muted">Som serieentreprenör</dd>
          </div>
          <div className="text-center">
            <dt className="font-[family-name:var(--font-lora)] font-semibold text-[2.2rem] md:text-[2.6rem] text-[color:var(--marin)] leading-none">
              8
            </dt>
            <dd className="mt-3 text-[0.85rem] text-muted">Egna bolag byggda</dd>
          </div>
          <div className="text-center">
            <dt className="font-[family-name:var(--font-lora)] italic font-semibold text-[1.4rem] md:text-[1.7rem] text-[color:var(--glod)] leading-tight">
              19 Mkr → 1,9 Mdr
            </dt>
            <dd className="mt-3 text-[0.85rem] text-muted">Ett klientresultat</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
