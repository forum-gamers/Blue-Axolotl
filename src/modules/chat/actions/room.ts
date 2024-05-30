"use server";

import type { UserProfile } from "@/interfaces/profile";
import type { ChatResp, GetMyRoomChatListProps, Room } from "../interfaces";
import type { Pagination } from "@/interfaces";
import { getAccessToken, Query } from "@/actions";
import { GETMYFOLLOWING } from "@/queries/user/follow";
import { GETROOMBYUSERID } from "@/queries/chat/room";

export const getMyRoomChatList = async ({
  type = "All",
}: GetMyRoomChatListProps): Promise<Room[]> => {
  console.log("get room");
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
  console.log("getchat");
  try {
    return [];
  } catch (err) {
    return [];
  }
};

export const getFriendList = async ({
  page = 1,
  limit = 10,
}: Pagination): Promise<UserProfile[]> => {
  console.log("getfriend");
  //TODO
  try {
    return (
      (
        await Query<{ getMyFollowing: UserProfile[] }>({
          query: GETMYFOLLOWING,
          context: {
            headers: {
              access_token: await getAccessToken(),
            },
          },
          variables: {
            page,
            limit,
          },
        })
      )?.data?.getMyFollowing ?? []
    );
  } catch (err) {
    return [];
  }
};

export const createChat = async (formData: FormData): Promise<Room> => {
  console.log("create");
  return {} as Room;
};

export const getRoomByUserId = async (userId: string) => {
  try {
    const { data, errors } = await Query<{ getRoomByUserId: Room }>({
      query: GETROOMBYUSERID,
      context: {
        headers: {
          access_token: await getAccessToken(),
        },
      },
      variables: {
        userId,
      },
    });

    if (errors?.length) throw new Error(errors[0].message);

    return {
      data: data?.getRoomByUserId,
      message: "success",
    };
  } catch (err: any) {
    return {
      data: null,
      message: err?.message ?? "unexpected error",
    };
  }
};
