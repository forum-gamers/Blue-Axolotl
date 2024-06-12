"use client";

import ChatPreview from "./ChatPreview";
import OvalLoader from "@/components/atoms/loaders/ovalLoader";
import useChat from "../hooks/useChat";
import useChatScroll from "../hooks/useChatScroll";
import RoomChat from "./RoomChat";
import NoChatData from "./NoChat";

export default function ChatScroll() {
  const { activeTab, privateChats, groupChats } = useChat();
  const { ref, pending } = useChatScroll({ limit: 10 });

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

  return activeTab === "Room" ? (
    <RoomChat />
  ) : (
    <section id="chat-list" className="flex flex-col space-y-2 my-2">
      {!data.length ? (
        <>
          {[
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
            {
              _id: "1",
              chat: [
                {
                  createdAt: new Date(),
                  message: "lorem ipsum dolor met",
                  sender: {
                    username: "guest",
                  },
                },
              ],
            } as any,
          ].map((el) => (
            <ChatPreview
              chat={el.chat[el.chat.length - 1]}
              roomId={el._id}
              key={el._id}
            />
          ))}
          <div ref={ref} className="flex items-center justify-center">
            {pending && <OvalLoader />}
          </div>
        </>
      ) : (
        <NoChatData />
      )}
    </section>
  );
}
