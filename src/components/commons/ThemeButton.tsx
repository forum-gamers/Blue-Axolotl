"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { BsCloudMoon, BsCloudSun } from "@/components/commons/Icons/bs";
import useMount from "@/hooks/useMount";

export default function ThemeToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const mount = useMount();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return !mount ? null : (
    <motion.button
      id="dark-mode-switcher"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`rounded-xl p-2 ${
        resolvedTheme === "light" ? "bg-white" : "bg-neutral-800"
      }`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {resolvedTheme === "light" ? <BsCloudSun /> : <BsCloudMoon />}
    </motion.button>
  );
}
