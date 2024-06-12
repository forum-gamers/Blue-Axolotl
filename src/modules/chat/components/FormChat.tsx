"use client";

import {
  useRef,
  useState,
  type ChangeEvent,
  type MouseEventHandler,
} from "react";
import { createChat } from "../actions/room";
import { MdAddAPhoto } from "@/components/atoms/icons/md";
import ArrowBtn from "@/components/molleculs/button/arrowBtn";
import { SlPaperPlane } from "@/components/atoms/icons/sl";
import clsxm from "@/lib/clsxm";
import type { FileInputValue } from "@/interfaces";
import { extractFile } from "@/helper/global";

export default function FormChat() {
  const [expand, setExpand] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<FileInputValue>({
    fileReader: "",
    progress: 0,
    file: {} as File,
  });

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const formFile = e.target?.files;
      if (formFile && formFile.length) {
        const file = formFile[0];
        extractFile(file, setFile);
      }
    }
  };

  const expandHandler: MouseEventHandler = (e) => {
    e.preventDefault();

    setExpand(!expand);
  };

  const actionHandler = async (formData: FormData) => {
    if (file.fileReader)
      formData.append("base64-file", file.fileReader.toString());
    await createChat(formData);
    formRef.current?.reset();
  };

  const disableBtn = !(
    !!formRef?.current &&
    (formRef.current.message.value || formRef.current.file.value)
  );

  return (
    <form
      ref={formRef}
      action={actionHandler}
      className={clsxm(
        `flex justify-end z-50 fixed bottom-1 bg-lg-blue dark:bg-xl-blue border-2 transition-all duration-300 rounded-md flex-col p-4 w-[17rem] lg:w-[23rem] gap-2 ${
          expand ? "lg:h-[33.5rem] h-[13rem]" : "h-32"
        }`
      )}
    >
      <div className="flex flex-row">
        <textarea
          name="message"
          placeholder="type message"
          className={`${
            expand ? "lg:h-[30rem] h-36" : "h-16"
          } px-2 py-2 border rounded-md shadow-sm w-80 transition-all duration-300`}
        />
        <div className="flex flex-col justify-between py-2 space-y-2">
          <button className="mx-3 cursor-pointer">
            <ArrowBtn
              open={expand}
              onOpenClick={expandHandler}
              onCloseClick={expandHandler}
            />
          </button>
          <button
            className={`cursor-pointer mx-3 ${disableBtn && "opacity-20"}`}
            type="submit"
            disabled={disableBtn}
          >
            <SlPaperPlane size={20} className="cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex flex-row px-1">
        <label htmlFor="file-upload">
          <MdAddAPhoto size={20} className="cursor-pointer" />
        </label>
        <input
          onChange={handleFile}
          id="file-upload"
          className="hidden"
          name="file"
          type="file"
          accept=".png,.jpg,.jpeg,.gif,.bmp,.mp4,.avi,.mkv,.mov"
        />
      </div>
    </form>
  );
}
