"use client";

import { useTheme } from "next-themes";
import WHITELOGO from "@/components/static/images/logo-white.png";
import BLUELOGO from "@/components/static/images/logo-blue.png";
import LazyLoadImg from "./lazyLoadImg";

export interface LogoImgProps {
  className: string;
  rounded?: string;
  width: number;
  height: number;
}

export default function LogoImg({
  className,
  rounded,
  width,
  height,
  ...rest
}: LogoImgProps) {
  const { resolvedTheme } = useTheme();

  return (
    <LazyLoadImg
      {...rest}
      src={resolvedTheme === "light" ? BLUELOGO : WHITELOGO}
      alt="forum-gamers-logo"
      className={className}
      width={width}
      height={height}
    />
  );
}
