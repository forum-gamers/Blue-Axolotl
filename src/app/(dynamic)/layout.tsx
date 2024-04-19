import MainViews from "@/components/organs/views/mainViews";
import type { ChildrenProps } from "@/interfaces";
import MainLayout from "@/layouts/main.layout";

export default function Layout({ children }: ChildrenProps) {
  return (
    <MainLayout>
      <MainViews>{children}</MainViews>
    </MainLayout>
  );
}
