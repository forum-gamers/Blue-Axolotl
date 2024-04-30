import AnimateCard from "@/components/atoms/card/animateCard";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import type { SupportedGame } from "@/interfaces/blog";
import type { StaticImageData } from "next/image";

export interface GameBlogCardProps {
  game: SupportedGame;
  src: string | StaticImageData;
  title: string;
}

export default function GameBlogCard({ game, src, title }: GameBlogCardProps) {
  return (
    <AnimateCard className="relative cursor-pointer bg-lg-blue dark:bg-d-lg-blue border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 hover:scale-[102%]">
      <LazyLoadImg
        src={src}
        alt={`${game} img`}
        width={400}
        height={200}
        className="h-48 rounded-t-xl mx-auto object-cover lg:object-left object-center"
      />
      <h1 className="font-sora px-4 py-1 cursor-pointer rounded-b-xl text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
        {title}
      </h1>
    </AnimateCard>
  );
}
