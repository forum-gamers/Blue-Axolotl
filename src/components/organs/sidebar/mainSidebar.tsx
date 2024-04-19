"use client";

import { useState } from "react";
import SidebarProfile from "../header/sidebarProfile";
import { SIDEBAR_MENU } from "@/constants/sidebar";
import MenuItem from "@/components/molleculs/menu/menuItem";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import B from "@/components/static/images/image.png";
import ThemeToggleBtn from "@/components/atoms/button/themeBtn";
import Copyright from "@/components/atoms/footer/copyright";

export default function Sidebar() {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <aside
      className="fixed bottom-0 left-0 top-0 z-30 hidden w-16 flex-col bg-lg-blue dark:bg-d-lg-blue items-center justify-between overflow-hidden rounded-r-2xl px-2 py-4 shadow-sm-blue transition-all duration-500 hover:w-64 hover:items-stretch hover:p-4 hover:transition-all hover:duration-500 dark:shadow-d-xs-blue lg:flex"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <section
        className={`flex h-64 ${hover ? "items-start" : "items-center"}`}
      >
        {hover ? (
          <SidebarProfile />
        ) : (
          <article className="flex flex-col items-center gap-8">
            <div className="z-10 rounded-full border-2 border-white shadow-md dark:border-neutral-800">
              <LazyLoadImg
                src={B}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <ThemeToggleBtn />
          </article>
        )}
      </section>
      <nav className="mb-6 mt-4 flex flex-col gap-3 border-t border-neutral-300 pt-4">
        {SIDEBAR_MENU.map((el) => (
          <MenuItem key={el.title} {...el} isHover={hover} />
        ))}
      </nav>
      <Copyright isHover={hover} />
    </aside>
  );
}
