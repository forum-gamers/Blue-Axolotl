import { createChat } from "../actions/room";

export default function FormChat() {
  return (
    <form
      action={createChat}
      className="flex bg-lg-blue dark:bg-xl-blue  border-2 rounded-md flex-col p-4 max-w-md min-w-[300px] gap-2 transition-all duration-100"
    >
      <div>
        <label htmlFor="userId">User</label>
      </div>
    </form>
  );
}
