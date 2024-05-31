import { getUserProfile } from "@/actions/profile";
import MainFooter from "@/components/commons/Footer/MainFooter";
import Loading from "@/components/commons/loaders/pageLoader";
import type { ChildrenProps } from "@/interfaces";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import MobileHeader from "@/components/commons/Header/MobileHeader";
import InitPage from "@/components/commons/InitPage";
import Sidebar from "@/components/commons/Sidebar/MainSidebar";
import { redirect } from "next/navigation";
const ChatViews = dynamic(() => import("./ChatViews"), {
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
  const { data } = await getUserProfile();
  if (!data) return redirect("/login");
  const { me } = data;
  return (
    <InitPage user={me}>
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
