import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
