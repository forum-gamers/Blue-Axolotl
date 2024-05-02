import { LANGUAGE } from "@/constants";
import { SUPPORTEDGAME } from "@/constants/game";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  const result: MetadataRoute.Sitemap = [];

  LANGUAGE.forEach((lang) => {
    SUPPORTEDGAME.forEach((game) => {
      result.push({
        url: `${domain}/${lang}/blog/${game}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      });
    });
  });
  return result;
}
