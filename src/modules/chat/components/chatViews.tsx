"use client";

import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import Link from "next/link";
import useChat, { CHATTAB } from "@/modules/chat/hooks/useChat";
import ArrowBtn from "@/components/molleculs/button/arrowBtn";
import useProfile from "@/hooks/useProfile";
import { DEFAULT_PROFILE_IMG } from "@/constants";
import type { Room } from "../interfaces";
import { useEffect, type MouseEventHandler } from "react";
import { FiArrowLeftCircle } from "@/components/atoms/icons/fi";
import Breakline from "@/components/atoms/contents/breakLine";
import clsxm from "@/lib/clsxm";
import ChatPage from "./ChatPage";

export interface ChatViewsProps {
  groupChat: Room[];
  privateChat: Room[];
}

export default function ChatViews({ groupChat, privateChat }: ChatViewsProps) {
  const { profile } = useProfile();
  const {
    toggleChat,
    isOpen,
    setGroupChats,
    setPrivateChats,
    activeTab,
    changeTab,
  } = useChat();

  useEffect(() => {
    setGroupChats(groupChat);
    setPrivateChats(privateChat);
  }, [groupChat, privateChat]);

  const handleFormBack: MouseEventHandler = (e) => {
    e.preventDefault();

    changeTab("Private");
  };

  return (
    <section
      className={`fixed bottom-0 z-10 bg-xs-blue dark:bg-d-xs-blue rounded-t-2xl transition-all duration-500 px-2 right-2 lg:right-8 w-72 lg:w-96 
         overflow-y-scroll no-scrollbar scroll-smooth ${
           isOpen ? "h-[45%] lg:h-[85%]" : "h-16"
         }
      `}
    >
      <div className="z-[100] w-[17rem] lg:w-[23.25rem] fixed bg-xs-blue dark:bg-d-xs-blue rounded-lg p-0">
        <header className="flex justify-between mx-auto z-20 items-center lg:items-center px-3 py-2">
          <Link
            href={`/profile/${profile.username}`}
            prefetch
            passHref
            className="flex flex-row gap-2"
          >
            <LazyLoadImg
              src={profile?.imageUrl || DEFAULT_PROFILE_IMG}
              alt="profile"
              width={45}
              height={45}
              className="rounded-full object-cover object-center"
            />
            <h1 className="text-d-xs-blue dark:text-xs-blue flex items-center font-sora mt-1 text-sm">
              {profile?.username || "guest"}
            </h1>
          </Link>
          <div className="h-8 w-16 flex items-center justify-evenly">
            {activeTab === "Form" && (
              <FiArrowLeftCircle
                size={20}
                onClick={handleFormBack}
                className="cursor-pointer hover:bg-sm-blue hover:rounded-2xl"
              />
            )}
            <ArrowBtn
              open={isOpen}
              onOpenClick={toggleChat}
              onCloseClick={toggleChat}
            />
          </div>
        </header>
        {isOpen && (
          <>
            <Breakline className="dark:text-d-xl-blue m-0 !my-2 p-0" />
            {activeTab !== "Room" && (
              <>
                <ul className="grid grid-flow-col justify-evenly dark:text-d-xl-blue text-xl-blue gap-2 w-full h-12 p-0 m-0 transition-all duration-100">
                  {CHATTAB.map((el) => (
                    <li
                      key={el}
                      className={clsxm(
                        "cursor-pointer transition-all duration-200 h-10 lg:w-36 flex justify-center hover:opacity-50 text-d-xs-blue dark:text-xs-blue",
                        el === activeTab &&
                          "border-b-2 border-b-d-sm-blue dark:border-b-sm-blue py-0"
                      )}
                    >
                      <button onClick={() => changeTab(el)}>{el}</button>
                    </li>
                  ))}
                </ul>
                <Breakline className="dark:text-d-xl-blue m-0 !-my-1 p-0" />
              </>
            )}
          </>
        )}
      </div>
      {isOpen && (
        <div className="mt-36">
          <ChatPage />
        </div>
      )}
    </section>
  );
}
