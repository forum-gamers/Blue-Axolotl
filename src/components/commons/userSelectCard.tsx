import { DEFAULT_PROFILE_IMG } from "@/constants";
import LazyLoadImg from "../atoms/img/lazyLoadImg";
import type { MouseEventHandler } from "react";

export interface UserSelectCardProps {
  onClickHandler: MouseEventHandler;
  className?: string;
  username: string;
  imageUrl?: string;
}

export default function UserSelectCard({
  onClickHandler,
  className = "",
  username,
  imageUrl,
}: UserSelectCardProps) {
  return (
    <button
      onClick={onClickHandler}
      className={`flex flex-row h-16 items-center justify-start gap-5 p-3 rounded-md cursor-pointer hover:opacity-50 border-2 dark:border-white border-slate-900 shadow-md ${
        !!className && className
      } hover:scale-105 transition-all duration-100`}
    >
      <LazyLoadImg
        src={imageUrl || DEFAULT_PROFILE_IMG}
        alt={`${username ?? "guest"} img`}
        className="h-10 w-10 rounded-full dark:bg-white bg-slate-900"
      />
      <h2 className="font-sora text-base text-pretty">{username ?? "guest"}</h2>
    </button>
  );
}
