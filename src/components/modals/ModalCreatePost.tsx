"use client";

import { BsLayoutTextWindow } from "@/components/atoms/icons/bs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import FormCreatePost from "../forms/FormCreatePost";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function ModalCreatePost() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="sm:max-w-3xl flex items-center " asChild>
        <div
          className={cn(
            "flex h-24 flex-row justify-evenly items-center max-w-3xl px-8 py-20 gap-4 w-full bg-gradient-to-blue lg:from-lg-blue bg-lg-blue to-xl-blue dark:from-d-lg-blue lg:dark:bg-d-lg-blue dark:to-d-xl-blue rounded-lg",
            open && "hidden"
          )}
        >
          <BsLayoutTextWindow size={24} />
          <Button className="rounded-md flex-1 justify-start bg-xs-blue dark:bg-d-xs-blue hover:bg-xs-blue h-24 hover:dark:bg-d-xs-blue">
            Create your post
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-row justify-center fixed w-[80%] lg:mr-12 mt-10 rounded-md min-h-72 transition-all duration-500 shadow-lg max-w-2xl bg-white dark:bg-black p-0">
        <FormCreatePost setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
