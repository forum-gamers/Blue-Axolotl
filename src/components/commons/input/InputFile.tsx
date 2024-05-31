import { MdAddAPhoto } from "react-icons/md";

export default function InputFile({ name }: { name: string }) {
  return (
    <div className="flex flex-row justify-start gap-4">
      <label htmlFor={name}>
        <MdAddAPhoto size={20} className="cursor-pointer" />
      </label>
      <input
        type="file"
        name={name}
        id={name}
        className="hidden"
        multiple
        accept="image/*, video/*"
      />
    </div>
  );
}
