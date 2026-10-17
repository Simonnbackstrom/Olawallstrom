import { ImageResponse } from "next/og";

export const alt = "Boardroom 2027. Ett år. Fyra teman. Max 15 deltagare.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#173B60",
          color: "#F7F3EC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,106,46,0.4) 0%, rgba(242,106,46,0) 65%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 2, background: "#F26A2E", borderRadius: 2 }} />
          <div style={{ fontStyle: "italic", fontSize: 24, color: "#F26A2E" }}>
            Primärt program 2027
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              fontWeight: 600,
            }}
          >
            Boardroom 2027.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontStyle: "italic",
              color: "rgba(247,243,236,0.9)",
              lineHeight: 1.1,
            }}
          >
            Ett år. Fyra teman.
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 12,
              fontFamily: "sans-serif",
              fontSize: 22,
              color: "rgba(247,243,236,0.75)",
            }}
          >
            <span>195 000 kr</span>
            <span style={{ color: "rgba(247,243,236,0.4)" }}>·</span>
            <span>Max 15 deltagare</span>
            <span style={{ color: "rgba(247,243,236,0.4)" }}>·</span>
            <span>Begränsat antal platser</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Ola Wallström
          </div>
          <div style={{ fontSize: 20, color: "rgba(247,243,236,0.65)" }}>
            olawallstrom.com/boardroom
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
