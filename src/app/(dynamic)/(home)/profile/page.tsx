// import { getProfile } from "./action";

import Container from "@/components/atoms/contents/container";
import { getUserProfile } from "./actions";

export default async function ProfileUserPage() {
  const { data, error } = await getUserProfile();

  return (
    <Container className="w-full flex flex-col gap-10 min-h-screen">
      <section className="w-full">tes</section>
    </Container>
  );
}
