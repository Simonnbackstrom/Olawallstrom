/*
 * Meta (Facebook) Pixel. Only loaded after the visitor accepts marketing cookies.
 * PageView is tracked site-wide; CompleteRegistration fires on webinar signups
 * from the paid landing page (/webinar).
 */
import { readConsent } from "@/lib/consent";

export const META_PIXEL_ID = "1519376236089915";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let revoked = false;
let lastPageView: string | null = null;

/* Loads the pixel script and runs init once (Meta's standard base code). */
export function loadMetaPixel() {
  if (typeof window === "undefined") return;
  if (window.fbq) {
    if (revoked) {
      window.fbq("consent", "grant");
      revoked = false;
    }
    return;
  }
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", META_PIXEL_ID);
}

/* Tells the pixel to stop sending if the visitor withdraws consent. */
export function revokeMetaPixel() {
  if (!window.fbq) return;
  window.fbq("consent", "revoke");
  revoked = true;
  lastPageView = null;
}

/* One PageView per page, even if React runs the effect twice. */
export function trackMetaPageView(path: string) {
  if (typeof window === "undefined" || !readConsent()?.marketing || lastPageView === path) return;
  loadMetaPixel();
  lastPageView = path;
  window.fbq?.("track", "PageView");
}

/* Sends a standard event, but only with marketing consent. */
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !readConsent()?.marketing) return;
  loadMetaPixel();
  window.fbq?.("track", event, params);
}
