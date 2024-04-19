import DEFAULTBACKDOP from "@/components/static/images/backdrop.webp";
import Link from "next/link";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import clsxm from "@/lib/clsxm";
import ThemeToggleBtn from "@/components/atoms/button/themeBtn";
import Img from "@/components/static/images/image.png";

export interface ProfileProps {
  expand: boolean;
  imgSize: number;
}

export default function Profile({ expand, imgSize }: ProfileProps) {
  return (
    <article
      className={clsxm(
        "flex w-full flex-grow items-center gap-4 lg:flex-col lg:gap-0.5",
        expand && "flex-col !items-start"
      )}
    >
      <div className="relative hidden w-full flex-col items-center overflow-hidden pb-2 lg:flex">
        <div className="h-24 w-full overflow-hidden rounded-lg dark:brightness-50">
          <LazyLoadImg
            src={DEFAULTBACKDOP}
            alt="background-img"
            width={100}
            height={100}
            className="-ml-4 w-full scale-125"
          />
        </div>
        <div className="absolute -right-1 bottom-[55px] z-10 rounded-xl py-2 pr-2">
          <ThemeToggleBtn />
        </div>
        <div className="z-10 -mt-11 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
          <LazyLoadImg
            src={Img}
            alt="profile"
            width={expand ? 80 : imgSize * 0.9}
            height={expand ? 80 : imgSize * 0.9}
            rounded="rounded-full"
            className="lg:hover:scale-105"
          />
        </div>
      </div>
      <LazyLoadImg
        src={DEFAULTBACKDOP}
        alt="profile"
        width={expand ? 80 : imgSize * 0.9}
        height={expand ? 80 : imgSize * 0.9}
        rounded="rounded-full"
        className="lg:hidden lg:hover:scale-105"
      />
      <hgroup className="mt-1 flex items-center gap-2 font-sora">
        <Link href="/" passHref>
          <h2 className="flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">
            Name
          </h2>
          <span className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
            @Name
          </span>
        </Link>
      </hgroup>
    </article>
  );
}
