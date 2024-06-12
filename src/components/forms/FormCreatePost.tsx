import { uploadPost } from "@/app/(dynamic)/(home)/action";
import type { ImageType } from "@/types";
import Image from "next/image";
import { useState, type ChangeEvent, type SetStateAction } from "react";
import { MdAddAPhoto } from "@/components/atoms/icons/md";

type FormCreatePostProps = {
  setOpen: (args: boolean) => void;
};

export default function FormCreatePost({ setOpen }: FormCreatePostProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<ImageType[]>([]);
  const [video, setVideo] = useState({});
  const [text, setText] = useState("");

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(event.target.files || []));
    const fileList = Array.from(event.target.files || []);
    const videoUploaded = fileList.find((file) => file.type.includes("video"));

    const base64Promises = fileList.map((file) => convertToBase64(file));
    const base64Images = await Promise.all(base64Promises);

    const images = fileList.map((file, index) => ({
      base64: base64Images[index],
      filename: file.name,
    })) as ImageType[];

    setImages((prevImages) => [...prevImages, ...images]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await uploadPost({ text, files: images });
      setOpen(false);
    } catch (error) {}
  };

  const checkConstraintsFileUpload = (files: File[]) => {
    // if(files.length > 1 && files)
  };
  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col px-2 py-2 m-2 lg:from-lg-blue bg-lg-blue to-xl-blue dark:from-d-lg-blue lg:dark:bg-d-lg-blue dark:to-d-xl-blue"
    >
      <textarea
        className="sec  p-3 h-60 border border-sm-blue dark:border-d-sm-blue outline-none"
        spellCheck
        onChange={(e) => setText(e.target.value)}
        name="text-post"
        placeholder="Describe everything about this post here"
      />
      {images.length > 0 && (
        <div className="flex flex-wrap w-full gap-2 p-2 justify-center items-center">
          {images.map((image, idx) => (
            <Image
              src={image.base64}
              alt={image.filename}
              width={250}
              height={250}
              key={idx}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row my-2 py-2 px-2 justify-between items-center">
        <div className="flex flex-row justify-start gap-4">
          <label htmlFor="image-upload">
            <MdAddAPhoto size={20} className="cursor-pointer" />
          </label>
          <input
            type="file"
            name="image-upload"
            id="image-upload"
            className="hidden"
            multiple
            accept="image/*, video/*"
            onChange={handleImageChange}
          />
        </div>
        <button className="dark:bg-d-xs-blue bg-xs-blue h-12 w-20 rounded-md hover:bg-xl-blue hover:dark:bg-d-xl-blue">
          POST
        </button>
      </div>
    </form>
  );
}
