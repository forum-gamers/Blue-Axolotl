"use client";

import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import { DEFAULT_PROFILE_IMG } from "@/constants";
import Link from "next/link";
import { FiArrowLeftCircle } from "@/components/atoms/icons/fi";
import useChat from "../hooks/useChat";
import { useTransition, type MouseEventHandler } from "react";
import ChatText from "./ChatText";
import FormChat from "./FormChat";

export default function RoomChat() {
  const { changeTab } = useChat();
  const [, startTransition] = useTransition();

  const backHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    startTransition(() => {
      changeTab("Private");
    });
  };

  return (
    <section className="overflow-y-hidden h-auto">
      <header className="flex w-[17rem] -mt-16 lg:w-[23rem] fixed gap-4 mx-auto items-center px-3 py-2 border my-4 z-[100] bg-xs-blue dark:bg-d-xs-blue">
        <button
          onClick={backHandler}
          className="flex flex-row justify-evenly w-14 hover:cursor-pointer hover:scale-105 hover:-translate-x-1 transition-all duration-200"
        >
          <FiArrowLeftCircle size={25} data-testid="back-icon" />
        </button>
        <Link
          href={`/profile/${"guest"}`}
          prefetch
          passHref
          className="flex flex-row justify-start gap-6"
        >
          <LazyLoadImg
            src={DEFAULT_PROFILE_IMG}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full object-cover object-center"
          />
          <h1 className="text-d-xs-blue dark:text-xs-blue flex items-center font-sora mt-1 text-base font-semibold">
            {"guest"}
          </h1>
        </Link>
      </header>

      <div className="flex flex-col overflow-y-scroll w-full space-y-6 mt-4 py-2 h-full no-scrollbar scroll-smooth mb-44">
        <ChatText
          position="left"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui
              ea consequuntur culpa, voluptates quaerat explicabo vel facere
              iste repudiandae, pariatur veritatis."
        />
        <ChatText
          position="right"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui
              ea consequuntur culpa, voluptates quaerat explicabo vel facere
              iste repudiandae, pariatur veritatis. Cupiditate, pariatur
              dignissimos. Neque at nemo autem quisquam."
        />
        <ChatText
          position="left"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ChatText
          position="right"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui
              ea consequuntur culpa"
        />
        <ChatText
          position="right"
          message=" Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
      </div>
      <FormChat />
    </section>
  );
}
