import Container from "@/components/atoms/contents/container";
import type { BlogPageProps, SupportedGame } from "@/interfaces/blog";
import BlogPage from "@/json/blogPage.json";
import PageHeading from "@/components/atoms/header/pageHeading";
import { GAMEIMAGE } from "@/constants/game";
import GameBlogCard from "@/components/organs/card/gameBlogCard";
import Link from "next/link";

export default async function Page({ params: { lang } }: BlogPageProps) {
  return (
    <Container data-aos="fade-left" className="flex justify-center flex-col">
      <PageHeading title="Blog" desc={BlogPage[lang]} />
      <section className="grid gap-6 pt-2 sm:grid-cols-2">
        {Object.keys(GAMEIMAGE)
          .filter((el) => Object.keys(GAMEIMAGE).includes(el as SupportedGame))
          .map((el) => (
            <Link prefetch passHref href={`/blog/${lang}/${el}`} key={el}>
              <GameBlogCard
                game={el as SupportedGame}
                src={GAMEIMAGE[el as SupportedGame]}
              />
            </Link>
          ))}
      </section>
    </Container>
  );
}
