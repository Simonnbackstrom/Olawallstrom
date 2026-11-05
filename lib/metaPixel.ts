/*
 * Meta (Facebook) Pixel, loaded for every visitor (decided by the site owner;
 * disclosed in the cookie banner and privacy policy).
 * PageView is tracked site-wide; CompleteRegistration fires on webinar signups
 * from the paid landing page (/webinar).
 */

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

let lastPageView: string | null = null;

/* Loads the pixel script and runs init once (Meta's standard base code). */
export function loadMetaPixel() {
  if (typeof window === "undefined" || window.fbq) return;
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

/* One PageView per page, even if React runs the effect twice. */
export function trackMetaPageView(path: string) {
  if (typeof window === "undefined" || lastPageView === path) return;
  loadMetaPixel();
  lastPageView = path;
  window.fbq?.("track", "PageView");
}

/* Sends a standard event. */
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  loadMetaPixel();
  window.fbq?.("track", event, params);
}
