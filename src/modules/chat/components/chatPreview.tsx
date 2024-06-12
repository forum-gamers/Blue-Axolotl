"use client";

import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import type { ChatResp } from "../interfaces";
import { DEFAULT_PROFILE_IMG } from "@/constants";
import useChat from "../hooks/useChat";
import { getChatByRoomIds } from "../actions/room";
import { useState, type MouseEvent } from "react";
import LoadingWrapper from "@/components/commons/loadingWrapper";
import { formatInteger } from "@/helper/global";

export interface ChatPreviewProps {
  chat: ChatResp;
  roomId: string;
}

export default function ChatPreview({
  chat: { createdAt, message, sender },
  roomId,
}: ChatPreviewProps) {
  const lastChatDate = new Date(createdAt);
  const { changeTab, setActiveRoomChat } = useChat();
  const [loading, setLoading] = useState<boolean>(false);

  const onClickRedirect = async (e: MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    const chats = await getChatByRoomIds(roomId);
    setActiveRoomChat(chats);

    changeTab("Room");
    setLoading(false);
  };

  return (
    <article className="bg-xs-blue w-[17rem] lg:w-[23rem] dark:bg-d-xs-blue h-14 flex px-2 flex-row justify-start items-center rounded-md cursor-pointer hover:opacity-50 border border-xl-blue dark:border-x-d-xl-blue">
      <LoadingWrapper loading={loading}>
        <button
          onClick={onClickRedirect}
          className="flex flex-row justify-between"
        >
          <header className="flex items-center justify-center">
            <LazyLoadImg
              src={sender?.imageUrl || DEFAULT_PROFILE_IMG}
              alt={`${sender.username} img`}
              height={50}
              width={50}
              className="rounded-full object-cover"
              rounded="rounded-full"
            />
          </header>
          <hgroup className="flex flex-col w-[14rem] lg:w-[20rem] mx-1 mb-1 pb-1 lg:pb-0 lg:mb-0 lg:my-0 lg:py-0 font-sora">
            <div className="flex flex-row justify-between">
              <h1 className="text-xs font-semibold">{sender.username}</h1>
              <h6 className="text-xs font-light">{`${formatInteger(
                lastChatDate.getDate()
              )} ${formatInteger(
                lastChatDate.getMonth() + 1
              )} ${lastChatDate.getFullYear()}`}</h6>
            </div>
            <p className="lg:text-sm text-xs">
              {`${lastChatDate.getHours()}.${formatInteger(
                lastChatDate.getMinutes()
              )}`}{" "}
              :{" "}
              {message.length < 20 ? message : message.substring(0, 20) + "..."}
            </p>
          </hgroup>
        </button>
      </LoadingWrapper>
    </article>
  );
}
