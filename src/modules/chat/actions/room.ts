"use server";

import type { ChatResp, GetMyRoomChatListProps, Room } from "../interfaces";

export const getMyRoomChatList = async ({
  type = "All",
}: GetMyRoomChatListProps): Promise<Room[]> => {
  //TODO
  try {
    // return room chat with only last chat in array chats
    return [];
  } catch (err) {
    return [];
  }
};

export const getChatByRoomIds = async (roomId: string): Promise<ChatResp[]> => {
  //TODO
  try {
    return [];
  } catch (err) {
    return [];
  }
};
