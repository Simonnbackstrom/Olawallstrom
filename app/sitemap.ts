import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olawallstrom.com";
  const routes = ["", "/strategisession", "/om-ola", "/metod", "/resultat", "/nyhetsbrev", "/kontakt", "/integritetspolicy"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
