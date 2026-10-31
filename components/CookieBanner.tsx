"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ow-cookie-consent";
const STORAGE_VERSION = 1;

type Prefs = {
  version: number;
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Prefs;
    if (parsed.version !== STORAGE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writePrefs(analytics: boolean) {
  const prefs: Prefs = {
    version: STORAGE_VERSION,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* storage disabled — the choice is still respected for this session */
  }
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: prefs }),
  );
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = readPrefs();
    if (!existing) {
      // Delay slightly so the banner doesn't flash in on first paint.
      const t = setTimeout(() => setOpen(true), 350);
      return () => clearTimeout(t);
    }
    setAnalytics(existing.analytics);
  }, []);

  useEffect(() => {
    const onReopen = () => {
      const existing = readPrefs();
      setAnalytics(existing?.analytics ?? false);
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener("open-cookie-settings", onReopen);
    return () => window.removeEventListener("open-cookie-settings", onReopen);
  }, []);

  if (!mounted || !open) return null;

  const acceptAll = () => {
    writePrefs(true);
    setOpen(false);
    setShowDetails(false);
  };

  const rejectAll = () => {
    writePrefs(false);
    setOpen(false);
    setShowDetails(false);
  };

  const savePrefs = () => {
    writePrefs(analytics);
    setOpen(false);
    setShowDetails(false);
  };

  return (
    <>
      <div
        aria-hidden
        className="hidden md:block fixed inset-0 z-[90] bg-[color:var(--marin)]/15 backdrop-blur-[1px] pointer-events-none"
      />

      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 md:px-6 md:pb-6 animate-cookie-in"
      >
        <div className="mx-auto w-full max-w-3xl rounded-2xl md:rounded-3xl bg-[color:var(--papper)] border border-[color:var(--border-soft)] shadow-[0_12px_32px_-16px_rgba(23,59,96,0.4)] md:shadow-[0_20px_60px_-20px_rgba(23,59,96,0.45)] overflow-hidden">
          <div className="h-1 md:h-1.5 w-full bg-gradient-to-r from-[color:var(--glod)] via-[color:var(--glod)] to-[color:var(--olabla)]" />

          <div className="px-4 py-4 md:p-8">
            <div className="flex items-start gap-3 md:gap-4">
              <span
                aria-hidden
                className="shrink-0 inline-flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-[color:var(--glod)]/15 text-[color:var(--glod)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="md:w-[22px] md:h-[22px]"
                >
                  <path d="M21.6 12.3a9 9 0 1 1-9.9-9.9 5 5 0 0 0 5 5 5 5 0 0 0 4.9 4.9z" />
                  <circle cx="8.5" cy="14" r="1" fill="currentColor" />
                  <circle cx="14" cy="16.5" r="1" fill="currentColor" />
                  <circle cx="11" cy="10" r="1" fill="currentColor" />
                  <circle cx="16" cy="11.5" r="0.8" fill="currentColor" />
                </svg>
              </span>

              <div className="min-w-0 flex-1">
                <h2
                  id="cookie-banner-title"
                  className="text-[1rem] md:text-[1.25rem] font-[family-name:var(--font-heading)] font-semibold text-[color:var(--marin)] leading-snug"
                >
                  Vi använder kakor.
                </h2>
                <p className="mt-1 md:mt-2 text-[0.85rem] md:text-[0.95rem] leading-relaxed text-ink-soft">
                  <span className="md:hidden">
                    Nödvändiga kakor behövs för att sajten ska fungera. Du bestämmer resten.{" "}
                  </span>
                  <span className="hidden md:inline">
                    Nödvändiga kakor behövs för att sajten ska fungera. Övriga kakor hjälper
                    oss förstå hur sidan används, så vi kan göra den bättre. Du bestämmer.{" "}
                  </span>
                  <Link
                    href="/integritetspolicy"
                    className="underline underline-offset-4 text-[color:var(--marin)] hover:text-[color:var(--glod)]"
                  >
                    <span className="md:hidden">Läs mer</span>
                    <span className="hidden md:inline">Läs mer i integritetspolicyn</span>
                  </Link>
                  .
                </p>
              </div>
            </div>

            {showDetails && (
              <div className="mt-6 rounded-2xl border border-[color:var(--border-soft)] bg-white divide-y divide-[color:var(--marin)]/[0.08]">
                <label className="flex items-start gap-4 p-4 md:p-5 cursor-not-allowed">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 h-4 w-4 accent-[color:var(--glod)]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-[0.98rem] text-[color:var(--marin)]">
                      Nödvändiga
                    </span>
                    <span className="block mt-0.5 text-[0.88rem] text-ink-soft leading-relaxed">
                      Krävs för att sajten ska fungera — t.ex. att komma ihåg ditt val av
                      kakor. Går inte att stänga av.
                    </span>
                  </span>
                  <span className="shrink-0 text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                    Alltid på
                  </span>
                </label>

                <label className="flex items-start gap-4 p-4 md:p-5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[color:var(--glod)]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-[0.98rem] text-[color:var(--marin)]">
                      Analys & förbättring
                    </span>
                    <span className="block mt-0.5 text-[0.88rem] text-ink-soft leading-relaxed">
                      Hjälper oss se hur sidan används — anonymt och aggregerat — så vi kan
                      göra den bättre.
                    </span>
                  </span>
                </label>
              </div>
            )}

            <div className="mt-4 md:mt-6 grid grid-cols-2 gap-2 md:flex md:flex-row-reverse md:gap-3 md:items-center">
              {showDetails ? (
                <button
                  type="button"
                  onClick={savePrefs}
                  className="btn-primary w-full md:w-auto !py-2.5 !text-[0.9rem] md:!text-[1rem]"
                >
                  Spara
                  <span className="hidden md:inline">&nbsp;mina val</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={acceptAll}
                  className="btn-primary w-full md:w-auto !py-2.5 !text-[0.9rem] md:!text-[1rem]"
                >
                  Acceptera<span className="hidden md:inline">&nbsp;alla</span>
                </button>
              )}

              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--marin)]/25 bg-white px-4 md:px-5 py-2.5 text-[0.9rem] md:text-[0.95rem] font-semibold text-[color:var(--marin)] hover:border-[color:var(--marin)]/50 hover:text-[color:var(--glod)] transition-colors w-full md:w-auto"
              >
                <span className="md:hidden">Endast nödvändiga</span>
                <span className="hidden md:inline">Endast nödvändiga</span>
              </button>

              {!showDetails && (
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="col-span-2 inline-flex items-center justify-center px-4 py-1.5 md:py-2.5 text-[0.85rem] md:text-[0.9rem] font-semibold text-[color:var(--marin)]/70 hover:text-[color:var(--glod)] transition-colors md:mr-auto"
                >
                  Anpassa val
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cookie-in {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-cookie-in {
          animation: cookie-in 0.35s cubic-bezier(0.2, 0.8, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-cookie-in {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
