import AnimateCard from "@/components/atoms/card/animateCard";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import type { SupportedGame } from "@/interfaces/blog";
import type { StaticImageData } from "next/image";

export interface GameBlogCardProps {
  game: SupportedGame;
  src: string | StaticImageData;
}

export default function GameBlogCard({ game, src }: GameBlogCardProps) {
  return (
    <AnimateCard className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
      <LazyLoadImg
        src={src}
        alt={`${game} img`}
        width={400}
        height={200}
        className="h-48 rounded-t-xl object-cover object-left"
      />
    </AnimateCard>
  );
}
