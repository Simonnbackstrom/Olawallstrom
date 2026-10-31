/** The upcoming webinar. Three live sessions, same content. */
export const WEBINAR = {
  title: "Så växer du från 10 till 50 miljoner, utan att behöva jobba mer",
  tagline: "Mer tillväxt. Mindre slit.",
  sessions: [
    { id: "tis", iso: "2026-11-17T08:00:00+01:00", label: "Tisdag 17 november", timeLabel: "08.00-09.00" },
    { id: "ons", iso: "2026-11-18T11:30:00+01:00", label: "Onsdag 18 november", timeLabel: "11.30-12.30" },
    { id: "fre", iso: "2026-11-20T08:00:00+01:00", label: "Fredag 20 november", timeLabel: "08.00-09.00" },
  ],
  /** Primary date for countdown and schema (first session). */
  startISO: "2026-11-17T08:00:00+01:00",
  endISO: "2026-11-17T09:00:00+01:00",
  dateLabel: "17, 18 och 20 november",
  /** Rough span across sessions — individual times live on each session. */
  timeLabel: "Olika tider",
  seats: 100,
  url: "https://olawallstrom.com/webinar",
};

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

/** Automatic reply sent to the person who signs up (plain text). */
export function webinarAutoresponse(sessionId?: string | null) {
  const s = sessionForId(sessionId);
  return [
    "Hej!",
    "",
    `Tack för din anmälan till webinaret "${WEBINAR.title}". Din plats är bokad.`,
    "",
    `När: ${s.label} kl. ${s.timeLabel}, live på Zoom.`,
    `Lägg till i kalendern: ${googleCalendarUrl(s.id)}`,
    "",
    "Zoom-länken mejlar jag till dig före webinaret. Självskattningen Tillväxthjulet (PDF) skickar jag också innan vi ses. Gör den gärna på förhand, så ser du direkt vilken av dina fyra ekrar som bromsar mest.",
    "",
    "Kan du inte vara med live? Då får du inspelningen samma eftermiddag. Den går att se i 7 dagar.",
    "",
    "Har du en fråga redan nu? Mejla mig på ola@olawallstrom.com.",
    "",
    "Vi ses,",
    "Ola Wallström",
    "Autentisk affärsutveckling",
  ].join("\n");
}
