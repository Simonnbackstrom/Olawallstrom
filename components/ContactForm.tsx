"use client";

import { useState } from "react";
import { sendForm } from "@/lib/formsubmit";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const name = String(new FormData(form).get("name") || "").trim();

    try {
      await sendForm(form, {
        subject: `Nytt meddelande från ${name}, olawallstrom.com`,
        autoresponse: [
          "Hej!",
          "",
          "Tack för ditt meddelande. Jag läser det själv och återkommer så snart jag kan.",
          "",
          "Vill du hellre prata direkt? Boka 30 minuter med mig här: https://calendly.com/olawallstrom/30min",
          "",
          "Vänliga hälsningar,",
          "Ola Wallström",
          "Autentisk affärsutveckling",
        ].join("\n"),
      });
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
        <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-glod-dim inline-flex items-center justify-center">
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
          Jag läser alla meddelanden själv och återkommer så fort jag kan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3">
      {/* Honeypot: hidden from people, bots fill it in and FormSubmit drops the message. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="name" label="Namn" autoComplete="name" />
        <Field name="company" label="Företag" autoComplete="organization" />
        <Field name="email" label="E-post" type="email" autoComplete="email" />
        <Field name="phone" label="Mobil" type="tel" autoComplete="tel" />
      </div>
      <Field name="message" label="Vad vill du prata om?" optional textarea />
      <div aria-hidden className="flex-1" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar..." : "Skicka meddelande"}
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
      <p className="pt-1 flex items-center justify-center gap-1.5 text-[0.8rem] leading-[1.65] text-muted">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        Dina uppgifter stannar hos mig. Ingen tredjepart, ingen lista.
      </p>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
  textarea?: boolean;
};

/* Input with a label that sits inside the field and floats up on focus or when filled. */
function Field({ name, label, type = "text", autoComplete, optional = false, textarea = false }: FieldProps) {
  const id = `kontakt-${name}`;
  const base =
    "peer block w-full rounded-xl border border-[color:var(--border-soft)] bg-white px-4 pt-6 pb-2 text-[0.98rem] text-ink placeholder-transparent transition focus:outline-none focus:border-[color:var(--glod)] focus:ring-4 focus:ring-[color:var(--glod)]/10";
  const labelText = (
    <>
      {label}
      {optional ? <span className="text-muted/80"> (frivilligt)</span> : <span className="text-[color:var(--glod)]"> *</span>}
    </>
  );

  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={name} rows={4} placeholder=" " className={`${base} resize-none`} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={!optional}
          autoComplete={autoComplete}
          placeholder=" "
          className={`${base} h-14`}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[0.75rem] font-semibold text-[color:var(--marin)]/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:font-normal peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-[0.75rem] peer-focus:font-semibold peer-focus:text-[color:var(--glod)]"
      >
        {labelText}
      </label>
    </div>
  );
}
