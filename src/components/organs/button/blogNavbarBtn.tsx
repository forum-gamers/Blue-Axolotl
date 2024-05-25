"use client";

import ThemeToggleBtn from "@/components/atoms/button/themeBtn";
import ChangeLangBtn from "@/components/molleculs/button/changLangBtn";
import { useParams } from "next/navigation";

export default function BlogNavbarBtn() {
  const { slug } = useParams<{ slug?: string }>() || { slug: undefined };
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {slug && <ChangeLangBtn />}
      <ThemeToggleBtn />
    </div>
  );
}
