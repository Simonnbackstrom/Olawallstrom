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

export default function Hero() {
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
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,80,10,0.18) 0%, transparent 70%)" }}
      />

      <div className="container-site relative text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8500A]/35 bg-[#E8500A]/5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8500A] mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8500A]" />
          Mentor för bolagsägare 10–50 Mkr
        </div>

        <h1 className="reveal reveal-d1 font-[family-name:var(--font-manrope)] font-extrabold tracking-tight text-[clamp(32px,5.4vw,64px)] leading-[1.08] text-[#0B0E14] max-w-4xl mx-auto">
          Fullt huvud, team som väntar och allt{" "}
          <em className="not-italic text-[#E8500A] relative inline-block">
            landar på dig
            <svg
              aria-hidden
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              className="absolute left-0 -bottom-2 w-full h-3 text-[#E8500A]/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M4 8 C 80 2, 160 10, 296 4" />
            </svg>
          </em>
          .
        </h1>

        <p className="reveal reveal-d2 mt-7 text-[18px] md:text-xl text-[#0B0E14]/70 max-w-2xl mx-auto leading-relaxed">
          För dig som äger ett bolag mellan 10–50 Mkr och kört på autopilot för länge.
          Jag hjälper dig bygga ett självgående bolag — på sex månader känner du skillnaden.
        </p>

        <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/kontakt" className="btn-primary">
            Boka kostnadsfritt strategisamtal
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
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5 bg-[#0B0E14]">
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
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur text-[13px] font-semibold text-[#0B0E14] shadow-lg hover:bg-white transition"
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

        <dl className="reveal reveal-d5 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
          <div className="text-center">
            <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] md:text-[40px] text-[#0B0E14] leading-none">
              650+
            </dt>
            <dd className="mt-2 text-[13px] text-[#6B7280]">Coachade bolagsägare</dd>
          </div>
          <div className="text-center">
            <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] md:text-[40px] text-[#0B0E14] leading-none">
              25 år
            </dt>
            <dd className="mt-2 text-[13px] text-[#6B7280]">Som serieentreprenör</dd>
          </div>
          <div className="text-center">
            <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[32px] md:text-[40px] text-[#0B0E14] leading-none">
              8
            </dt>
            <dd className="mt-2 text-[13px] text-[#6B7280]">Bolag jag byggt själv</dd>
          </div>
          <div className="text-center">
            <dt className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] md:text-[28px] text-[#E8500A] leading-tight">
              19 Mkr → 1,9 Mdr
            </dt>
            <dd className="mt-2 text-[13px] text-[#6B7280]">Ett klientresultat</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
