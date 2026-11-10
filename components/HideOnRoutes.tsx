"use client";

import { usePathname } from "next/navigation";

/*
 * The webinar funnel hides site navigation and uses a compact legal footer.
 */
export const FOCUS_ROUTES = [
  "/webinar",
  "/live-webinar",
  "/webinar/anmald",
  "/webinar/tack",
  "/webinar/uppvarmning",
];

export default function HideOnRoutes({ children, fallback = null }: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const pathname = usePathname();
  if (FOCUS_ROUTES.includes(pathname)) return <>{fallback}</>;
  return <>{children}</>;
}
