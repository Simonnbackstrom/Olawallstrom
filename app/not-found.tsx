import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center sec-papper overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(242,106,46,0.14) 0%, transparent 65%)" }}
      />

      <div className="container-site relative text-center max-w-2xl">
        <svg
          aria-hidden
          viewBox="0 0 80 80"
          className="h-16 w-16 mx-auto mb-10 text-[color:var(--glod)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        >
          <path d="M 40 10 A 30 30 0 1 1 15 60" />
        </svg>

        <p className="eyebrow mb-6 justify-center">404</p>
        <h1>
          Den här sidan <em>finns inte</em>.
        </h1>
        <p className="mt-6 text-[1.1rem] text-ink-soft leading-relaxed">
          Länken kan vara gammal eller fel. Hoppa tillbaka till starten så hittar du rätt.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Till startsidan
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </Link>
          <Link href="/kontakt" className="btn-ghost">
            Skicka ett meddelande
          </Link>
        </div>
      </div>
    </section>
  );
}
