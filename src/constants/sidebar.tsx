import type { SidebarMenu } from "@/interfaces/components";
import { BiHomeSmile, BiEditAlt } from "@/components/commons/Icons/bi";
import { GiChampions } from "@/components/commons/Icons/gi";
import { AiOutlineTeam } from "@/components/commons/Icons/ai";
import { IoIosSearch } from "@/components/commons/Icons/io";
import { User } from "lucide-react";

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
    title: "Blog",
    href: "/en-US/blog",
    icon: <BiEditAlt size={20} />,
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
  {
    title: "Profile",
    href: "/profile",
    icon: <User />,
    isExternal: false,
  },
];
