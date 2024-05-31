"use client";

import type { ChildrenProps } from "@/interfaces";
import { useEffect } from "react";
import AOS from "aos";
import type { UserProfile } from "@/interfaces/profile";
import useProfile from "@/hooks/useProfile";

interface InitPageProps extends ChildrenProps {
  user: UserProfile | null;
}

export default function InitPage({ children, user }: InitPageProps) {
  const { setProfile } = useProfile();
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  useEffect(() => {
    if (user) setProfile(user);
  }, [user]);

  return children;
}
