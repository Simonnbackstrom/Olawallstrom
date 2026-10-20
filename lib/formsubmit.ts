/*
 * Forms are delivered by FormSubmit (formsubmit.co), the same setup as the live site.
 * No account or API key: submissions are forwarded to Ola's inbox, and FormSubmit can
 * send an automatic reply to the address in the form's "email" field.
 */
const ENDPOINT = "https://formsubmit.co/ajax/ola@olawallstrom.com";

type Options = {
  /** Subject of the email Ola receives. */
  subject: string;
  /** Plain-text reply sent automatically to the person who filled in the form. */
  autoresponse?: string;
};

export async function sendForm(form: HTMLFormElement, { subject, autoresponse }: Options) {
  const data = new FormData(form);
  data.append("_subject", subject);
  data.append("_template", "table");
  data.append("_captcha", "false");
  if (autoresponse) data.append("_autoresponse", autoresponse);

  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new Error("Kunde inte skicka. Kontrollera din uppkoppling och försök igen.");
  }

  const body = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (!res.ok || body.success === false || body.success === "false") {
    console.error("FormSubmit:", res.status, body.message);
    throw new Error("Något gick fel. Försök igen, eller mejla ola@olawallstrom.com.");
  }
}
