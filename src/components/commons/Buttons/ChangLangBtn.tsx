"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoLanguage } from "@/components/commons/Icons/io5";
import Link from "next/link";
import type { Language } from "@/interfaces";
import { LANGUAGE } from "@/constants";

export default function ChangeLangBtn() {
  const pathname = usePathname();
  const [hover, setHover] = useState<boolean>(false);

  const generateUrl = (lang: Language) => {
    const urls = pathname?.split("/") || ["en-US", "id-ID"];
    urls[1] = lang;

    return urls.join("/");
  };

  return hover ? (
    <dialog
      onMouseLeave={() => setHover(false)}
      style={{ zIndex: "9999" }}
      className="flex no-scrollbar scroll-smooth relative h-20 w-40 rounded-xl flex-col py-1 px-1 text-gray-800 shadow-xl overflow-x-scroll overflow-y-visible origin-top-right bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      {LANGUAGE.map((el) => (
        <Link
          key={el}
          href={generateUrl(el)}
          prefetch
          style={{ zIndex: "9999" }}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          {el}
        </Link>
      ))}
    </dialog>
  ) : (
    <motion.button
      id="change-lang-btn"
      aria-label="Change Language Button"
      className="rounded-xl p-2 bg-white dark:bg-neutral-800"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onClick={() => setHover(!hover)}
    >
      <IoLanguage />
    </motion.button>
  );
}
