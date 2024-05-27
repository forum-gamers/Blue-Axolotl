"use client";

import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import Link from "next/link";
import useChat from "@/modules/chat/hooks/useChat";
import ArrowBtn from "@/components/molleculs/button/arrowBtn";
import ChatTabContent from "./chatTabContent";
import useProfile from "@/hooks/useProfile";
import { DEFAULT_PROFILE_IMG } from "@/constants";
import type { Room } from "../interfaces";
import { useEffect } from "react";

export interface ChatViewsProps {
  groupChat: Room[];
  privateChat: Room[];
}

export default function ChatViews({ groupChat, privateChat }: ChatViewsProps) {
  const { profile } = useProfile();
  const { toggleChat, isOpen, setGroupChats, setPrivateChats } = useChat();

  useEffect(() => {
    setGroupChats(groupChat);
    setPrivateChats(privateChat);
  }, [groupChat, privateChat]);

  return (
    <section
      className={`fixed bottom-0 z-10 bg-xs-blue dark:bg-d-xs-blue rounded-t-2xl transition-all duration-500 px-2 right-2 lg:right-8 w-60 lg:w-80 
         overflow-y-scroll no-scrollbar scroll-smooth ${
           isOpen ? "h-[45%] lg:h-[85%]" : "h-10"
         }
      `}
    >
      <header className="flex justify-between mx-auto z-20 items-baseline lg:items-center px-3 py-2">
        <Link href={"/"} prefetch passHref className="flex flex-row gap-2">
          <LazyLoadImg
            src={profile?.imageUrl || DEFAULT_PROFILE_IMG}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full object-cover object-center"
          />
          <h1 className="text-d-xs-blue dark:text-xs-blue font-sora mt-1 text-sm">
            {profile.username}
          </h1>
        </Link>
        <div className="hover:bg-sm-blue hover:rounded-2xl h-6 w-8 flex items-center justify-center">
          <ArrowBtn
            open={isOpen}
            onOpenClick={toggleChat}
            onCloseClick={toggleChat}
          />
        </div>
      </header>
      {isOpen && <ChatTabContent />}
    </section>
  );
}
