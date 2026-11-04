"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendForm } from "@/lib/formsubmit";
import { WEBINAR, sessionForId, submitToBrevoForm, type WebinarSource } from "@/lib/webinar";

type Props = {
  /** Render on a dark (marin) background. */
  dark?: boolean;
  /** Which landing page the form is on; decides which Brevo form receives the signup. */
  source: WebinarSource;
};

export default function WebinarSignupForm({ dark = false, source }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>(WEBINAR.sessions[0].id);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const sessionId = String(data.get("datum") || WEBINAR.sessions[0].id);
    const chosen = sessionForId(sessionId);

    try {
      // 1. Brevo form: adds the contact to the webinar list and starts the automation
      //    that emails the confirmation with the Zoom link for the chosen day.
      await submitToBrevoForm(source, { firstName, lastName, email, sessionId: chosen.id });
    } catch {
      setStatus("error");
      setErrorMsg("Kunde inte skicka. Kontrollera din uppkoppling och försök igen.");
      return;
    }

    // 2. Notification to Ola (best effort, the signup itself is already saved in Brevo).
    //    No autoresponse here: the confirmation comes from Brevo.
    try {
      await sendForm(form, {
        subject: `Ny webinaranmälan: ${firstName} ${lastName} (${chosen.label}, ${source === "ads" ? "annons" : "organisk"})`,
      });
    } catch {
      /* ignore */
    }

    router.push("/webinar/anmald");
  };

  const labelTone = dark ? "text-[color:var(--papper)]/80" : "text-[color:var(--marin)]/80";
  const radioInactive = dark
    ? "bg-white/[0.04] ring-white/15 text-[color:var(--papper)]/80 hover:bg-white/[0.08]"
    : "bg-white ring-[color:var(--border-soft)] text-ink hover:border-[color:var(--glod)]/40";
  const radioActive = dark
    ? "bg-[color:var(--glod)]/15 ring-[color:var(--glod)] text-[color:var(--papper)]"
    : "bg-glod-dim ring-[color:var(--glod)] text-[color:var(--marin)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Honeypot: hidden from people, bots fill it in and the API route drops the message. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <fieldset>
        <legend className={`mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] ${labelTone}`}>
          Välj dag
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {WEBINAR.sessions.map((s) => {
            const active = selected === s.id;
            return (
              <label
                key={s.id}
                className={`cursor-pointer rounded-xl ring-1 px-1.5 sm:px-2.5 py-2.5 text-center transition ${
                  active ? radioActive : radioInactive
                }`}
              >
                <input
                  type="radio"
                  name="datum"
                  value={s.id}
                  checked={active}
                  onChange={() => setSelected(s.id)}
                  className="sr-only"
                />
                <span className="block text-[0.68rem] uppercase tracking-[0.1em] opacity-70">
                  {s.label.split(" ")[0]}
                </span>
                <span className="mt-0.5 block font-[family-name:var(--font-heading)] font-semibold text-[1rem] leading-tight whitespace-nowrap">
                  {/* Short month on phones so the date stays on one line. */}
                  <span className="sm:hidden">{s.label.replace(/^\S+\s/, "").replace(/(\d+) (\p{L}{3})\p{L}*/u, "$1 $2")}</span>
                  <span className="hidden sm:inline">{s.label.replace(/^\S+\s/, "")}</span>
                </span>
                <span className="mt-1 block text-[0.72rem] opacity-70 tabular-nums whitespace-nowrap">
                  {s.timeLabel.replace("-", "–")}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-3 grid-cols-2">
        <Field name="firstName" label="Förnamn" autoComplete="given-name" />
        <Field name="lastName" label="Efternamn" autoComplete="family-name" />
        <div className="col-span-2">
          <Field name="email" label="E-post" type="email" autoComplete="email" />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Anmäler..." : "Anmäl mig till kostnadsfritt webinar"}
        {status !== "loading" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        )}
      </button>
      {status === "error" && (
        <p className={`text-sm text-center ${dark ? "text-red-300" : "text-red-600"}`}>
          {errorMsg || "Något gick fel. Försök igen."}
        </p>
      )}
      <p className={`pt-1 text-[0.8rem] leading-[1.65] text-center ${dark ? "text-[color:var(--papper)]/60" : "text-muted"}`}>
        {/* Consent notice: signing up means agreeing to email from olawallstrom.com (agreed with Ola). */}
        I och med min anmälan godkänner jag att få mejl från olawallstrom.com: Zoom-länken, påminnelser och
        tillväxtinspiration. Jag kan när som helst avsluta prenumerationen. Läs mer i{" "}
        <Link
          href="/integritetspolicy"
          className={`underline underline-offset-2 transition-colors ${dark ? "hover:text-[color:var(--papper)]" : "hover:text-[color:var(--marin)]"}`}
        >
          integritetspolicyn
        </Link>
        .
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
  // The page has two signup forms, so ids must be unique per field instance.
  const id = `webinar-${name}-${useId()}`;
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder=" "
        className="peer block h-14 w-full rounded-xl border border-[color:var(--border-soft)] bg-white px-4 pt-6 pb-2 text-[0.98rem] text-ink placeholder-transparent transition focus:outline-none focus:border-[color:var(--glod)] focus:ring-4 focus:ring-[color:var(--glod)]/15"
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
