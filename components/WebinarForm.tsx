"use client";

import { useState } from "react";

export default function WebinarForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data);

    try {
      const res = await fetch("/api/webinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Något gick fel");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Något gick fel");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-papper p-8 md:p-10 border border-white/10">
        <div className="mb-5 h-12 w-12 rounded-full bg-[color:var(--glod-dim)] inline-flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--glod)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mb-3 text-[color:var(--marin)]">Tack. Du är anmäld.</h3>
        <p className="text-[1rem] text-ink-soft">
          Jag mejlar Zoom-länken samma morgon som webinaret. Kommer du inte den dagen
          skickar jag även en inspelning efteråt.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-papper p-6 md:p-8 border border-white/10"
    >
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
        <div>
          <label
            htmlFor="webinar-name"
            className="block text-[0.82rem] font-semibold text-[color:var(--marin)] mb-2 tracking-wide uppercase"
          >
            Namn
          </label>
          <input
            id="webinar-name"
            name="name"
            type="text"
            required
            placeholder="För- och efternamn"
            className="w-full rounded-xl border border-[color:var(--border-soft)] bg-white px-4 py-3 text-[1rem] text-ink focus:outline-none focus:border-[color:var(--glod)]"
          />
        </div>
        <div>
          <label
            htmlFor="webinar-email"
            className="block text-[0.82rem] font-semibold text-[color:var(--marin)] mb-2 tracking-wide uppercase"
          >
            Mejl
          </label>
          <input
            id="webinar-email"
            name="email"
            type="email"
            required
            placeholder="du@dittbolag.se"
            className="w-full rounded-xl border border-[color:var(--border-soft)] bg-white px-4 py-3 text-[1rem] text-ink focus:outline-none focus:border-[color:var(--glod)]"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-5 w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Anmäler..." : "Anmäl mig till webinaret"}
        {status !== "loading" && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        )}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{errorMsg || "Något gick fel. Försök igen."}</p>
      )}
      <p className="mt-4 text-[0.8rem] text-muted">
        Jag använder bara mejlen för att skicka Zoom-länken och eventuell inspelning.
        Inga listor, inga spamflöden.
      </p>
    </form>
  );
}
