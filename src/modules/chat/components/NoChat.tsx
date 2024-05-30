import CreateChatImg from "./PopupUserList";

export default function NoChatData() {
  return (
    <figure className="mt-12 lg:mt-20 space-y-2 lg:space-y-4">
      <CreateChatImg />
      <figcaption className="text-xs lg:text-sm text-opacity-70 flex justify-center">
        You have no chat yet,create one?
      </figcaption>
    </figure>
  );
}
