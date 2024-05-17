import { USERPROFILEQUERY } from "@/queries/profile";
import { getContext, Query } from ".";
import type { UserProfile } from "@/interfaces/profile";

export const getUserProfile = async () => {
  return await Query<{ me: UserProfile }>({
    query: USERPROFILEQUERY,
    context: await getContext(),
  });
};
