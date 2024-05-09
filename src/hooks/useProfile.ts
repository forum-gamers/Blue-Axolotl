import type { UserProfile } from "@/interfaces/profile";
import { create } from "zustand";

export interface InitialUserProfileState {
  profile: UserProfile;
}

export interface InitialUserProfileAction {
  setProfile: (profile: UserProfile) => void;
}

const useProfile = create<InitialUserProfileState & InitialUserProfileAction>()(
  (set) => ({
    profile: {} as UserProfile,
    setProfile: (profile) => set({ profile }),
  })
);

export default useProfile;
