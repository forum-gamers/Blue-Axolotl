import type { UserProfile } from "@/interfaces/profile";
import { ME } from "@/queries/user/user";
import { getContext, Query } from ".";

export const getUserProfile = async () => {
  return await Query<{ me: UserProfile }>({
    query: ME,
    context: await getContext(),
  });
};
