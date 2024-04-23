import type { SupportedGame } from "@/interfaces/blog";
import type { StaticImageData } from "next/image";
import ML from "@/components/static/images/mobile-legend.jpg";
import CSGO from "@/components/static/images/csgo.jpeg";
import VALO from "@/components/static/images/valo.jpg";

export const SUPPORTEDGAME: SupportedGame[] = [
  "csgo",
  "mobile-legend",
  "valorant",
];

export const GAMEIMAGE: Record<SupportedGame, string | StaticImageData> = {
  "mobile-legend": ML,
  csgo: CSGO,
  valorant: VALO,
};
