"use client";

import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import useMobile from "@/hooks/useMobile";
import useMenu from "@/hooks/useMenu";
import { useEffect } from "react";
import IMG from "@/components/static/images/logo-blue.png";
import MobileMenuButton from "@/components/molleculs/button/mobileMenuBtn";
import MobileSidebarMenu from "@/components/molleculs/menu/mobileSidebarMenu";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import ThemeToggleBtn from "@/components/atoms/button/themeBtn";

export default function MobileHeader() {
  const isMobile = useMobile();
  const { isOpen, toggleMenu } = useMenu();
  const imgSize = isMobile ? 40 : 100;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section className="flex flex-col rounded-b-md px-4 py-4 shadow-sm lg:hidden">
      <div
        className={`flex w-full justify-between ${
          isOpen ? "items-start" : "items-center"
        }`}
      >
        <div
          className={`flex ${
            isOpen ? "flex-col space-y-3" : "flex-row space-x-3"
          }`}
        >
          <div className="z-10 w-max rounded-full border-2 border-white shadow-md dark:border-neutral-800">
            <LazyLoadImg
              src={IMG}
              alt="profile"
              width={isOpen ? 80 : imgSize * 0.9}
              height={isOpen ? 80 : imgSize * 0.9}
              rounded="rounded-full"
            />
          </div>
          <hgroup className="mt-1 flex items-center gap-2">
            <Link href="/" passHref>
              <h2 className="font-sora flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">
                Forum Gamers
              </h2>
            </Link>
          </hgroup>
        </div>
        {isMobile && (
          <div
            className={clsx(
              "mt-2 flex items-center gap-5 lg:hidden",
              isOpen &&
                "h-[120px] flex-col-reverse !items-end justify-between pb-1"
            )}
          >
            <ThemeToggleBtn />
            <MobileMenuButton expand={isOpen} setExpand={toggleMenu} />
          </div>
        )}
      </div>
      {isMobile && (
        <AnimatePresence>{isOpen && <MobileSidebarMenu />}</AnimatePresence>
      )}
    </section>
  );
}
