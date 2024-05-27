import type { Language } from ".";

export type BlogPageProps<searchParams = Record<string, string>> = {
  readonly params: { lang: Language; game: SupportedGame; slug: string };
  readonly searchParams?: searchParams;
};

export type SupportedGame = "mobile-legend" | "csgo" | "valorant" | "pubg";

export interface BlogParams {
  lang: Language;
  game: SupportedGame;
  slug: string;
}
