import { NextResponse } from "next/server";

/*
 * Returns the next 3 available Calendly slots for the strategisamtal.
 *
 * Env requirements:
 *   CALENDLY_TOKEN       - Personal Access Token from Calendly
 *   CALENDLY_EVENT_URI   - The event type URI, e.g.
 *                          https://api.calendly.com/event_types/XXXXXXXXXXXXXXXX
 *
 * Without these the route returns { slots: [] } so the UI gracefully hides.
 */

type CalendlyTime = { status: string; start_time: string };

type Slot = { iso: string; dateLabel: string; timeLabel: string };

const dateFmt = new Intl.DateTimeFormat("sv-SE", {
  weekday: "short",
  day: "numeric",
  month: "short",
  timeZone: "Europe/Stockholm",
});
const timeFmt = new Intl.DateTimeFormat("sv-SE", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Stockholm",
});

export async function GET() {
  const token = process.env.CALENDLY_TOKEN;
  const eventUri = process.env.CALENDLY_EVENT_URI;
  if (!token || !eventUri) return NextResponse.json({ slots: [] });

  const now = new Date();
  const end = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const url = new URL("https://api.calendly.com/event_type_available_times");
  url.searchParams.set("event_type", eventUri);
  url.searchParams.set("start_time", now.toISOString());
  url.searchParams.set("end_time", end.toISOString());

  try {
    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    });
    if (!res.ok) return NextResponse.json({ slots: [] });
    const body = (await res.json()) as { collection?: CalendlyTime[] };
    const slots: Slot[] = (body.collection || [])
      .filter((t) => t.status === "available")
      .slice(0, 3)
      .map((t) => {
        const d = new Date(t.start_time);
        return {
          iso: t.start_time,
          dateLabel: dateFmt.format(d).replace(".", ""),
          timeLabel: timeFmt.format(d),
        };
      });
    return NextResponse.json({ slots });
  } catch {
    return NextResponse.json({ slots: [] });
  }
}
