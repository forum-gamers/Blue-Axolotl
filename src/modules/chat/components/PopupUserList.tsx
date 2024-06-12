"use client";

import useScroll from "@/hooks/useScroll";
import { getFriendList } from "../actions/room";
import UserSelectCard from "@/components/commons/userSelectCard";
import { useTransition, type MouseEventHandler } from "react";
import useChat from "../hooks/useChat";
import OvalLoader from "@/components/atoms/loaders/ovalLoader";
import CryEmoji from "@/components/static/svg/cry-emoji";

export default function PopupUserList() {
  const [transition, startTransition] = useTransition();
  const { changeTab } = useChat();

  const selectCardHandler =
    (id: string): MouseEventHandler =>
    (e) => {
      e.preventDefault();
      startTransition(async () => {
        changeTab("Room");
      });
    };

  const { pending, data, ref } = useScroll({
    initialState: [],
    handler: getFriendList,
  });

  return !!data.length ? (
    <div className="space-y-2 overflow-y-scroll p-2 scroll-smooth no-scrollbar m-0">
      {data.map(({ username, imageUrl, id }) => (
        <UserSelectCard
          onClickHandler={selectCardHandler(id)}
          username={username}
          key={id}
          imageUrl={imageUrl}
          className="px-4 mx-2 w-[32rem] bg-lg-blue dark:bg-d-lg-blue"
        />
      ))}
      <div ref={ref}>{(pending || transition) && <OvalLoader />}</div>
    </div>
  ) : (
    <figure className="flex flex-col justify-center items-center space-y-2">
      <CryEmoji width="125px" height="125px" />
      <figcaption className="text-base font-sora">
        something went wrong
      </figcaption>
    </figure>
  );
}
