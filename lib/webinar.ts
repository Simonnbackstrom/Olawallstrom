/** The upcoming webinar. Used by the page, the signup form and the calendar links. */
export const WEBINAR = {
  title: "Så bygger du ett bolag som inte äger dig",
  startISO: "2026-11-11T09:00:00+01:00",
  endISO: "2026-11-11T10:00:00+01:00",
  dateLabel: "Onsdag 11 november",
  timeLabel: "09.00–10.00",
  seats: 100,
  url: "https://olawallstrom.com/webinar",
};

/** 2026-11-11T09:00:00+01:00 -> 20261111T080000Z */
function utcStamp(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

const CALENDAR_DETAILS = "Live-webinar med Ola Wallström på Zoom. Zoom-länken kommer på mejlen före webinaret.";

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Webinar: ${WEBINAR.title}`,
    dates: `${utcStamp(WEBINAR.startISO)}/${utcStamp(WEBINAR.endISO)}`,
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
export function webinarIcs() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ola Wallström//Webinar//SV",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:webinar-${utcStamp(WEBINAR.startISO)}@olawallstrom.com`,
    `DTSTAMP:${utcStamp(new Date().toISOString())}`,
    `DTSTART:${utcStamp(WEBINAR.startISO)}`,
    `DTEND:${utcStamp(WEBINAR.endISO)}`,
    `SUMMARY:${icsText(`Webinar: ${WEBINAR.title}`)}`,
    `DESCRIPTION:${icsText(`${CALENDAR_DETAILS}\n${WEBINAR.url}`)}`,
    "LOCATION:Zoom",
    `URL:${WEBINAR.url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.map(icsFold).join("\r\n") + "\r\n";
}

/** Automatic reply FormSubmit sends to the person who signs up (plain text). */
export function webinarAutoresponse() {
  return [
    "Hej!",
    "",
    `Tack för din anmälan till webinaret "${WEBINAR.title}". Din plats är bokad.`,
    "",
    `När: ${WEBINAR.dateLabel} kl. ${WEBINAR.timeLabel}, live på Zoom.`,
    `Lägg till i kalendern: ${googleCalendarUrl()}`,
    "",
    "Zoom-länken mejlar jag till dig före webinaret. Bolagsdiagnosen skickar jag också till dig innan vi ses, gör den gärna före så får du ut mer av frågestunden.",
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
