"use client";

import useScroll from "@/hooks/useScroll";
import ChatPreview from "../card/chatPreview";
import OvalLoader from "@/components/atoms/loaders/ovalLoader";

export default function ChatScroll() {
  const initialState = [
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
    {
      username: "name",
      lastChat:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      lastChatAt: new Date(),
      lastChatSender: "name",
      active: true,
    },
  ];

  const handler = (params: { page: 1; limit: 10 }) => {
    return data as any;
  };

  const { data, pending, ref } = useScroll({ initialState, handler });

  return !!data.length ? (
    <section id="chat-list" className="flex flex-col space-y-2 my-2">
      {data.map((el, idx) => (
        <ChatPreview {...el} key={idx} />
      ))}
      <div ref={ref} className="flex items-center justify-center">
        {pending && <OvalLoader />}
      </div>
    </section>
  ) : (
    <>ok</>
  );
}
