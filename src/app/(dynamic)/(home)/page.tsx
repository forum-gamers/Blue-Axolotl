import Container from "@/components/atoms/contents/container";
import ModalCreatePost from "@/components/modals/ModalCreatePost";
import FriendsPosts from "@/components/posts/FriendsPosts";
import { getServerSideSession } from "@/helper/session";

export default async function Page() {
  return (
    <Container className="w-full flex flex-col gap-10 lg:mt-10 lg:pr-10 lg:max-w-xl xl:max-w-3xl">
      <div className="w-full max-w-3xl">
        <ModalCreatePost />
      </div>
      <FriendsPosts />
    </Container>
  );
}

export const dynamic = "force-dynamic";
