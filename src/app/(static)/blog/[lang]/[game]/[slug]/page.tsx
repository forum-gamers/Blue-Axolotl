import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import BlogViews from "@/components/organs/views/blogViews";
import type { BlogPageProps } from "@/interfaces/blog";
import { getBySlug } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { format } from "date-fns";

export default async function Page({
  params: { lang, game, slug },
}: BlogPageProps) {
  const post = await getBySlug(lang, game, slug);
  if (!post) notFound();

  return (
    <Container data-aos="fade-left" as="section">
      <BackBtn />
      <PageHeading
        title={post.title}
        desc={`${post.authorName} ${format(
          new Date(post._createdAt),
          "yyyy/mm/dd"
        )}`}
      />
      <BlogViews value={post.body} />
    </Container>
  );
}

export const dynamic = "force-static";
