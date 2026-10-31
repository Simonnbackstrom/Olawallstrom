type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 500 | 600 | 700;
  style: "normal" | "italic";
};

let cached: Promise<OgFont[]> | null = null;

async function fetchGoogleFont(
  family: string,
  weight: number,
  style: "normal" | "italic",
): Promise<ArrayBuffer> {
  // Safari 4-style User-Agent gets us TTF; satori does not support woff/woff2.
  const italicPart = style === "italic" ? "italic" : "";
  const cssUrl = `https://fonts.googleapis.com/css?family=${encodeURIComponent(
    family,
  )}:${weight}${italicPart}`;

  const css = await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7",
    },
  }).then((r) => r.text());

  const match = css.match(/src:\s*url\((https:[^)]+?\.ttf)\)\s*format\('truetype'\)/);
  if (!match) {
    throw new Error(
      `Could not resolve TTF URL for ${family} ${weight} ${style}`,
    );
  }

  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export function loadOgFonts(): Promise<OgFont[]> {
  if (!cached) {
    cached = Promise.all([
      fetchGoogleFont("Lora", 500, "normal"),
      fetchGoogleFont("Lora", 500, "italic"),
      fetchGoogleFont("Lora", 600, "normal"),
      fetchGoogleFont("Source Sans 3", 400, "normal"),
      fetchGoogleFont("Source Sans 3", 600, "normal"),
      fetchGoogleFont("Source Sans 3", 700, "normal"),
    ]).then(
      ([loraMedium, loraMediumItalic, loraSemibold, sansRegular, sansSemibold, sansBold]) =>
        [
          { name: "Lora", data: loraMedium, weight: 500, style: "normal" },
          { name: "Lora", data: loraMediumItalic, weight: 500, style: "italic" },
          { name: "Lora", data: loraSemibold, weight: 600, style: "normal" },
          { name: "Source Sans 3", data: sansRegular, weight: 400, style: "normal" },
          { name: "Source Sans 3", data: sansSemibold, weight: 600, style: "normal" },
          { name: "Source Sans 3", data: sansBold, weight: 700, style: "normal" },
        ] satisfies OgFont[],
    );
    cached.catch(() => {
      cached = null;
    });
  }
  return cached;
}
