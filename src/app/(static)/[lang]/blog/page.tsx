import Container from "@/components/atoms/contents/container";
import type { BlogPageProps, SupportedGame } from "@/interfaces/blog";
import PageHeading from "@/components/atoms/header/pageHeading";
import { GAMEIMAGE, SUPPORTEDGAME } from "@/constants/game";
import GameBlogCard from "@/components/organs/card/gameBlogCard";
import Link from "next/link";
import { LANGUAGE } from "@/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export default async function Page({ params: { lang } }: BlogPageProps) {
  if (!LANGUAGE.includes(lang)) notFound();

  return (
    <Container data-aos="fade-left" className="flex justify-center flex-col">
      <PageHeading title={lang === "en-US" ? "Our Blog" : "Blog Kami"} />
      <section className="grid gap-6 pt-2 sm:grid-cols-2 h-[26rem] overflow-x-visible overflow-y-scroll no-scrollbar">
        {Object.keys(GAMEIMAGE).map((el) => (
          <Link prefetch passHref href={`/${lang}/blog/${el}`} key={el}>
            <GameBlogCard
              title={el.replaceAll("-", " ")}
              game={el as SupportedGame}
              src={GAMEIMAGE[el as SupportedGame]}
            />
          </Link>
        ))}
      </section>
    </Container>
  );
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return LANGUAGE.map((lang) => ({ lang }));
}

export function generateMetadata({
  params: { lang },
}: BlogPageProps): Metadata {
  const domain = process.env.DOMAIN as string;
  return {
    title: lang === "en-US" ? "Blog Page" : "Halaman Blog",
    description:
      lang === "en-US"
        ? "Find a variety of interesting articles on our blog list. Get the latest information on various games"
        : "Temukan berbagai artikel menarik di daftar blog kami. Dapatkan informasi terbaru tentang berbagai game",
    keywords: [
      ...SUPPORTEDGAME,
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
      description:
        lang === "en-US"
          ? "Find a variety of interesting articles on our blog list. Get the latest information on various games"
          : "Temukan berbagai artikel menarik di daftar blog kami. Dapatkan informasi terbaru tentang berbagai game",
      tags: [
        ...SUPPORTEDGAME,
        "game",
        "article",
        "artikel",
        "blog",
        "mobile game",
        "pc game",
      ],
      title: lang === "en-US" ? "Blog Page" : "Halaman Blog",
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
      canonical: `${domain}/en-US/blog`,
      languages: {
        id: `${domain}/id-ID/blog`,
        en: `${domain}/en-US/blog`,
      },
    },
  };
}
