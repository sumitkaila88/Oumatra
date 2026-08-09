import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/companies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
] as const satisfies ReadonlyArray<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }>;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({ url: `${siteConfig.url}${path}`, changeFrequency, priority }));
}
