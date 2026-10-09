import { NextResponse } from "next/server";
import { Resend } from "resend";

type WebinarPayload = {
  name?: string;
  email?: string;
};

export async function POST(req: Request) {
  let body: WebinarPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig JSON" }, { status: 400 });
  }

  const { name, email } = body;

  if (!email || !name) {
    return NextResponse.json({ error: "Fyll i namn och e-post" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "ola@olawallstrom.com";
  const from = process.env.RESEND_FROM_EMAIL || "Webinar <noreply@olawallstrom.com>";

  if (!apiKey) {
    console.warn("RESEND_API_KEY saknas - anmälan loggas men skickas inte.");
    console.log("Ny webinaranmälan:", { name, email });
    return NextResponse.json({ ok: true, note: "logged" });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Ny webinaranmälan - ${name}`,
      html: `
        <h2>Ny anmälan till webinaret</h2>
        <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-post:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Kunde inte spara anmälan" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
