import { create } from "zustand";

export type ChatTab = "Private" | "Group";

export interface InitialState {
  isOpen: boolean;
  activeTab: ChatTab;
  privateChats: any[];
  groupChats: any[];
}

export interface InitialAction {
  toggleChat(): void;
  changeTab(tab: ChatTab): void;
  setPrivateChats(chats: any[]): void;
  setGroupChats(chats: any): void;
}

const useChat = create<InitialState & InitialAction>()((set) => ({
  isOpen: false,
  activeTab: "Private",
  privateChats: [],
  groupChats: [],
  toggleChat: () => set((prev) => ({ isOpen: !prev.isOpen })),
  changeTab: (tab) => set({ activeTab: tab }),
  setPrivateChats: (privateChats) => set({ privateChats }),
  setGroupChats: (groupChats) => set({ groupChats }),
}));

export const CHATTAB: ChatTab[] = ["Private", "Group"];

export default useChat;
