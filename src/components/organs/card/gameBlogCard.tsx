import AnimateCard from "@/components/atoms/card/animateCard";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import { GAMEIMAGE } from "@/constants/game";
import type { Language } from "@/interfaces";
import type { SupportedGame } from "@/interfaces/blog";
import Link from "next/link";

export interface GameBlogCardProps {
  game: SupportedGame;
  lang: Language;
}

export default function GameBlogCard({ game, lang }: GameBlogCardProps) {
  return (
    <AnimateCard className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
      <Link prefetch passHref href={`/blog/${lang}/${game}`}>
        <LazyLoadImg
          src={GAMEIMAGE[game]}
          alt={`${game} img`}
          width={400}
          height={200}
          className="h-48 rounded-t-xl object-cover object-left"
        />
      </Link>
    </AnimateCard>
  );
}
