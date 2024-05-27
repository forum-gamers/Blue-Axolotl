import Loading from "@/components/atoms/loaders/pageLoader";
import type { ChildrenProps } from "@/interfaces";
import { Suspense } from "react";
import BlogFooter from "../footer/blogFooter";
import InitPage from "../hoc/initPage";
import BlogNavbar from "../navbar/blogNavbar";

export default async function StaticViews({ children }: ChildrenProps) {
  return (
    <InitPage user={null}>
      <Suspense fallback={<Loading />}>
        <BlogNavbar />
        <main className="flex flex-col justify-center h-full w-full no-scrollbar scroll-smooth transition-all duration-300 mx:auto ">
          {children}
        </main>
        <BlogFooter />
      </Suspense>
    </InitPage>
  );
}
