import { PREP_BREVO_FORM } from "@/lib/strategyPrep";

/*
 * A strategy call was booked: add the person to the Brevo list "Strategisamtal bokade"
 * through the Brevo form, so the Brevo automation sends the prep email.
 */
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

  const { firstName, email } = payload;
  if (
    (firstName !== undefined && (typeof firstName !== "string" || firstName.length > 200)) ||
    typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const body = new FormData();
  body.set("FIRSTNAME", (firstName ?? "").trim());
  body.set("EMAIL", email.trim());
  body.set("email_address_check", "");
  body.set("locale", "en");

  try {
    const response = await fetch(`${PREP_BREVO_FORM}?isAjax=1`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    // Brevo can answer success:false even with HTTP 200, so check the JSON.
    const result = await response.json();
    if (!response.ok || result?.success !== true) {
      return Response.json({ ok: false }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
