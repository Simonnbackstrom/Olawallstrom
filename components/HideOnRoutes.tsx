"use client";

import { usePathname } from "next/navigation";

/*
 * Focused pages (e.g. the webinar warm-up form) hide the site header and footer
 * so visitors aren't tempted to click away before they finish.
 */
export const FOCUS_ROUTES = ["/webinar/uppvarmning"];

export default function HideOnRoutes({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (FOCUS_ROUTES.includes(pathname)) return null;
  return <>{children}</>;
}
