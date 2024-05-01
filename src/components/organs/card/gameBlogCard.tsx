import AnimateCard from "@/components/atoms/card/animateCard";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import type { SupportedGame } from "@/interfaces/blog";
import type { StaticImageData } from "next/image";

export interface GameBlogCardProps {
  game: SupportedGame;
  src: string | StaticImageData;
  title: string;
  desc?: string;
}

export default function GameBlogCard({
  game,
  src,
  title,
  desc,
}: GameBlogCardProps) {
  return (
    <AnimateCard
      as="article"
      className="relative cursor-pointer bg-lg-blue dark:bg-d-lg-blue border border-xs-blue dark:border-d-xs-blue hover:scale-[102%]"
    >
      <LazyLoadImg
        src={src}
        alt={`${game} img`}
        width={400}
        height={200}
        className="h-48 rounded-t-xl mx-auto object-cover lg:object-left object-center"
      />
      <hgroup className="font-sora px-2 py-2">
        <h2 className="cursor-pointer capitalize text-xl text-t-color transition-all duration-300 dark:text-d-t-color dark:hover:text-teal-400 lg:hover:text-teal-800">
          {title}
        </h2>
        {!!desc && (
          <p className="text-sm leading-relaxed text-t-color dark:text-d-t-color">
            {desc.slice(0, 70) + (desc.length > 70 ? "..." : "")}
          </p>
        )}
      </hgroup>
    </AnimateCard>
  );
}
