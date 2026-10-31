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
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 md:px-5 md:pb-5 animate-cookie-in"
      >
        <div className="mx-auto w-full max-w-xl rounded-2xl bg-[color:var(--papper)] border border-[color:var(--border-soft)] shadow-[0_12px_32px_-16px_rgba(23,59,96,0.4)] md:shadow-[0_16px_40px_-20px_rgba(23,59,96,0.4)] overflow-hidden">
          <div className="h-[3px] w-full bg-gradient-to-r from-[color:var(--glod)] via-[color:var(--glod)] to-[color:var(--olabla)]" />

          <div className="px-4 py-3.5 md:px-5 md:py-4">
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--glod)]/15 text-[color:var(--glod)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
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
                  className="text-[0.98rem] font-[family-name:var(--font-heading)] font-semibold text-[color:var(--marin)] leading-snug"
                >
                  Vi använder kakor.
                </h2>
                <p className="mt-0.5 text-[0.82rem] leading-relaxed text-ink-soft">
                  Nödvändiga kakor behövs för att sajten ska fungera. Du bestämmer resten.{" "}
                  <Link
                    href="/integritetspolicy"
                    className="underline underline-offset-4 text-[color:var(--marin)] hover:text-[color:var(--glod)]"
                  >
                    Läs mer
                  </Link>
                  .
                </p>
              </div>
            </div>

            {showDetails && (
              <div className="mt-3 rounded-xl border border-[color:var(--border-soft)] bg-white divide-y divide-[color:var(--marin)]/[0.08]">
                <label className="flex items-start gap-3 px-3 py-2.5 cursor-not-allowed">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-0.5 h-3.5 w-3.5 accent-[color:var(--glod)]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-[0.85rem] text-[color:var(--marin)]">
                      Nödvändiga
                    </span>
                    <span className="block text-[0.78rem] text-ink-soft leading-snug">
                      Krävs för att sajten ska fungera. Går inte att stänga av.
                    </span>
                  </span>
                  <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                    Alltid på
                  </span>
                </label>

                <label className="flex items-start gap-3 px-3 py-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-0.5 h-3.5 w-3.5 accent-[color:var(--glod)]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-[0.85rem] text-[color:var(--marin)]">
                      Analys & förbättring
                    </span>
                    <span className="block text-[0.78rem] text-ink-soft leading-snug">
                      Anonym statistik så vi kan göra sidan bättre.
                    </span>
                  </span>
                </label>
              </div>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-2 justify-end">
              {!showDetails && (
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="mr-auto text-[0.8rem] font-semibold text-[color:var(--marin)]/70 hover:text-[color:var(--glod)] transition-colors"
                >
                  Anpassa
                </button>
              )}

              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--marin)]/25 bg-white px-3.5 py-1.5 text-[0.82rem] font-semibold text-[color:var(--marin)] hover:border-[color:var(--marin)]/50 hover:text-[color:var(--glod)] transition-colors"
              >
                Endast nödvändiga
              </button>

              {showDetails ? (
                <button
                  type="button"
                  onClick={savePrefs}
                  className="btn-primary !px-4 !py-1.5 !text-[0.82rem]"
                >
                  Spara
                </button>
              ) : (
                <button
                  type="button"
                  onClick={acceptAll}
                  className="btn-primary !px-4 !py-1.5 !text-[0.82rem]"
                >
                  Acceptera alla
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
