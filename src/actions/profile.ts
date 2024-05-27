import type { UserProfile } from "@/interfaces/profile";
import { ME } from "@/queries/user/user";
import { getContext, Query } from ".";

export const getUserProfile = async () => {
  return (
    (
      await Query<{ me: UserProfile | null }>({
        query: ME,
        context: await getContext(),
      })
    )?.data?.me || null
  );
};
