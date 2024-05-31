import LazyLoadImg from "@/components/commons/Images/LazyLoadImg";
import GUEST from "@/components/static/images/guest.png";
import Link from "next/link";

export interface ChatPreviewProps {
  imgUrl?: string;
  username: string;
  lastChatSender: string;
  lastChatAt: Date;
  active?: boolean;
  lastChat: string;
}

export default function ChatPreview({
  imgUrl,
  username,
  lastChat,
  lastChatAt,
  lastChatSender,
  active,
}: ChatPreviewProps) {
  const lastChatDate = new Date(lastChatAt);
  return (
    <Link href={``} prefetch>
      <article className="bg-xs-blue dark:bg-d-xs-blue h-14 flex flex-row justify-start rounded-md cursor-pointer hover:opacity-50 border border-xl-blue dark:border-x-d-xl-blue">
        <header className="flex items-center justify-center">
          <LazyLoadImg
            src={imgUrl || GUEST}
            alt={`${username} img`}
            height={50}
            width={50}
            className="rounded-full object-cover"
            rounded="rounded-full"
          />
        </header>
        <hgroup className="flex flex-col w-full mx-1 mb-1 pb-1 lg:pb-0 lg:mb-0 lg:my-0 lg:py-0 font-sora">
          <div className="flex flex-row justify-between">
            <h1>{username}</h1>
            <h6 className="text-xs">{`${lastChatDate.getDate()} ${
              lastChatDate.getMonth() + 1
            } ${lastChatDate.getFullYear()}`}</h6>
          </div>
          <p className="lg:text-sm text-xs">
            {lastChatSender} :{" "}
            {lastChat.length < 20
              ? lastChat
              : lastChat.substring(0, 20) + "..."}
          </p>
        </hgroup>
      </article>
    </Link>
  );
}
