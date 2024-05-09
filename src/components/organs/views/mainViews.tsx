import MainFooter from "@/components/atoms/footer/mainFooter";
import Loading from "@/components/atoms/loaders/pageLoader";
import { getServerSideSession } from "@/helper/session";
import type { ChildrenProps } from "@/interfaces";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import MobileHeader from "../header/mobileHeader";
import InitPage from "../hoc/initPage";
import Sidebar from "../sidebar/mainSidebar";
const ChatViews = dynamic(() => import("./chatViews"), {
  ssr: false,
  loading: () => <div style={{ bottom: "0", right: "0" }}>Loading...</div>,
});

export interface MainViewsProps extends ChildrenProps {
  readMode?: boolean;
}

export default async function MainViews({
  readMode,
  children,
}: MainViewsProps) {
  const sessionServer = await getServerSideSession();
  if (!sessionServer) return redirect("/login");
  return (
    <InitPage>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col justify-center bg-xl-blue dark:bg-d-xl-blue h-full w-full overflow-hidden">
          <header className="flex w-full flex-col justify-center lg:flex-row lg:gap-5 lg:hidden">
            {!readMode && <MobileHeader />}
          </header>
          <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-72 lg:min-h-screen lg:max-w-7xl mx:auto flex-1">
            {children}
          </main>
          {!readMode && <Sidebar />}
          <aside className="flex w-full justify-between z-10">
            <Suspense>
              <ChatViews />
            </Suspense>
          </aside>
        </div>
        <MainFooter />
      </Suspense>
    </InitPage>
  );
}
