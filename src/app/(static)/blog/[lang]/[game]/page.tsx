import Container from "@/components/atoms/contents/container";
import PageHeading from "@/components/atoms/header/pageHeading";
import BackBtn from "@/components/molleculs/button/backBtn";
import GameBlogCard from "@/components/organs/card/gameBlogCard";
import type { BlogPageProps } from "@/interfaces/blog";
import BlogGame from "@/json/blogGamPage.json";
import { getContentListPerGame } from "@/lib/sanity";
import { loadSanityImg } from "@/lib/sanity";
import Link from "next/link";

export default async function Page({ params: { lang, game } }: BlogPageProps) {
  const datas = await getContentListPerGame(lang, game);

  return (
    <Container data-aos="fade-left">
      <BackBtn url={`/blog/${lang}`} />
      <PageHeading
        title={`${game.replaceAll("-", " ")} blogs`}
        desc={BlogGame[lang]}
      />
      <section className="grid gap-6 pt-2 sm:grid-cols-2">
        {!!datas.length &&
          datas.map((el) => (
            <Link
              prefetch
              passHref
              href={`/blog/${lang}/${game}/${el.slug.current}`}
              key={el._id}
            >
              <GameBlogCard
                src={loadSanityImg(el.mainImage)
                  .ignoreImageParams()
                  .width(500)
                  .url()}
                game={game}
              />
            </Link>
          ))}
      </section>
    </Container>
  );
}
