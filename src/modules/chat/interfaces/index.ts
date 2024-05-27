import type { Pagination } from "@/interfaces";
import type { UserProfile } from "@/interfaces/profile";

export interface Room {
  type: ChatTab;
  users: UserRoom[];
  image?: string;
  imageId?: string;
  name: string;
  owner: string;
  _id: string;
  chat: ChatResp[];
}

export interface UserRoom {
  userId: string;
  addedAt: string;
  role: string;
}

export interface ChatResp {
  _id: string;
  senderId: string;
  message: string;
  image?: string;
  imageId?: string;
  mediaType: string;
  isRead: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  sender: UserProfile;
}

export type ChatTab = "Private" | "Group" | "Room";

export interface CacheChat {
  roomId: string;
  chats: ChatResp[];
}

export interface GetMyRoomChatListProps extends Pagination {
  type?: ChatTab | "All";
}
