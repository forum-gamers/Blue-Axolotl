import StaticViews from "@/components/organs/views/staticPageViews";
import type { ChildrenProps } from "@/interfaces";
import MainLayout from "@/layouts/main.layout";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <MainLayout>
      <StaticViews>{children}</StaticViews>
    </MainLayout>
  );
}
