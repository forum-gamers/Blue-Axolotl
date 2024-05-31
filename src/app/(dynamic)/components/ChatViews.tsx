"use client";

import LOGO from "@/components/static/images/backdrop.webp";
import LazyLoadImg from "@/components/commons/Images/LazyLoadImg";
import Link from "next/link";
import useChat from "@/hooks/useChat";
import ArrowBtn from "@/components/commons/Buttons/ArrowBtn";
import ChatTabContent from "@/components/commons/contents/ChatTabContent";

export default function ChatViews() {
  const { toggleChat, isOpen } = useChat();

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
            src={LOGO}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full object-cover object-center"
          />
          <h1 className="text-d-xs-blue dark:text-xs-blue font-sora mt-1 text-sm">
            Name
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
