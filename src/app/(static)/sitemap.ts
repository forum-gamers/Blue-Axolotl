import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return [
    {
      url: `${domain}/login`,
      priority: 2,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${domain}/register`,
      priority: 2,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
  ];
}
