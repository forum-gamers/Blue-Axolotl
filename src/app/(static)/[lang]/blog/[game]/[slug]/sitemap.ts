import { LANGUAGE } from "@/constants";
import { SUPPORTEDGAME } from "@/constants/game";
import type { MetadataRoute } from "next";
import { getAllByGame } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.DOMAIN as string;
  const result: MetadataRoute.Sitemap = [];

  for (const lang of LANGUAGE)
    for (const game of SUPPORTEDGAME) {
      const datas = await getAllByGame(game, { page: 1, limit: 20 });
      for (const data of datas)
        result.push({
          url: `${domain}/${lang}/blog/${game}/${data.slug.current}`,
          lastModified: new Date(data._updatedAt),
          changeFrequency: "daily",
          priority: 2,
        });
    }

  return result;
}
