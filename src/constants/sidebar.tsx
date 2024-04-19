import type { SidebarMenu } from "@/interfaces/components";
import { BiHomeSmile } from "@/components/atoms/icons/bi";

export const SIDEBAR_MENU: SidebarMenu[] = [
  {
    title: "Home",
    href: "/",
    icon: <BiHomeSmile size={20} />,
    isExternal: false,
  },
];
