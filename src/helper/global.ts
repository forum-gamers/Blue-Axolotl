import type { FileInputValue } from "@/interfaces";
import type { Dispatch, SetStateAction } from "react";

export const formatInteger = (int: number) => {
  let str = int.toString();
  return int < 10 ? `0${str}` : str;
};

export const extractFile = (
  file: File,
  handler: Dispatch<SetStateAction<FileInputValue>>
) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onprogress = (ev) => {
    if (ev.lengthComputable)
      handler((prev) => ({ ...prev, progress: (ev.loaded / ev.total) * 100 }));
  };

  reader.onload = () => {
    handler((prev) => ({
      ...prev,
      file,
      fileReader: reader.result,
    }));
  };
};
