import { getServerSideSession } from "@/helper/session";
import type { CustomSession } from "@/interfaces";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const username = ((await getServerSideSession()) as CustomSession).user
    ?.username;
  return redirect("/profile/" + username);
}
