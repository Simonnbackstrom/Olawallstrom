/* Cookie consent stored in the visitor's browser. Shared by the banner and trackers. */

export const CONSENT_STORAGE_KEY = "ow-cookie-consent";
const CONSENT_VERSION = 2;

export type ConsentPrefs = {
  version: number;
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

export function readConsent(): ConsentPrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentPrefs;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(choice: { analytics: boolean }) {
  const prefs: ConsentPrefs = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: choice.analytics,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* storage disabled: the choice is still respected for this session */
  }
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: prefs }));
}
