"use client";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function CookieSettingsButton({ className, children }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className={className}
    >
      {children ?? "Cookie-inställningar"}
    </button>
  );
}
