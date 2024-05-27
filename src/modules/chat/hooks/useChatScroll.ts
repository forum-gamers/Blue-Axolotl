import { useEffect, useRef, useState, useTransition } from "react";
import useChat from "./useChat";
import { getMyRoomChatList } from "../actions/room";

export default function useChatScroll() {
  const {
    setGroupChats,
    setPrivateChats,
    activeTab,
    groupChats,
    privateChats,
  } = useChat();
  const [pending, startTransition] = useTransition();
  const [{ groupLimit, privateLimit }, setState] = useState<State>({
    groupLimit: false,
    privateLimit: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entity]) => {
        if (entity.isIntersecting)
          startTransition(async () => {
            switch (activeTab) {
              case "Group":
                {
                  if (!groupLimit) {
                    const data = await getMyRoomChatList({ type: "Group" });
                    if (!data.length)
                      setState((prev) => ({ ...prev, groupLimit: true }));
                    setGroupChats(data);
                  }
                }
                break;
              case "Private":
                {
                  if (!privateLimit) {
                    const data = await getMyRoomChatList({ type: "Private" });
                    if (!data.length)
                      setState((prev) => ({ ...prev, privateLimit: true }));
                    setPrivateChats(data);
                  }
                }
                break;
              default:
                break;
            }
          });
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [groupChats, privateChats]);

  return {
    ref,
    pending,
  };
}

export interface State {
  groupLimit: boolean;
  privateLimit: boolean;
}
