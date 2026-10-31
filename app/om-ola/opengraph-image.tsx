import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";

export const alt = "Ola Wallström. 25 år som mentor. 650+ coachade bolagsägare.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const fonts = await loadOgFonts();

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
          fontFamily: "Source Sans 3",
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
              "radial-gradient(circle, rgba(23,59,96,0.14) 0%, rgba(23,59,96,0) 65%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 2, background: "#F26A2E", borderRadius: 2 }} />
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#F26A2E",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Om Ola
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Lora",
              fontSize: 96,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Ola Wallström.
          </div>
          <div
            style={{
              display: "flex",
              gap: 48,
            }}
          >
            {[
              { n: "25 år", l: "som mentor" },
              { n: "650+", l: "coachade" },
              { n: "8", l: "egna bolag" },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontFamily: "Lora",
                    fontSize: 56,
                    fontWeight: 600,
                    color: "#173B60",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#5a6b80",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            Autentisk affärsutveckling
          </div>
          <div style={{ fontSize: 20, color: "rgba(23,59,96,0.6)" }}>
            olawallstrom.com/om-ola
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
