import { getServerSideSession } from "@/helper/session";
import type { CustomSession } from "@/interfaces";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const userId = ((await getServerSideSession()) as CustomSession).user?.id;
  return redirect("/profile/" + userId);
}
