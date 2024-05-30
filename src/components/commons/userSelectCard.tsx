import { DEFAULT_PROFILE_IMG } from "@/constants";
import type { UserProfile } from "@/interfaces/profile";
import LazyLoadImg from "../atoms/img/lazyLoadImg";
import type { MouseEventHandler } from "react";

export interface UserSelectCardProps {
  data: UserProfile;
  onClickHandler: MouseEventHandler;
}

export default function UserSelectCard({
  data,
  onClickHandler,
}: UserSelectCardProps) {
  return (
    <button
      onClick={onClickHandler}
      className="flex flex-row w-full h-16 items-center justify-start gap-5 p-3 rounded-sm cursor-pointer hover:opacity-50 border-2 dark:border-white border-slate-900 shadow-md"
    >
      <LazyLoadImg
        src={data.imageUrl || DEFAULT_PROFILE_IMG}
        alt={`${data.username} img`}
        className="h-10 w-10 rounded-full dark:bg-white bg-slate-900"
      />
      <h2 className="font-sora text-base text-pretty text-neutral-800 dark:text-neutral-300">
        {data.username ?? "guest"}
      </h2>
    </button>
  );
}
