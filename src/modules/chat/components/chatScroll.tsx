"use client";

import ChatPreview from "./chatPreview";
import OvalLoader from "@/components/atoms/loaders/ovalLoader";
import useChat from "../hooks/useChat";
import useChatScroll from "../hooks/useChatScroll";

export default function ChatScroll() {
  const { activeTab, privateChats, groupChats } = useChat();
  const { ref, pending } = useChatScroll();

  const data = (() => {
    switch (activeTab) {
      case "Group":
        return groupChats;
      case "Private":
        return privateChats;
      default:
        return [];
    }
  })();

  return !!data.length ? (
    <section id="chat-list" className="flex flex-col space-y-2 my-2">
      {data.map((el) => (
        <ChatPreview
          chat={el.chat[el.chat.length - 1]}
          roomId={el._id}
          key={el._id}
        />
      ))}
      <div ref={ref} className="flex items-center justify-center">
        {pending && <OvalLoader />}
      </div>
    </section>
  ) : (
    <>ok</>
  );
}
