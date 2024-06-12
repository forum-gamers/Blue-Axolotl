import { create } from "zustand";
import type { ChatResp, ChatTab, Room } from "../interfaces";

export interface InitialState {
  isOpen: boolean;
  activeTab: ChatTab;
  privateChats: Room[];
  groupChats: Room[];
  activeRoomChat: ChatResp[];
  activeRoomId: string;
}

export interface InitialAction {
  toggleChat(): void;
  changeTab(tab: ChatTab): void;
  setPrivateChats(rooms: Room[]): void;
  setGroupChats(rooms: Room[]): void;
  setActiveRoomChat(chats: ChatResp[]): void;
  setActiveRoom(roomId: string): void;
}

const useChat = create<InitialState & InitialAction>()((set) => ({
  isOpen: false,
  activeTab: "Private",
  privateChats: [],
  groupChats: [],
  activeRoomChat: [],
  activeRoomId: "",
  toggleChat: () => set((prev) => ({ isOpen: !prev.isOpen })),
  changeTab: (tab) => set({ activeTab: tab }),
  setPrivateChats: (val) =>
    set((prev) => ({ privateChats: [...prev.privateChats, ...val] })),
  setGroupChats: (val) =>
    set((prev) => ({ groupChats: [...prev.groupChats, ...val] })),
  setActiveRoomChat: (val) => set(() => ({ activeRoomChat: val })),
  setActiveRoom: (roomId) => set({ activeRoomId: roomId }),
}));

export const CHATTAB: ChatTab[] = ["Private", "Group"];

export default useChat;
