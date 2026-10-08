import { ImageResponse } from "next/og";

export const alt = "Ola Wallström – Autentisk affärsutveckling";
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
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,106,46,0.35) 0%, rgba(242,106,46,0) 65%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 2,
              background: "#F26A2E",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontStyle: "italic",
              fontSize: 24,
              color: "#F26A2E",
            }}
          >
            Autentisk affärsutveckling
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            Äkta, rakt och med riktning framåt.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(247,243,236,0.75)",
              fontFamily: "sans-serif",
              maxWidth: 840,
              lineHeight: 1.3,
            }}
          >
            Mentor för bolagsägare som vill äga sin tid och sitt företag.
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
              color: "#F7F3EC",
            }}
          >
            Ola Wallström
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(247,243,236,0.65)",
            }}
          >
            olawallstrom.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
