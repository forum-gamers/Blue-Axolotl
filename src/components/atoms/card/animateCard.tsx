"use client";

import { motion } from "framer-motion";
import type { BasicCardProps } from "./basicCard";
import BasicCard from "./basicCard";

export default function AnimateCard({
  children,
  className = "",
  as,
  ...rest
}: BasicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <BasicCard {...rest} className={className} as={as}>
        {children}
      </BasicCard>
    </motion.div>
  );
}
