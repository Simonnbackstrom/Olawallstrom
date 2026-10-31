"use client";

import { useEffect, useRef, useState } from "react";

type Player = {
  setMuted: (m: boolean) => Promise<boolean>;
  setVolume: (v: number) => Promise<number>;
  play: () => Promise<void>;
  pause: () => Promise<void>;
  on: (event: string, cb?: (data: { volume: number; muted?: boolean }) => void) => void;
};

declare global {
  interface Window {
    Vimeo?: {
      Player: new (iframe: HTMLIFrameElement | string) => Player;
    };
  }
}

/*
 * Loads Vimeo's player API once and resolves when window.Vimeo actually exists.
 * (Checking only for the script tag is not enough: it can be present but still loading.)
 */
let vimeoApi: Promise<void> | null = null;
function loadVimeoApi(): Promise<void> {
  if (window.Vimeo) return Promise.resolve();
  vimeoApi ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      vimeoApi = null;
      reject(new Error("Vimeo API kunde inte laddas"));
    };
    document.body.appendChild(script);
  });
  return vimeoApi;
}

const STATS = [
  { num: "650+", label: "Coachade bolagsägare", mobile: true },
  { num: "25 år", label: "Som serieentreprenör", mobile: true, accent: true },
  { num: "8", label: "Egna bolag byggda", mobile: false },
  { num: "100×", label: "Tillväxt hos en kund", mobile: false },
];

export default function StrategyHero() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadVimeoApi()
      .then(() => {
        if (cancelled || !iframeRef.current || !window.Vimeo) return;
        const player = new window.Vimeo.Player(iframeRef.current);
        playerRef.current = player;
        player.on("volumechange", (data) => {
          if (data) setMuted(data.muted ?? data.volume === 0);
        });
        player.on("play", () => setPlaying(true));
        player.on("pause", () => setPlaying(false));
      })
      .catch(() => {
        /* Without the API the video still plays muted; the buttons just do nothing. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  /* The player, created on demand if a click comes before the setup has finished. */
  const getPlayer = (): Player | null => {
    if (!playerRef.current && window.Vimeo && iframeRef.current) {
      playerRef.current = new window.Vimeo.Player(iframeRef.current);
    }
    return playerRef.current;
  };

  const toggleSound = async () => {
    const player = getPlayer();
    if (!player) return;
    try {
      if (muted) {
        await player.setMuted(false);
        await player.setVolume(1);
        await player.play();
        setMuted(false);
      } else {
        await player.setMuted(true);
        setMuted(true);
      }
    } catch {
      /* ignore */
    }
  };

  const togglePlay = async () => {
    const player = getPlayer();
    if (!player) return;
    try {
      if (playing) {
        await player.pause();
      } else {
        await player.play();
      }
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="relative pt-28 md:pt-40 pb-20 md:pb-28 sec-papper overflow-hidden">
      <div className="container-site relative text-center">
        <h1 className="reveal reveal-d1 max-w-4xl mx-auto hyphens-none [word-break:keep-all]">
          Fullt huvud, team som väntar, och allt{" "}
          <em>landar på dig.</em>
        </h1>

        <p className="reveal reveal-d2 mt-7 text-[1.15rem] md:text-[1.25rem] text-ink-soft max-w-2xl mx-auto leading-relaxed">
          För dig som driver ett företag som omsätter mellan 10–50 miljoner och vill växa vidare.
        </p>

        <div className="reveal reveal-d3 mt-12 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(23,59,96,0.3)] ring-1 ring-[color:var(--marin)]/10 bg-[color:var(--marin)]">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1198692854?badge=0&autopause=0&autoplay=1&muted=1&playsinline=1&title=0&byline=0&portrait=0&controls=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="absolute inset-0 w-full h-full"
              title="Ola Wallström om VIP-coachingen"
            />
            {/* Controls in the top corner, so they never cover the subtitles. */}
            <div className="absolute top-3 right-3 md:top-5 md:right-5 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Aktivera ljud" : "Stäng av ljud"}
                aria-pressed={!muted}
                className={`group shrink-0 inline-flex h-10 md:h-11 items-center gap-2 whitespace-nowrap rounded-full pl-3 pr-4 md:pl-3.5 md:pr-5 text-[0.82rem] md:text-[0.88rem] font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 ${
                  muted
                    ? "bg-[color:var(--glod)] shadow-[0_12px_28px_-12px_rgba(242,106,46,0.85)] hover:brightness-105"
                    : "bg-[color:var(--marin)]/60 ring-1 ring-white/25 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.6)] hover:bg-[color:var(--marin)]/80"
                }`}
              >
                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  {muted && <span aria-hidden className="absolute inset-0 rounded-full bg-white/40 animate-ping" />}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="relative">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                    {muted ? (
                      <>
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </>
                    ) : (
                      <>
                        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                        <path d="M18.5 5.5a9 9 0 0 1 0 13" />
                      </>
                    )}
                  </svg>
                </span>
                {muted ? "Aktivera ljud" : "Ljud på"}
              </button>
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pausa video" : "Spela video"}
                className="shrink-0 inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[color:var(--marin)]/60 text-white ring-1 ring-white/25 backdrop-blur-md shadow-[0_12px_28px_-14px_rgba(0,0,0,0.6)] transition duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--marin)]/80"
              >
                {playing ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <rect x="6" y="5" width="4" height="14" rx="1.2" />
                    <rect x="14" y="5" width="4" height="14" rx="1.2" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="translate-x-[1px]">
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="reveal reveal-d4 mt-10 flex flex-col items-center gap-5">
          <a
            href="#boka"
            className="btn-primary !px-9 !py-[18px] !text-[1rem] md:!text-[1.05rem] shadow-[0_14px_32px_-10px_rgba(242,106,46,0.55)] hover:shadow-[0_18px_38px_-10px_rgba(242,106,46,0.65)]"
          >
            Boka kostnadsfritt strategisamtal
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
        </div>

        <dl className="reveal reveal-d5 mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-4xl mx-auto">
          {STATS.map((st) => (
            <div
              key={st.label}
              className={`flex flex-col-reverse justify-end text-center ${
                st.mobile ? "" : "hidden md:flex"
              }`}
            >
              <dt className="mt-3 text-[0.85rem] text-muted">{st.label}</dt>
              <dd
                className={`font-bold text-[2.2rem] md:text-[2.6rem] leading-none ${
                  st.accent ? "text-[color:var(--glod)]" : "text-[color:var(--marin)]"
                }`}
              >
                {st.num}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
