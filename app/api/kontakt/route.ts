import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ogiltig JSON" }, { status: 400 });
  }

  const { name, email, phone, company, message } = body;

  if (!name || !email || !phone || !company) {
    return NextResponse.json({ error: "Fyll i alla obligatoriska fält" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "ola@olawallstrom.com";
  const from = process.env.RESEND_FROM_EMAIL || "Ola Wallström <noreply@olawallstrom.com>";

  if (!apiKey) {
    console.warn("RESEND_API_KEY saknas — bokning loggas men skickas inte.");
    console.log("Ny bokningsförfrågan:", { name, email, phone, company, message });
    return NextResponse.json({ ok: true, note: "logged" });
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Ny bokningsförfrågan – olawallstrom.com</h2>
    <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
    <p><strong>Företag:</strong> ${escapeHtml(company)}</p>
    <p><strong>E-post:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Mobil:</strong> ${escapeHtml(phone)}</p>
    ${message ? `<p><strong>Meddelande:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
  `;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Ny bokning – ${name} (${company})`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Kunde inte skicka mejl" }, { status: 500 });
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
