"use client";

import { usePathname } from "next/navigation";

const CALENDLY_URL = "https://calendly.com/olawallstrom/30min";

/*
 * "Boka strategisamtal" link for shared components (e.g. the footer).
 * On /strategisession the calendar is on the page itself, so it scrolls down to #boka
 * instead of opening Calendly in a new tab.
 */
export default function BookingLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const onStrategy = usePathname() === "/strategisession";
  return onStrategy ? (
    <a href="#boka" className={className}>
      {children}
    </a>
  ) : (
    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
