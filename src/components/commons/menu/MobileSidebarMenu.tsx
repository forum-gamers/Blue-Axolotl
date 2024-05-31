import { motion } from "framer-motion";
import Breakline from "@/components/commons/Breakline";
import { SIDEBAR_MENU } from "@/constants/sidebar";
import SidebarMenu from "./SidebarMenu";

export default function MobileSidebarMenu() {
  return (
    <motion.nav
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Breakline className="mt-2" />
      <SidebarMenu lists={SIDEBAR_MENU} />
    </motion.nav>
  );
}
