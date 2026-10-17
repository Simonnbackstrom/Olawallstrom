import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ola Wallström",
    short_name: "Ola Wallström",
    description:
      "Autentisk affärsutveckling. Mentor för bolagsägare som vill äga sin tid och sitt företag.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EC",
    theme_color: "#173B60",
    lang: "sv-SE",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
