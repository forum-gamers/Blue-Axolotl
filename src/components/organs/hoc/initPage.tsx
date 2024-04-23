"use client";

import type { ChildrenProps } from "@/interfaces";
import { useEffect } from "react";
import AOS from "aos";

export default function InitPage({ children }: ChildrenProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return children;
}
