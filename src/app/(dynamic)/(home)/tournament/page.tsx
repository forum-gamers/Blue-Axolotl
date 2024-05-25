import { SUPPORTEDGAME } from "@/constants/game";
import type { Metadata } from "next";

export default function TournamentPage() {
  return <div>TournamentPage</div>;
}
export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  const domain = process.env.DOMAIN as string;
  return {
    title: "Tournament",
    description:
      "Temukan berbagai turnamen game online menarik di forum kami. Dapatkan informasi terbaru tentang berbagai game",
    keywords: [
      ...SUPPORTEDGAME,
      "game",
      "turnamen",
      "game online",
      "mobile game",
      "pc game",
    ],
    authors: {
      name: "forum gamers",
    },
    openGraph: {
      type: "website",
      description:
        "Temukan berbagai turnamen game online menarik di forum kami. Dapatkan informasi terbaru tentang berbagai game",
      title: "Tournament",
      images: {
        url: "/global/logo-blue.png",
        alt: "forum gamers logo",
      },
    },
    robots: {
      nocache: true,
      index: true,
      follow: true,
      googleBot: {
        nocache: true,
        index: true,
      },
    },
    alternates: {
      canonical: `${domain}/tournament`,
      languages: {
        id: `${domain}/tournament`,
        en: `${domain}/tournament`,
      },
    },
  };
}
