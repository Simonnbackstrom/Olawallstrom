import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olawallstrom.com";
  const lastModified = new Date();
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/agarklivet", priority: 0.9, changeFrequency: "monthly" },
    { path: "/vip-coaching", priority: 0.9, changeFrequency: "monthly" },
    { path: "/strategisession", priority: 0.9, changeFrequency: "weekly" },
    { path: "/om-ola", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resultat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/inspiration", priority: 0.7, changeFrequency: "weekly" },
    { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
    { path: "/webinar", priority: 0.5, changeFrequency: "monthly" },
    { path: "/integritetspolicy", priority: 0.3, changeFrequency: "yearly" },
  ];
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
