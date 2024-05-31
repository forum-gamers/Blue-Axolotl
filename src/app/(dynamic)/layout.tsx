import type { ChildrenProps } from "@/interfaces";
import MainLayout from "@/layouts/main.layout";
import MainViews from "./components/MainViews";

export default function Layout({ children }: ChildrenProps) {
  return (
    <MainLayout>
      <MainViews>{children}</MainViews>
    </MainLayout>
  );
}
