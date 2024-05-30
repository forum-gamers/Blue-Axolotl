"use client";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import type { ChildrenProps } from "@/interfaces";
import { useState, type ReactNode } from "react";

export interface FormModalProps extends ChildrenProps {
  trigger: ReactNode;
}

export default function FormModal({ children, trigger }: FormModalProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
