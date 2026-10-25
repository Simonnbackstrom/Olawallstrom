"use client";

import Link from "next/link";
import { useState } from "react";
import { sendForm } from "@/lib/formsubmit";

export default function InspirationSignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();

    try {
      await sendForm(form, {
        subject: `Ny prenumerant på Ägartipset: ${name}${company ? `, ${company}` : ""}`,
        autoresponse: [
          "Hej!",
          "",
          "Tack, nu är du med på Ägartipset.",
          "",
          "En gång i månaden får du konkreta tips, verktyg och nya perspektiv på hur du kan växa ditt bolag på ett enkelt, effektivt och roligt sätt.",
          "",
          "Under tiden finns mina samtal i poddar och livesändningar här: https://olawallstrom.com/inspiration",
          "",
          "Vill du sluta få Ägartipset räcker det att mejla ola@olawallstrom.com.",
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
      <div className="text-center py-4">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-glod-dim inline-flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mb-2" style={{ fontSize: "1.25rem" }}>Tack. Du är med.</h3>
        <p className="text-[0.95rem] text-ink-soft">Ägartipset kommer en gång i månaden. Håll utkik i inkorgen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Honeypot: hidden from people, bots fill it in and FormSubmit drops the message. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="name" label="Namn" autoComplete="name" />
        <Field name="email" label="E-post" type="email" autoComplete="email" />
      </div>
      <Field name="company" label="Företag" autoComplete="organization" />
      <label className="flex items-start justify-center gap-2.5 pt-1 text-[0.88rem] text-ink-soft leading-snug cursor-pointer">
        <input
          type="checkbox"
          name="samtycke"
          value="Ja"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--glod)]"
        />
        <span>
          Jag samtycker till att mina uppgifter lagras enligt{" "}
          <Link href="/integritetspolicy" className="font-semibold text-[color:var(--marin)] underline underline-offset-2 hover:text-[color:var(--glod)]">
            integritetspolicyn
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Skickar..." : "Prenumerera"}
        {status !== "loading" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMsg || "Något gick fel. Försök igen."}</p>
      )}
      <p className="pt-1 text-[0.8rem] text-muted text-center">
        En gång i månaden. Avsluta när du vill.
      </p>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
};

/* Input with a label that sits inside the field and floats up on focus or when filled. */
function Field({ name, label, type = "text", autoComplete }: FieldProps) {
  const id = `inspiration-${name}`;
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder=" "
        className="peer block h-14 w-full rounded-xl border border-[color:var(--border-soft)] bg-white px-4 pt-6 pb-2 text-[0.98rem] text-ink placeholder-transparent transition focus:outline-none focus:border-[color:var(--glod)] focus:ring-4 focus:ring-[color:var(--glod)]/10"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[0.75rem] font-semibold text-[color:var(--marin)]/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:font-normal peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-[0.75rem] peer-focus:font-semibold peer-focus:text-[color:var(--glod)]"
      >
        {label}
        <span className="text-[color:var(--glod)]"> *</span>
      </label>
    </div>
  );
}
