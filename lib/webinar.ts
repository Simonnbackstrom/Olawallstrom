/** The upcoming webinar. Three live sessions, same content. */
export const WEBINAR = {
  title: "Så växer du från 10 till 50 miljoner, utan att behöva jobba mer",
  tagline: "Mer tillväxt. Mindre slit.",
  sessions: [
    // brevoValue = the option value of WEBINAR_NOVEMBER_2026 in the Brevo form (1 = tis, 2 = ons, 3 = fre).
    { id: "tis", iso: "2026-11-17T08:00:00+01:00", label: "Tisdag 17 november", timeLabel: "08.00-09.00", brevoValue: "1" },
    { id: "ons", iso: "2026-11-18T11:30:00+01:00", label: "Onsdag 18 november", timeLabel: "11.30-12.30", brevoValue: "2" },
    { id: "fre", iso: "2026-11-20T08:00:00+01:00", label: "Fredag 20 november", timeLabel: "08.00-09.00", brevoValue: "3" },
  ],
  /** Primary date for countdown and schema (first session). */
  startISO: "2026-11-17T08:00:00+01:00",
  endISO: "2026-11-17T09:00:00+01:00",
  dateLabel: "17, 18 och 20 november",
  /** Rough span across sessions — individual times live on each session. */
  timeLabel: "Olika tider",
  seats: 100,
  /* Public page for the webinar (organic). Ads use /webinar, see WEBINAR_PATHS. */
  url: "https://olawallstrom.com/live-webinar",
  /*
   * Brevo sign-up forms, one per traffic source. Submitting to them (instead of
   * the API) is what starts the Brevo automation "Webinar - November 2026",
   * which sends the confirmation with the Zoom link for the chosen day.
   * The URLs are public (they're in Brevo's embed code).
   */
  brevoForms: {
    // "(Ads) Webinar: Så växer du från 10 till 50 miljoner – utan att behöva jobba mer" → list #17
    ads: "https://2a8f6d4e.sibforms.com/serve/MUIFAEyRgr9DaSz0ksvOXEbIFnlGXvaoDcZhtb4dD6xiXm6ZVuLKfULmXwyaRFqo_WfQBT_sByaBxrYH_74z9ZD_rfImvsx_G8W5T3KW9o5z5knLyOMpozqkz79ac2itnP45WTHcR-I2BPfCgVu-gkReR_JkPeSqaaHLKBuaL3HSx8D-2bvkrQOqO76njikeWXQ8Yjq1uB8U5_y53A==",
    // "Webinar: Så växer du från 10 till 50 miljoner – utan att behöva jobba mer" → list #16
    organic: "https://2a8f6d4e.sibforms.com/serve/MUIFACRpy86jsgvrHY7uj_eNpiJM4mSRhwJotnB9OLGSe-2pF3wikP_3QKUXrrHFN9qzcKtm-R6UgY43-IaVd6D2X3Kysm13l8pOj1VORL6EuZqSCG2PcnTG1MSgRit4WmQ2QaQhTkX9EBhydnCF0f_00m7knriO2vSIm8z8nBb67dg0AUrwFM6IirSp1CasqFWOsKECc2uOfUS1oA==",
  },
};

/* Where each traffic source lands. Ads: paid campaigns. Organic: site links, newsletters, social. */
export type WebinarSource = "ads" | "organic";
export const WEBINAR_PATHS: Record<WebinarSource, string> = {
  ads: "/webinar",
  organic: "/live-webinar",
};

/** Sends a webinar signup to the Brevo form. Fields match the form's embed code. */
export async function submitToBrevoForm(
  source: WebinarSource,
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    sessionId: string;
    honeypot?: string;
  },
) {
  // The same-origin endpoint can read Brevo's reply. An opaque no-cors response
  // cannot establish whether a registration was accepted.
  const response = await fetch("/api/webinar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source, ...fields }),
  });
  const result = await response.json();
  if (!response.ok || result?.ok !== true) {
    throw new Error("Webinar registration was not confirmed");
  }
}

/** 2026-11-11T09:00:00+01:00 -> 20261111T080000Z */
function utcStamp(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

const CALENDAR_DETAILS = "Live-webinar med Ola Wallström på Zoom. Zoom-länken kommer på mejlen före webinaret.";

function endIsoFor(startIso: string) {
  const d = new Date(startIso);
  d.setHours(d.getHours() + 1);
  return d.toISOString();
}

/** Pick the session matching the given id, fall back to the first one. */
export function sessionForId(id?: string | null) {
  return WEBINAR.sessions.find((s) => s.id === id) ?? WEBINAR.sessions[0];
}

export function googleCalendarUrl(sessionId?: string | null) {
  const s = sessionForId(sessionId);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Webinar: ${WEBINAR.title}`,
    dates: `${utcStamp(s.iso)}/${utcStamp(endIsoFor(s.iso))}`,
    details: `${CALENDAR_DETAILS}\n${WEBINAR.url}`,
    location: "Zoom",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function icsText(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/** Fold lines longer than 75 octets, as the iCalendar spec requires. */
function icsFold(line: string) {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 75) return line;
  const parts: string[] = [];
  let current = "";
  for (const ch of line) {
    const limit = parts.length === 0 ? 75 : 74;
    if (enc.encode(current + ch).length > limit) {
      parts.push(current);
      current = ch;
    } else {
      current += ch;
    }
  }
  parts.push(current);
  return parts.join("\r\n ");
}

/** Calendar file for Outlook, Apple Calendar and others. */
export function webinarIcs(sessionId?: string | null) {
  const s = sessionForId(sessionId);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ola Wallström//Webinar//SV",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:webinar-${utcStamp(s.iso)}@olawallstrom.com`,
    `DTSTAMP:${utcStamp(new Date().toISOString())}`,
    `DTSTART:${utcStamp(s.iso)}`,
    `DTEND:${utcStamp(endIsoFor(s.iso))}`,
    `SUMMARY:${icsText(`Webinar: ${WEBINAR.title}`)}`,
    `DESCRIPTION:${icsText(`${CALENDAR_DETAILS}\n${WEBINAR.url}`)}`,
    "LOCATION:Zoom",
    `URL:${WEBINAR.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(icsFold).join("\r\n") + "\r\n";
}

