import type { Language } from ".";

export type BlogPageProps<searchParams = Record<string, string>> = {
  params: { metadata: BlogMetadataParams; lang: Language };
  searchParams?: searchParams;
};

export type BlogMetadataParams = [string, SupportedGame];

export type SupportedGame = "mobile-legend" | "csgo" | "valorant";
