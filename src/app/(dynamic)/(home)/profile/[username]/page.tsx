import type { ProfileProps } from "@/interfaces/profile";
import { getUserProfile } from "./action";
import Container from "@/components/atoms/contents/container";

export default async function ProfilePage({
  params: { username },
}: {
  params: ProfileProps;
}) {
  const userProfile = await getUserProfile(username);
  return (
    <Container>
      <h1>{userProfile}</h1>
    </Container>
  );
}
export const dynamic = "force-dynamic";
