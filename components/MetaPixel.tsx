"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { ConsentPrefs } from "@/lib/consent";
import { revokeMetaPixel, trackMetaPageView } from "@/lib/metaPixel";

/* Loads the Meta Pixel with marketing consent and tracks a PageView on every route change. */
export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    trackMetaPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const onChange = (e: Event) => {
      const prefs = (e as CustomEvent<ConsentPrefs>).detail;
      if (prefs?.marketing) trackMetaPageView(window.location.pathname);
      else revokeMetaPixel();
    };
    window.addEventListener("cookie-consent-change", onChange);
    return () => window.removeEventListener("cookie-consent-change", onChange);
  }, []);

  return null;
}
