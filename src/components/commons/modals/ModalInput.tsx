"use client";

import type { ChildrenProps } from "@/interfaces";
import { useState } from "react";
import { BsLayoutTextWindow } from "@/components/commons/Icons/bs";

export interface ModalInputProps extends ChildrenProps {
  placeHolder: string;
  className?: string;
}

export default function ModalInput({
  placeHolder,
  children,
  className,
}: ModalInputProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-row justify-evenly gap-1 items-center m-4">
        <BsLayoutTextWindow size={20} />
        <div
          className={`w-full rounded-md m-1 text-opacity-35 flex justify-start items-center cursor-default px-2 ${className}`}
          onClick={() => setOpen(!open)}
        >
          {placeHolder}
        </div>
      </div>
      {open && (
        <dialog
          className="flex flex-row justify-center fixed w-[80%] border lg:mr-12 mt-10 rounded-md h-72 transition-all duration-500 shadow-lg max-w-2xl"
          onMouseLeave={() => setOpen(!open)}
        >
          {children}
        </dialog>
      )}
    </>
  );
}
