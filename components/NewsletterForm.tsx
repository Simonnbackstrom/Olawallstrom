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
      <div className="rounded-2xl bg-white ring-1 ring-[#E2DDD8] p-6 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22C55E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-3"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
        <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[18px] text-[#0B0E14] mb-1">
          Tack för din anmälan!
        </h3>
        <p className="text-[14px] text-[#0B0E14]/70">
          Du får nästa nyhetsbrev direkt i inkorgen.
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
          className="w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="din@email.se"
          className="w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar..." : "Prenumerera gratis"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMsg || "Något gick fel. Försök igen."}</p>
      )}
      <p className="text-[12px] text-[#6B7280] text-center">
        En artikel i månaden. Avprenumerera när som helst.
      </p>
    </form>
  );
}
