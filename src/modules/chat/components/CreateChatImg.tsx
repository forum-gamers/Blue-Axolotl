"use client";

import AddData from "@/components/static/svg/add-folder";
import { type MouseEventHandler, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PopupUserList from "./PopupUserList";

export default function CreateChatImg() {
  const [open, setOpen] = useState<boolean>(false);

  const onClickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer justify-center items-center flex">
          <button onClick={onClickHandler}>
            <AddData h="125px" w="125px" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center p-1 m-2 max-w-xl bg-slate-100 dark:bg-slate-900">
        <section className="flex m-0 p-0 flex-col justify-center h-96 rounded-md overflow-y-hidden">
          <PopupUserList />
        </section>
      </DialogContent>
    </Dialog>
  );
}
