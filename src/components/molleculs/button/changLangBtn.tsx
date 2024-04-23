"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoLanguage } from "@/components/atoms/icons/io5";
import Link from "next/link";
import type { Language } from "@/interfaces";
import { LANGUAGE } from "@/constants";

export default function ChangeLangBtn() {
  const pathname = usePathname();
  const [hover, setHover] = useState<boolean>(false);

  const generateUrl = (lang: Language) => {
    const urls = pathname.split("/");
    urls[2] = lang;

    return urls.join("/");
  };

  return hover ? (
    <dialog
      onMouseLeave={() => setHover(false)}
      style={{ zIndex: "9999" }}
      className="flex no-scrollbar scroll-smooth relative h-20 w-40 rounded-xl flex-col bg-xl-blue dark:bg-d-xl-blue my-0 py-1 px-1 text-gray-800 shadow-xl overflow-x-scroll overflow-y-visible origin-top-right bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      {LANGUAGE.map((el) => (
        <Link
          key={el}
          href={generateUrl(el)}
          prefetch
          style={{ zIndex: "9999" }}
          className="my-2 border-b-2 px-4 border-gray-100 font-semibold text-neutral-800 dark:text-neutral-300 hover:text-neutral-950 hover:dark:text-neutral-400"
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
      transition={{ duration: 0.3, delay: 0.3 }}
      onClick={() => setHover(!hover)}
    >
      <IoLanguage />
    </motion.button>
  );
}
