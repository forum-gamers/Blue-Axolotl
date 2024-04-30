import ModalInput from "@/components/molleculs/form/modalInput";
import { MdAddAPhoto } from "@/components/atoms/icons/md";

export default function CreatePost() {
  return (
    <form className="w-full bg-gradient-to-bl lg:from-lg-blue bg-lg-blue to-xl-blue dark:from-d-lg-blue lg:dark:bg-d-lg-blue dark:to-d-xl-blue h-24 z-50 rounded-md flex flex-col justify-between">
      <ModalInput
        placeHolder="create your post"
        className="h-12 shadow-lg max-w-2xl bg-xs-blue dark:bg-d-xs-blue"
      >
        <div className="w-full flex flex-col px-2 py-2 m-2 lg:from-lg-blue bg-lg-blue to-xl-blue dark:from-d-lg-blue lg:dark:bg-d-lg-blue dark:to-d-xl-blue">
          <textarea
            className="sec p-3 h-60 border border-sm-blue dark:border-d-sm-blue outline-none"
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
      </ModalInput>
    </form>
  );
}
