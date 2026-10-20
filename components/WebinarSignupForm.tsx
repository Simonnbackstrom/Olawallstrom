"use client";

import { useId, useState } from "react";
import { sendForm } from "@/lib/formsubmit";
import { WEBINAR, googleCalendarUrl, webinarAutoresponse, webinarIcs } from "@/lib/webinar";

type Props = {
  /** Render on a dark (marin) background. */
  dark?: boolean;
};

export default function WebinarSignupForm({ dark = false }: Props) {
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
        subject: `Ny webinaranmälan: ${name} (${WEBINAR.dateLabel})`,
        autoresponse: webinarAutoresponse(),
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
      <div className="rounded-2xl bg-white px-7 py-9 text-center">
        <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-glod-dim inline-flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--glod)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mb-3">Tack. Du är anmäld.</h3>
        <p className="text-[1rem] text-ink-soft max-w-sm mx-auto">
          {WEBINAR.dateLabel} kl. {WEBINAR.timeLabel}. Bekräftelsen ligger i din mejl, och
          Zoom-länken får du före webinaret. Hittar du inget mejl, titta i skräpposten.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <a href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
            Lägg till i Google Kalender
          </a>
          <button type="button" onClick={downloadIcs} className="btn-ghost justify-center">
            Ladda ner kalenderfil
          </button>
        </div>
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
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Anmäler..." : "Anmäl mig till webinaret"}
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
        Jag använder bara din e-post för Zoom-länken och inspelningen. Inga listor.
      </p>
    </form>
  );
}

/** Calendar file for Outlook and Apple Calendar, made in the browser. */
function downloadIcs() {
  const blob = new Blob([webinarIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "webinar-ola-wallstrom.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
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
