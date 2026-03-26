import type { MetadataRoute } from "next";
import { cityPages, staticRoutes, toAbsoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: toAbsoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const cityEntries: MetadataRoute.Sitemap = cityPages.map((city) => ({
    url: toAbsoluteUrl(`/city/${city.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...cityEntries];
}
