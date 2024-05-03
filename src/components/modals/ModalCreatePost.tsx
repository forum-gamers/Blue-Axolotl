"use client";

import { BsLayoutTextWindow } from "@/components/atoms/icons/bs";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function ModalCreatePost() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full shadow-lg bg-xs-blue dark:bg-d-xs-blue flex items-center justify-center w-full ">
          <div className="flex flex-row justify-evenly gap-1 items-center m-4">
            <BsLayoutTextWindow size={20} />

            <div
              className={`w-full rounded-md m-1 text-opacity-35 flex justify-start items-center cursor-default px-2 h-12 shadow-lg max-w-2xl bg-xs-blue dark:bg-d-xs-blue`}
              onClick={() => setOpen(!open)}
            >
              Create your post
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-row justify-center fixed w-[80%] border lg:mr-12 mt-10 rounded-md h-72 transition-all duration-500 shadow-lg max-w-2xl">
        tes
      </DialogContent>
    </Dialog>
  );
}
