import Container from "@/components/atoms/contents/container";
import { getServerSideSession } from "@/helper/session";
import type { CustomSession } from "@/interfaces";
import type { ProfileProps } from "@/interfaces/profile";
import { redirect } from "next/navigation";

export default async function ProfilePage({
  params: { userId },
}: {
  params: ProfileProps;
}) {
  const loggedInUserId = ((await getServerSideSession()) as CustomSession).user
    ?.id;

  if (loggedInUserId == userId) return redirect("/profile");

  return (
    <Container>
      <h1>userProfile</h1>
    </Container>
  );
}
export const dynamic = "force-dynamic";

// export function generateMetadata({
//   params: { userId },
// }: {
//   params: ProfileProps;
// }) {
//   return {
//     title: username,
//     description: bio,
//   };
// }
