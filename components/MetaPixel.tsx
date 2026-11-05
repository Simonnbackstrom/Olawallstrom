"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackMetaPageView } from "@/lib/metaPixel";

/* Loads the Meta Pixel for every visitor and tracks a PageView on every route change. */
export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    trackMetaPageView(pathname);
  }, [pathname]);

  return null;
}
