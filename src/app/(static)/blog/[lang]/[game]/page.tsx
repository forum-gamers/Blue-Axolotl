import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import GameBlogCard from "@/components/organs/card/gameBlogCard";
import BlogNoData from "@/components/organs/views/blogNoData";
import { LANGUAGE } from "@/constants";
import { SUPPORTEDGAME } from "@/constants/game";
import type { Language } from "@/interfaces";
import type { BlogPageProps, SupportedGame } from "@/interfaces/blog";
import { getContentListPerGame } from "@/lib/sanity";
import { loadSanityImg } from "@/lib/sanity";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params: { lang, game } }: BlogPageProps) {
  if (!LANGUAGE.includes(lang)) notFound();

  const datas = await getContentListPerGame(lang, game);

  return (
    <Container data-aos="fade-left">
      <BackBtn url={`/blog/${lang}`} />
      <PageHeading title={`${game.replaceAll("-", " ")} blogs`} />
      {!!datas.length ? (
        <section className="grid gap-6 pt-2 sm:grid-cols-2 overflow-x-visible h-96 overflow-y-scroll no-scrollbar">
          {datas.map((el) => (
            <Link
              prefetch
              passHref
              href={`/blog/${lang}/${game}/${el.slug.current}`}
              key={el._id}
            >
              <GameBlogCard
                title={el.title}
                src={loadSanityImg(el.mainImage)
                  .ignoreImageParams()
                  .width(500)
                  .url()}
                game={game}
                desc={
                  el.body.find((el) => el.style === "normal")?.children[0].text
                }
              />
            </Link>
          ))}
        </section>
      ) : (
        <BlogNoData />
      )}
    </Container>
  );
}

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  const result: { lang: Language; game: SupportedGame }[] = [];
  LANGUAGE.forEach((lang) => {
    SUPPORTEDGAME.forEach((game) => {
      result.push({
        lang,
        game,
      });
    });
  });
  return result;
}

export function generateMetadata({
  params: { lang, game },
}: BlogPageProps): Metadata {
  const domain = process.env.DOMAIN as string;
  game = game.replaceAll("-", " ") as SupportedGame;
  return {
    title: lang === "en-US" ? `${game} articles` : `artikel ${game}`,
    description: game,
    keywords: [
      game,
      "game",
      "article",
      "artikel",
      "blog",
      "mobile game",
      "pc game",
    ],
    authors: {
      name: "forum gamers",
    },
    openGraph: {
      type: "article",
      description: game,
      tags: [
        game,
        "game",
        "article",
        "artikel",
        "blog",
        "mobile game",
        "pc game",
      ],
      title: lang === "en-US" ? `${game} articles` : `artikel ${game}`,
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
      canonical: `${domain}/blog/en-US/${game}`,
      languages: {
        id: `${domain}/blog/id-ID/${game}`,
        en: `${domain}/blog/en-US/${game}`,
      },
    },
  };
}
