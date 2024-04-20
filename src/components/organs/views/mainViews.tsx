"use client";

import type { ChildrenProps } from "@/interfaces";
import { Suspense, useEffect } from "react";
import AOS from "aos";
import Loading from "@/components/atoms/loaders/pageLoader";
import Sidebar from "../sidebar/mainSidebar";
import MobileHeader from "../header/mobileHeader";
import MainFooter from "@/components/atoms/footer/mainFooter";
import dynamic from "next/dynamic";
import InfinitySpin from "@/components/atoms/loaders/infinitySpin";
const ChatViews = dynamic(() => import("./chatViews"), {
  ssr: false,
  loading: () => (
    <div className="bottom-0 right-0">
      <InfinitySpin />
    </div>
  ),
});

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
        <aside className="flex w-full justify-between">
          <Suspense>
            <ChatViews />
          </Suspense>
        </aside>
      </div>
      <MainFooter />
    </Suspense>
  );
}
