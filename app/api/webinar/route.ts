import { WEBINAR } from "@/lib/webinar";

/** Keep the Brevo form workflow (including its automation), but verify its reply. */
export async function POST(request: Request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ ok: false }, { status: 400 });
  }
  const { source, firstName, lastName, email, sessionId, honeypot } = payload;
  const session = WEBINAR.sessions.find((s) => s.id === sessionId);
  if (
    (source !== "ads" && source !== "organic") ||
    !session ||
    typeof firstName !== "string" || !firstName.trim() || firstName.length > 200 ||
    typeof lastName !== "string" || !lastName.trim() || lastName.length > 200 ||
    typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    (honeypot !== undefined && (typeof honeypot !== "string" || honeypot.trim() !== ""))
  ) {
    // Never return a success for a rejected submission: that would count a conversion.
    return Response.json({ ok: false }, { status: 400 });
  }

  const body = new FormData();
  body.set("FIRSTNAME", firstName.trim());
  body.set("LASTNAME", lastName.trim());
  body.set("EMAIL", email.trim());
  body.set("WEBINAR_NOVEMBER_2026", session.brevoValue);
  body.set("OPT_IN", "1");
  body.set("email_address_check", "");
  body.set("locale", "en");

  try {
    const formUrl = source === "ads" ? WEBINAR.brevoForms.ads : WEBINAR.brevoForms.organic;
    const response = await fetch(`${formUrl}?isAjax=1`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    // Brevo can reject a form with JSON success:false, including on HTTP 200.
    // HTML, redirects to HTML, empty replies and timeouts must also fail closed.
    const result = await response.json();
    if (!response.ok || result?.success !== true) {
      return Response.json({ ok: false }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
