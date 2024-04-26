import type { Language } from ".";

export type BlogPageProps<searchParams = Record<string, string>> = {
  params: { lang: Language; game: SupportedGame; slug: string };
  searchParams?: searchParams;
};

export type SupportedGame = "mobile-legend" | "csgo" | "valorant";
