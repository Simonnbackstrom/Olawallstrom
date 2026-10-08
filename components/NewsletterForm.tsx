"use client";

import { useState } from "react";

export default function NewsletterForm() {
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
      const res = await fetch("/api/nyhetsbrev", {
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
      <div className="rounded-2xl bg-white border border-[color:var(--border-soft)] p-6 text-center">
        <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[color:var(--glod-dim)] inline-flex items-center justify-center">
          <svg
            width="22"
            height="22"
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
        <h3 className="text-[1.15rem] mb-1">Tack. Du är med.</h3>
        <p className="text-[0.9rem] text-ink-soft">
          Nästa brev landar i din inkorg i veckan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
        <input
          name="name"
          type="text"
          required
          placeholder="Namn"
          className="field-input"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="din@email.se"
          className="field-input"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar..." : "Prenumerera"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMsg || "Något gick fel. Försök igen."}</p>
      )}
      <p className="text-[0.78rem] text-muted text-center">
        En tanke i veckan. Avprenumerera när du vill.
      </p>
    </form>
  );
}
