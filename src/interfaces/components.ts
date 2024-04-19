import type { ReactNode } from "react";

export interface SidebarMenu {
  title: string;
  href: string;
  icon: ReactNode;
  isExternal: boolean;
}
