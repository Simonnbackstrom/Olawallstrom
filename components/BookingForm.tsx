"use client";

import { useState } from "react";

export default function BookingForm() {
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
      const res = await fetch("/api/kontakt", {
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
      <div className="rounded-2xl bg-white border border-[color:var(--border-soft)] p-8 md:p-10 text-center">
        <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-[color:var(--glod-dim)] inline-flex items-center justify-center">
          <svg
            width="28"
            height="28"
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
        <h3 className="mb-3">Tack. Jag hör av mig.</h3>
        <p className="text-[1rem] text-ink-soft max-w-md mx-auto">
          Jag läser alla meddelanden själv och återkommer så fort jag kan — oftast samma dag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Namn *</span>
          <input
            name="name"
            type="text"
            required
            placeholder="För- och efternamn"
            className="field-input"
          />
        </label>
        <label className="block">
          <span className="field-label">Företag *</span>
          <input
            name="company"
            type="text"
            required
            placeholder="Företagsnamn"
            className="field-input"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">E-post *</span>
          <input
            name="email"
            type="email"
            required
            placeholder="din@email.se"
            className="field-input"
          />
        </label>
        <label className="block">
          <span className="field-label">Mobil *</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="070 123 45 67"
            className="field-input"
          />
        </label>
      </div>
      <label className="block">
        <span className="field-label">Berätta kort (frivilligt)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Vad är det du vill prata om?"
          className="field-textarea"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar..." : "Boka samtal"}
        {status !== "loading" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMsg || "Något gick fel. Försök igen."}</p>
      )}
      <p className="text-[0.8rem] text-muted flex items-center gap-1.5 justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Dina uppgifter stannar hos mig. Ingen tredjepart, ingen lista.
      </p>
    </form>
  );
}
