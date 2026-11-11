"use client";

import { useEffect } from "react";
import { trackMetaCustomEvent } from "@/lib/metaPixel";

/*
 * The warm-up questionnaire is Brevo's own embedded form, so we can't hook its submit.
 * Brevo shows #success-message when it accepted the answers; that's when we tell Meta.
 */
export default function WarmupFormTracker() {
  useEffect(() => {
    let sent = false;
    const check = () => {
      const msg = document.getElementById("success-message");
      if (!sent && msg && getComputedStyle(msg).display !== "none") {
        sent = true;
        trackMetaCustomEvent("WarmupFormSubmitted", { content_name: "Uppvärmningsformulär webinar" });
        observer.disconnect();
      }
    };
    const observer = new MutationObserver(check);
    const root = document.getElementById("sib-form-container");
    if (root) observer.observe(root, { attributes: true, subtree: true, attributeFilter: ["style", "class"] });
    return () => observer.disconnect();
  }, []);

  return null;
}
