import type { SidebarMenu } from "@/interfaces/components";
import { BiHomeSmile } from "@/components/atoms/icons/bi";
import { GiChampions } from "@/components/atoms/icons/gi";
import { AiOutlineTeam } from "@/components/atoms/icons/ai";
import { IoIosSearch } from "@/components/atoms/icons/io";

export const SIDEBAR_MENU: SidebarMenu[] = [
  {
    title: "Home",
    href: "/",
    icon: <BiHomeSmile size={20} />,
    isExternal: false,
  },
  {
    title: "Search",
    href: "/explore",
    icon: <IoIosSearch size={20} />,
    isExternal: false,
  },
  {
    title: "Team",
    href: "/team",
    icon: <AiOutlineTeam size={20} />,
    isExternal: false,
  },
  {
    title: "Tournament",
    href: "/tournament",
    icon: <GiChampions size={20} />,
    isExternal: false,
  },
];
