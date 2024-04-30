import Container from "@/components/atoms/contents/container";
import BackBtn from "@/components/molleculs/button/backBtn";
import BlogViews from "@/components/organs/views/blogViews";
import type { BlogPageProps } from "@/interfaces/blog";
import { getAllBlog, getBySlug } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import type { Metadata } from "next";

export default async function Page({
  params: { lang, game, slug },
}: BlogPageProps) {
  const post = await getBySlug(lang, game, slug);
  if (!post) notFound();

  return (
    <Container data-aos="fade-up" as="section">
      <BackBtn url={`/blog/${lang}/${game}`} />
      <hgroup className="flex flex-col justify-start border-b border-dashed border-neutral-600 font-sora font-medium">
        <h2 className="pt-2 text-neutral-600 dark:text-neutral-400 text-2xl">
          {post.authorName}
        </h2>
        <p className="mb-2 pb-2 pt-2 text-neutral-600 dark:text-neutral-400 text-lg">
          {format(new Date(post._createdAt), "yyyy/MM/dd")}
        </p>
      </hgroup>
      <BlogViews value={post.body} />
    </Container>
  );
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  const datas = await getAllBlog({ page: 1, limit: 20 });
  return datas.map(({ lang, game, slug }) => ({
    lang,
    game: game.replaceAll(" ", "-"),
    slug: slug.current,
  }));
}

export function generateMetadata({
  params: { lang, game, slug },
}: BlogPageProps): Metadata {
  const domain = process.env.DOMAIN as string;

  return {
    title: slug.replaceAll("-", " "),
    description: slug.replaceAll("-", " "),
    keywords: [game, "article", "artikel", "blog"],
    authors: {
      name: "forum gamers",
    },
    openGraph: {
      type: "article",
      tags: [game, "article", "artikel", "blog"],
      title: slug.replaceAll("-", " "),
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
      canonical: `${domain}/blog/${lang}/${game}/${slug}`,
    },
  };
}
