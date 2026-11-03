import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  subject: string;
  fields: Record<string, string>;
  autoresponse?: string;
  honeypot?: string;
  brevo?: { listKey: string };
};

const FROM = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const TO = process.env.RESEND_TO_EMAIL || "ola@olawallstrom.com";

/*
 * Maps a form's listKey to the Brevo list ID env vars it should be added to.
 * Every env var that is set is used, so a webinar signup lands in the shared
 * webinar list and, if configured, in a list for the chosen day (handy for
 * sending the right reminder and Zoom link per session).
 */
const BREVO_LIST_ENV: Record<string, string[]> = {
  agartipset: ["BREVO_LIST_ID_AGARTIPSET"],
  "webinar-tis": ["BREVO_LIST_ID_WEBINAR", "BREVO_LIST_ID_WEBINAR_TIS"],
  "webinar-ons": ["BREVO_LIST_ID_WEBINAR", "BREVO_LIST_ID_WEBINAR_ONS"],
  "webinar-fre": ["BREVO_LIST_ID_WEBINAR", "BREVO_LIST_ID_WEBINAR_FRE"],
};

async function addToBrevoList(listKey: string, fields: Record<string, string>) {
  const apiKey = process.env.BREVO_API_KEY;
  const envVars = BREVO_LIST_ENV[listKey] ?? [];
  const listIds = envVars
    .map((name) => Number(process.env[name]))
    .filter((id) => Number.isInteger(id) && id > 0);

  if (!apiKey || listIds.length === 0) {
    console.warn(
      `Brevo skipped for listKey="${listKey}": missing BREVO_API_KEY or all of ${envVars.join(", ") || "(unknown listKey)"}.`,
    );
    return;
  }

  const email = (fields.email || "").trim();
  if (!email) return;

  const [firstName, ...rest] = (fields.name || "").trim().split(/\s+/);
  const lastName = rest.join(" ");

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName || undefined,
        LASTNAME: lastName || undefined,
        COMPANY: fields.company || undefined,
      },
      listIds,
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`Brevo signup failed (${res.status}) for ${email}:`, body);
  }
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldsToHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;background:#fafafa;font-weight:600">${esc(k)}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`;
}

function fieldsToText(fields: Record<string, string>) {
  return Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Mejltjänsten är inte konfigurerad. Kontakta oss direkt på ola@olawallstrom.com." },
      { status: 500 },
    );
  }
  const resend = new Resend(apiKey);

  let payload: Payload;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  // Honeypot: real users leave this empty. Bots fill it, we drop silently.
  if (payload.honeypot && payload.honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { fields, autoresponse } = payload;
  if (!payload.subject || !fields || typeof fields !== "object") {
    return NextResponse.json({ error: "Saknar uppgifter." }, { status: 400 });
  }

  // Strip any CR/LF to prevent header injection, trim to a reasonable length.
  const subject = payload.subject.replace(/[\r\n]+/g, " ").slice(0, 200);

  const submitterEmail = typeof fields.email === "string" ? fields.email.trim() : "";

  try {
    // Notification to Ola.
    const notification = await resend.emails.send({
      from: FROM,
      to: TO,
      subject,
      replyTo: submitterEmail || undefined,
      html: fieldsToHtml(fields),
      text: fieldsToText(fields),
    });

    if (notification.error) {
      console.error("Resend notification error:", notification.error);
      return NextResponse.json(
        { error: "Kunde inte skicka mejl. Försök igen eller mejla ola@olawallstrom.com." },
        { status: 502 },
      );
    }

    // Auto-response to the person who filled in the form.
    if (autoresponse && submitterEmail) {
      await resend.emails.send({
        from: FROM,
        to: submitterEmail,
        subject: "Tack för din anmälan",
        text: autoresponse,
      });
    }

    // Best-effort Brevo list signup. Failures are logged but don't fail the form.
    if (payload.brevo?.listKey) {
      try {
        await addToBrevoList(payload.brevo.listKey, fields);
      } catch (err) {
        console.error("Brevo signup threw:", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Send route error:", err);
    return NextResponse.json(
      { error: "Något gick fel. Försök igen eller mejla ola@olawallstrom.com." },
      { status: 500 },
    );
  }
}
