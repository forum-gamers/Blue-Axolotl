import { create } from "zustand";
import type { CacheChat, ChatResp, ChatTab, Room } from "../interfaces";

export interface InitialState {
  isOpen: boolean;
  activeTab: ChatTab;
  privateChats: Room[];
  groupChats: Room[];
  activeRoomChat: ChatResp[];
  cacheChats: CacheChat[];
}

export interface InitialAction {
  toggleChat(): void;
  changeTab(tab: ChatTab): void;
  setPrivateChats(rooms: Room[]): void;
  setGroupChats(rooms: Room[]): void;
  setActiveRoomChat(chats: ChatResp[]): void;
  setCache(roomId: string, chats: ChatResp[]): void;
}

const useChat = create<InitialState & InitialAction>()((set) => ({
  isOpen: false,
  activeTab: "Private",
  privateChats: [],
  groupChats: [],
  activeRoomChat: [],
  cacheChats: [],
  toggleChat: () => set((prev) => ({ isOpen: !prev.isOpen })),
  changeTab: (tab) => set({ activeTab: tab }),
  setPrivateChats: (val) =>
    set((prev) => ({ privateChats: [...prev.privateChats, ...val] })),
  setGroupChats: (val) =>
    set((prev) => ({ groupChats: [...prev.groupChats, ...val] })),
  setActiveRoomChat: (val) => set(() => ({ activeRoomChat: val })),
  setCache: (roomId, chats) =>
    set((prev) => ({ cacheChats: [...prev.cacheChats, { roomId, chats }] })),
}));

export const CHATTAB: ChatTab[] = ["Private", "Group"];

export default useChat;
