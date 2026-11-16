"use client";

import { useState } from "react";
import Image from "next/image";

/*
 * Ola's video, self-hosted. Nothing is downloaded until the visitor presses play:
 * the cover (photo + play button) is shown first, then swapped for the video.
 */
export default function PrepVideo({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        src={src}
        autoPlay
        controls
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full bg-black"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Spela filmen"
      className="group absolute inset-0 h-full w-full cursor-pointer"
    >
      <Image
        src="/images/ola-kontakt.jpg"
        alt=""
        fill
        sizes="(min-width: 768px) 768px, 100vw"
        className="object-cover object-[50%_28%] opacity-50"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[#0f2742]/90 via-[#0f2742]/25 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[color:var(--glod)] inline-flex items-center justify-center shadow-[0_14px_36px_-8px_rgba(242,106,46,0.85)] transition-transform duration-200 group-hover:scale-105">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden className="ml-1">
            <polygon points="7 4 20 12 7 20 7 4" />
          </svg>
        </span>
      </span>
      <span className="absolute left-4 bottom-4 md:left-6 md:bottom-5 text-left leading-tight">
        <span className="block text-[0.9rem] md:text-[1rem] font-semibold text-white">Ola Wallström</span>
        <span className="block text-[0.78rem] md:text-[0.85rem] text-white/70">Tillväxtcoach · 6 min</span>
      </span>
    </button>
  );
}
