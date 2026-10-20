import { ImageResponse } from "next/og";

export const alt = "Boka strategisamtal. 30 min, direkt med Ola Wallström.";
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
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,106,46,0.35) 0%, rgba(242,106,46,0) 65%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 2, background: "#F26A2E", borderRadius: 2 }} />
          <div style={{ fontSize: 24, color: "#F26A2E" }}>
            Kostnadsfritt strategisamtal
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Boka 30 min med Ola.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "rgba(247,243,236,0.8)",
              fontFamily: "sans-serif",
              lineHeight: 1.35,
              maxWidth: 880,
            }}
          >
            Direkt med mig, inget säljtryck. Konkreta nästa steg för din tillväxt.
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
            olawallstrom.com/strategisession
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
