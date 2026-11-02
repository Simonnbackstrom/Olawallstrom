"use client";

import { webinarIcs } from "@/lib/webinar";

type Props = {
  sessionId: string;
};

export default function WebinarIcsButton({ sessionId }: Props) {
  const handleClick = () => {
    const blob = new Blob([webinarIcs(sessionId)], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "webinar-ola-wallstrom.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <button type="button" onClick={handleClick} className="btn-dark-ghost justify-center">
      Ladda ner kalenderfil
    </button>
  );
}
