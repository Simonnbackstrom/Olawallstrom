import { ImageResponse } from "next/og";

export const alt = "VIP-coaching. Fyra principer. Begränsat antal platser.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F7F3EC",
          color: "#173B60",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,106,46,0.28) 0%, rgba(242,106,46,0) 65%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 2, background: "#F26A2E", borderRadius: 2 }} />
          <div style={{ fontSize: 24, color: "#F26A2E" }}>
            VIP-coaching
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              maxWidth: 980,
            }}
          >
            Autentisk affärsutveckling.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#5a6b80",
              fontFamily: "sans-serif",
              lineHeight: 1.3,
              maxWidth: 820,
            }}
          >
            Fyra principer, sex steg. Begränsat antal platser.
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
          <div style={{ fontSize: 20, color: "rgba(23,59,96,0.6)" }}>
            olawallstrom.com/vip-coaching
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
