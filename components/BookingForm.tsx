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
      <div className="rounded-2xl bg-white ring-1 ring-[#E2DDD8] p-8 text-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22C55E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-4"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
        <h3 className="font-[family-name:var(--font-manrope)] font-extrabold text-[22px] text-[#0B0E14] mb-2">
          Tack, jag hör av mig!
        </h3>
        <p className="text-[15px] text-[#0B0E14]/70">
          Jag eller mitt team kontaktar dig inom kort för att hitta en tid som passar.
        </p>
        <a
          href="https://calendly.com/olawallstrom/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          Boka tid direkt i Calendly
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-semibold text-[#0B0E14]/80">Namn *</span>
          <input
            name="name"
            type="text"
            required
            placeholder="För- och efternamn"
            className="mt-1.5 w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-semibold text-[#0B0E14]/80">Företag *</span>
          <input
            name="company"
            type="text"
            required
            placeholder="Företagsnamn"
            className="mt-1.5 w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-semibold text-[#0B0E14]/80">E-post *</span>
          <input
            name="email"
            type="email"
            required
            placeholder="din@email.se"
            className="mt-1.5 w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-semibold text-[#0B0E14]/80">Mobil *</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="070 123 45 67"
            className="mt-1.5 w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-[13px] font-semibold text-[#0B0E14]/80">Berätta kort (frivilligt)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Vad är den största utmaningen i bolaget just nu?"
          className="mt-1.5 w-full rounded-xl bg-white ring-1 ring-[#E2DDD8] px-4 py-3 text-[15px] text-[#0B0E14] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E8500A]/50 resize-none"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar..." : "Boka kostnadsfritt strategisamtal →"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMsg || "Något gick fel. Försök igen."}</p>
      )}
      <p className="text-[12px] text-[#6B7280] flex items-center gap-1.5 justify-center">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Ingen spam — dina uppgifter delas aldrig med tredje part.
      </p>
    </form>
  );
}
