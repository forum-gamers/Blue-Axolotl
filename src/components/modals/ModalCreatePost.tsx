"use client";

import { BsLayoutTextWindow } from "@/components/atoms/icons/bs";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { MdAddAPhoto } from "react-icons/md";

export default function ModalCreatePost() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="sm:max-w-3xl flex items-center w-[97%] md:w-[80%]"
        asChild
      >
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
      <DialogContent className="flex flex-row justify-center fixed w-[80%] lg:mr-12 mt-10 rounded-md h-72 transition-all duration-500 shadow-lg max-w-2xl bg-white dark:bg-black p-0">
        <div className="w-full flex flex-col px-2 py-2 m-2 lg:from-lg-blue bg-lg-blue to-xl-blue dark:from-d-lg-blue lg:dark:bg-d-lg-blue dark:to-d-xl-blue">
          <textarea
            className="sec  p-3 h-60 border border-sm-blue dark:border-d-sm-blue outline-none"
            spellCheck
            placeholder="Describe everything about this post here"
          />
          <div className="flex flex-row my-2 py-2 px-2 justify-between items-center">
            <div className="flex flex-row justify-start gap-4">
              <MdAddAPhoto size={20} className="cursor-pointer" />
            </div>
            <button className="dark:bg-d-xs-blue bg-xs-blue h-12 w-20 rounded-md hover:bg-xl-blue hover:dark:bg-d-xl-blue">
              Send
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
