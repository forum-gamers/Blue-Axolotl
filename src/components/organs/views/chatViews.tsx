"use client";

import useMobile from "@/hooks/useMobile";
import LOGO from "@/components/static/images/backdrop.webp";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import Link from "next/link";
import useChat from "@/hooks/useChat";
import ArrowBtn from "@/components/molleculs/button/arrowBtn";
import ChatTabContent from "@/components/molleculs/contents/chatTabContent";

export default function ChatViews() {
  const isMobile = useMobile();
  const { toggleChat, isOpen } = useChat();

  return (
    <section
      className={`fixed bottom-0 z-10 bg-xs-blue rounded-t-2xl transition-all duration-500 px-2 ${
        isMobile ? "right-0" : `right-8 w-80 ${isOpen ? "h-[85%]" : "h-10"}`
      }`}
    >
      <header className="flex justify-between mx-auto z-20 items-center px-3 py-2">
        <Link href={"/"} prefetch passHref className="flex flex-row gap-2">
          <LazyLoadImg
            src={LOGO}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full object-cover object-center"
          />
          <h1 className="dark:text-d-xs-blue text-xs-blue font-sora mt-1 text-sm">
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
