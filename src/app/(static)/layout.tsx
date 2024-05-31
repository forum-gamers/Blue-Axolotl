import BlogFooter from "@/components/commons/Footer/BlogFooter";
import Loading from "@/components/commons/loaders/pageLoader";
import InitPage from "@/components/commons/InitPage";
import BlogNavbar from "@/components/commons/nav/BlogNavbar";
import type { ChildrenProps } from "@/interfaces";
import MainLayout from "@/layouts/main.layout";
import { Suspense } from "react";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <MainLayout>
      <InitPage user={null}>
        <Suspense fallback={<Loading />}>
          <BlogNavbar />
          <main className="flex flex-col justify-center h-full w-full no-scrollbar scroll-smooth transition-all duration-300 mx:auto ">
            {children}
          </main>
          <BlogFooter />
        </Suspense>
      </InitPage>
    </MainLayout>
  );
}
