"use client";

import type { ChildrenProps } from "@/interfaces";
import { Suspense, useEffect } from "react";
import AOS from "aos";
import Loading from "@/components/atoms/loaders/pageLoader";
import Sidebar from "../sidebar/mainSidebar";
import MobileHeader from "../header/mobileHeader";
import MainFooter from "@/components/atoms/footer/mainFooter";

export interface MainViewsProps extends ChildrenProps {
  readMode?: boolean;
}

export default function MainViews({ readMode, children }: MainViewsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-center bg-xl-blue dark:bg-d-xl-blue h-full w-full">
        <header className="flex w-full flex-col justify-center lg:flex-row lg:gap-5 lg:hidden">
          {!readMode && <MobileHeader />}
        </header>
        <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-72 lg:min-h-screen lg:max-w-[854px]">
          {children}
        </main>
        {!readMode && <Sidebar />}
      </div>
      <MainFooter />
    </Suspense>
  );
}
