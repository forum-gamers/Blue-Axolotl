import { LANGUAGE } from "@/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN as string;
  return LANGUAGE.map((el) => ({
    url: `${domain}/${el}/blog`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 3,
  }));
}
