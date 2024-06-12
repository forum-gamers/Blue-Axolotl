import { getUserProfile } from "@/actions/profile";
import MainFooter from "@/components/atoms/footer/mainFooter";
import Loading from "@/components/atoms/loaders/pageLoader";
import type { ChildrenProps } from "@/interfaces";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import MobileHeader from "../header/mobileHeader";
import InitPage from "../hoc/initPage";
import Sidebar from "../sidebar/mainSidebar";
import { redirect } from "next/navigation";
import ApolloClientProvider from "@/providers/apolloClient.provider";
const ChatViews = dynamic(() => import("@/modules/chat"), {
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
  const data = await getUserProfile();
  //TODO UNCOMMENT
  // if (!data) return redirect("/login");

  return (
    <InitPage user={data}>
      <Suspense fallback={<Loading />}>
        <ApolloClientProvider>
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
        </ApolloClientProvider>
      </Suspense>
    </InitPage>
  );
}
