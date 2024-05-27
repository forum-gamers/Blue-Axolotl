import { getMyRoomChatList } from "./actions/room";
import ChatViews from "./components/chatViews";

export default async function Chat() {
  const rooms = await getMyRoomChatList({ type: "All" });
  return (
    <ChatViews
      privateChat={rooms.filter(({ type }) => type === "Private")}
      groupChat={rooms.filter(({ type }) => type === "Group")}
    />
  );
}
