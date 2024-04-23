import Container from "@/components/atoms/contents/container";
import type { BlogPageProps } from "@/interfaces/blog";
import { getMdxList } from "@/lib/mdx";
import BlogPage from "@/json/blogPage.json";
import PageHeading from "@/components/atoms/header/pageHeading";
import GameBlogCard from "@/components/organs/card/gameBlogCard";

export default function Page({ params: { lang } }: BlogPageProps) {
  const lists = getMdxList(lang);
  return (
    <Container
      data-aos="fade-left"
      as="section"
      className="flex justify-center flex-col"
    >
      <PageHeading title="Blog" desc={BlogPage[lang]} />
      <section className="grid gap-6 pt-2 sm:grid-cols-2">
        {Object.keys(lists).map((el) => (
          <GameBlogCard key={el} lang={lang} game={el as any} />
        ))}
      </section>
    </Container>
  );
}
