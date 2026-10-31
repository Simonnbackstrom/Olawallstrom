/*
 * Forms are delivered through our Resend-powered /api/send route.
 * The function signature is unchanged so existing form components work as-is.
 */
const ENDPOINT = "/api/send";

type Options = {
  /** Subject of the email Ola receives. */
  subject: string;
  /** Plain-text reply sent automatically to the person who filled in the form. */
  autoresponse?: string;
};

export async function sendForm(form: HTMLFormElement, { subject, autoresponse }: Options) {
  const data = new FormData(form);
  const honeypot = String(data.get("_honey") || "");

  const fields: Record<string, string> = {};
  for (const [key, value] of data.entries()) {
    // Skip internal / honeypot fields and non-string values.
    if (key.startsWith("_")) continue;
    if (typeof value === "string" && value.trim() !== "") {
      fields[key] = value;
    }
  }

  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, fields, autoresponse, honeypot }),
    });
  } catch {
    throw new Error("Kunde inte skicka. Kontrollera din uppkoppling och försök igen.");
  }

  const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (!res.ok || !body.ok) {
    throw new Error(body.error || "Något gick fel. Försök igen, eller mejla ola@olawallstrom.com.");
  }
}
