"use client";

import { useRef, useState } from "react";
import { sendForm } from "@/lib/formsubmit";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import { MAX_PER_SPOKE, SCALE, SPOKES } from "@/lib/strategyPrep";
import GrowthWheel from "@/components/GrowthWheel";

type Answers = Record<string, string>;
const key = (spokeId: string, i: number) => `${spokeId}-${i}`;
const ORDER = SPOKES.flatMap((s) => s.statements.map((_, i) => key(s.id, i)));

const inputClass =
  "w-full rounded-xl bg-papper px-4 py-3.5 text-[1rem] text-ink ring-1 ring-[color:var(--marin)]/10 placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--glod)]/60 transition";

/* Self-assessment before the strategy call. Answers are emailed to Ola via /api/send. */
export default function StrategyPrepForm({
  initialName = "",
  initialEmail = "",
}: {
  /* Prefilled from the confirmation-email link (?name=…&email=…). */
  initialName?: string;
  initialEmail?: string;
}) {
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const rows = useRef<Record<string, HTMLDivElement | null>>({});
  const contactRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  const total = ORDER.length;
  const answered = Object.keys(answers).length;
  const done = answered === total;
  const spokeScore = (id: string) =>
    SPOKES.find((s) => s.id === id)!.statements.reduce((sum, _, i) => sum + Number(answers[key(id, i)] ?? 0), 0);
  const scores = Object.fromEntries(SPOKES.map((s) => [s.id, spokeScore(s.id)]));

  // Answering moves the visitor to the next open question, so it feels like a quick tap-through.
  const answer = (k: string, value: string) => {
    const next = { ...answers, [k]: value };
    setAnswers(next);
    // A new answer clears an earlier "answer all questions first" message.
    if (status === "error") {
      setStatus("idle");
      setErrorMsg(null);
    }
    if (answers[k] !== undefined) return;
    const nextKey = ORDER.find((o) => next[o] === undefined);
    const target = nextKey ? rows.current[nextKey] : contactRef.current;
    window.setTimeout(() => target?.scrollIntoView({ behavior: "smooth", block: "center" }), 250);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!done) {
      setStatus("error");
      setErrorMsg(`Svara på alla ${total} frågor först.`);
      const firstOpen = ORDER.find((o) => answers[o] === undefined);
      if (firstOpen) rows.current[firstOpen]?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("loading");
    setErrorMsg(null);
    try {
      await sendForm(e.currentTarget, { subject: `Inför strategisamtal: ${name.trim()}` });
      trackMetaCustomEvent("StrategyPrepSubmitted", { content_name: "Inför strategisamtal" });
      setStatus("success");
      window.setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Något gick fel. Försök igen.");
    }
  };

  if (status === "success") {
    return (
      <div ref={topRef} className="scroll-mt-6 rounded-[28px] bg-white p-6 sm:p-10 shadow-[0_30px_70px_-45px_rgba(23,59,96,0.55)]">
        <div className="text-center">
          <p className="eyebrow-upper text-[color:var(--glod)]">Resultat</p>
          <h3 className="mt-3 text-balance" style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.3rem)" }}>
            Ditt hjul
          </h3>
          <p className="mt-3 max-w-md mx-auto text-ink-soft leading-relaxed text-pretty">
            Tack, {name.trim().split(/\s+/)[0]}. Ju rundare och större ditt hjul blir, desto jämnare rullar bolaget.
          </p>
        </div>
        <div className="mt-8">
          <GrowthWheel scores={scores} />
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto">
          {SPOKES.map((s) => (
            <li key={s.id} className="rounded-2xl bg-papper px-4 py-3">
              <span className="block text-[0.82rem] text-ink-soft">{s.n}. {s.title}</span>
              <span className="block font-[family-name:var(--font-heading)] text-[1.35rem] text-[color:var(--marin)] tabular-nums">
                {scores[s.id]}
                <span className="text-[0.9rem] text-ink-soft"> / {MAX_PER_SPOKE}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-md mx-auto text-center text-[1rem] leading-relaxed text-ink text-pretty">
          Jag går igenom dina svar innan vi ses, så tittar vi på hjulet tillsammans.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {/* Progress stays visible while scrolling: one segment per question. */}
      <div className="sticky top-0 z-20 -mx-4 px-4 pt-3 pb-3 mb-6 bg-[color:var(--sand)]/90 backdrop-blur-md">
        <div className="flex items-center justify-between text-[0.85rem]">
          <span className="font-semibold text-[color:var(--marin)]">
            {done ? "Klart, ett steg kvar" : `Fråga ${Math.min(answered + 1, total)} av ${total}`}
          </span>
          <span className="text-ink-soft">0 · 1 · 2</span>
        </div>
        <div className="mt-2 grid grid-cols-8 gap-1">
          {ORDER.map((k) => (
            <span
              key={k}
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                answers[k] !== undefined ? "bg-[color:var(--glod)]" : "bg-[color:var(--marin)]/12"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {SPOKES.map((s) => {
          const spokeDone = s.statements.every((_, i) => answers[key(s.id, i)] !== undefined);
          return (
            <fieldset key={s.id} className="rounded-[24px] bg-white p-5 sm:p-7 shadow-[0_24px_60px_-45px_rgba(23,59,96,0.55)]">
              <legend className="sr-only">{s.title}</legend>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-[color:var(--glod)]">
                    Eker {s.n} av {SPOKES.length}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-heading)] text-[1.45rem] leading-tight text-[color:var(--marin)]">
                    {s.title}
                  </p>
                </div>
                {spokeDone && (
                  <span className="mt-1 h-8 w-8 shrink-0 rounded-full bg-[color:var(--glod)] text-white inline-flex items-center justify-center" aria-hidden>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="rounded-2xl bg-papper px-4 py-3">
                  <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-ink-soft">Gammalt</p>
                  <p className="mt-1 font-[family-name:var(--font-heading)] italic text-[0.95rem] leading-snug text-ink text-pretty">{s.old}</p>
                </div>
                <div className="rounded-2xl bg-[color:var(--marin)] px-4 py-3">
                  <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-[color:var(--papper)]/70">Nytt</p>
                  <p className="mt-1 font-[family-name:var(--font-heading)] text-[0.95rem] leading-snug text-white text-pretty">{s.neww}</p>
                </div>
              </div>

              <div className="mt-5 space-y-6">
                {s.statements.map((text, i) => {
                  const k = key(s.id, i);
                  return (
                    <div
                      key={k}
                      ref={(el) => {
                        rows.current[k] = el;
                      }}
                    >
                      <p className="text-[1.02rem] leading-relaxed text-ink text-pretty">{text}</p>
                      {/* Segmented control: one pill, three options. */}
                      <div role="radiogroup" aria-label={text} className="mt-3 grid grid-cols-3 gap-1 rounded-full bg-papper p-1">
                        {SCALE.map((o) => {
                          const checked = answers[k] === o.value;
                          return (
                            <label
                              key={o.value}
                              className={`cursor-pointer select-none rounded-full py-2.5 text-center text-[1rem] font-semibold tabular-nums transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[color:var(--glod)]/60 ${
                                checked
                                  ? "bg-[color:var(--glod)] text-white shadow-[0_8px_18px_-10px_rgba(242,106,46,0.9)]"
                                  : "text-[color:var(--marin)]/75 hover:text-[color:var(--marin)] hover:bg-white"
                              }`}
                            >
                              <input
                                type="radio"
                                className="sr-only"
                                name={`${s.title}: ${text}`}
                                value={o.value}
                                checked={checked}
                                onChange={() => answer(k, o.value)}
                              />
                              {o.value}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <span className="text-[0.9rem] font-semibold text-[color:var(--marin)]">Summa {s.title.toLowerCase()}</span>
                <span className="min-w-[84px] rounded-xl ring-2 ring-[color:var(--glod)]/70 px-3 py-1.5 text-right font-[family-name:var(--font-heading)] text-[1.05rem] text-[color:var(--marin)] tabular-nums">
                  {spokeDone ? spokeScore(s.id) : ""} / {MAX_PER_SPOKE}
                </span>
              </div>
              {/* Spoke total, included in Ola's email. */}
              <input type="hidden" name={`Summa ${s.title}`} value={`${spokeScore(s.id)} / ${MAX_PER_SPOKE}`} />
            </fieldset>
          );
        })}
      </div>

      <div ref={contactRef} className="mt-5 rounded-[24px] bg-[color:var(--marin)] p-5 sm:p-7 text-[color:var(--papper)] shadow-[0_30px_70px_-40px_rgba(23,59,96,0.8)]">
        <p className="font-[family-name:var(--font-heading)] text-[1.45rem] !text-white">Se ditt hjul</p>
        <p className="mt-1 text-[0.95rem] text-[color:var(--papper)]/75">Dina svar går bara till Ola.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <input name="name" required autoComplete="name" placeholder="Namn" aria-label="Namn" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
          <input name="email" type="email" required autoComplete="email" placeholder="E-post" aria-label="E-post" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          <textarea
            name="Meddelande"
            rows={2}
            placeholder="Något mer jag borde veta innan vi ses? (valfritt)"
            aria-label="Meddelande till Ola (valfritt)"
            className={`${inputClass} sm:col-span-2 resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || !name.trim() || !email.trim()}
          className="btn-primary mt-5 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Skickar…" : "Skicka"}
          {status !== "loading" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>
        {errorMsg && (
          <p role="alert" className="mt-3 text-center text-[0.9rem] text-[#ffb59a]">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
