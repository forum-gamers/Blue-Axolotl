import { SlArrowDown, SlArrowUp } from "@/components/atoms/icons/sl";
import type { MouseEventHandler } from "react";

export interface ArrowBtnProps {
  open: boolean;
  onOpenClick: MouseEventHandler;
  onCloseClick: MouseEventHandler;
}

export default function ArrowBtn({
  open,
  onCloseClick,
  onOpenClick,
}: ArrowBtnProps) {
  return open ? (
    <SlArrowDown
      onClick={onOpenClick}
      size={20}
      className="dark:text-d-xl-blue text-xl-blue cursor-pointer hover:bg-sm-blue hover:rounded-2xl"
    />
  ) : (
    <SlArrowUp
      onClick={onCloseClick}
      size={20}
      className="dark:text-d-xl-blue text-xl-blue cursor-pointer hover:bg-sm-blue hover:rounded-2xl"
    />
  );
}
