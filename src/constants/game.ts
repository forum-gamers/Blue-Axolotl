import type { SupportedGame } from "@/interfaces/blog";

export const SUPPORTEDGAME: SupportedGame[] = [
  "csgo",
  "mobile-legend",
  "valorant",
  "pubg",
];

export const GAMEIMAGE: Record<SupportedGame, string> = {
  "mobile-legend":
    "https://ik.imagekit.io/vohc8tq4da/fe/ml.jpg?updatedAt=1714381616361",
  csgo: "https://ik.imagekit.io/vohc8tq4da/fe/20220408134900-624fdadcf3c5d-csgo-prime-accounts.jpg?updatedAt=1714382191731",
  valorant: "https://ik.imagekit.io/vohc8tq4da/fe/valo?updatedAt=1714382132510",
  pubg: "https://ik.imagekit.io/vohc8tq4da/fe/pubg-mobile-1605171759.jpg?updatedAt=1714535880659",
};
