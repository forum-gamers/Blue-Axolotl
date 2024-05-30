"use client";

import AddData from "@/components/static/svg/add-folder";
import { type MouseEventHandler, useState, useTransition } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useScroll from "@/hooks/useScroll";
import { getFriendList } from "../actions/room";
import UserSelectCard from "@/components/commons/userSelectCard";
import OvalLoader from "@/components/atoms/loaders/ovalLoader";
import useChat from "../hooks/useChat";

export default function CreateChatImg() {
  const [open, setOpen] = useState<boolean>(false);
  const [transition, startTransition] = useTransition();
  const { pending, data, ref } = useScroll({
    initialState: [],
    handler: getFriendList,
  });
  const { changeTab, setActiveRoom } = useChat();

  const onClickHandler: MouseEventHandler = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const selectCardHandler =
    (id: string): MouseEventHandler =>
    (e) => {
      e.preventDefault();
      startTransition(async () => {
        changeTab("Room");
      });
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
      <DialogContent>
        <section className="flex space-y-2 bg-lg-blue dark:bg-d-lg-blue m-0 p-0 flex-col">
          {!!data.length &&
            data.map((el) => (
              <UserSelectCard
                onClickHandler={selectCardHandler(el.id)}
                data={el}
                key={el.id}
              />
            ))}
          <div ref={ref}>{(pending || transition) && <OvalLoader />}</div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
