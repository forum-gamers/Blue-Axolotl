import Container from "@/components/atoms/contents/container";
import ModalCreatePost from "@/components/modals/ModalCreatePost";
import FriendsPosts from "@/components/posts/FriendsPosts";
import { getServerSideSession } from "@/helper/session";

export default async function Page() {
  return (
    <Container className="w-full flex flex-col gap-10">
      <div className="w-full flex lg:justify-start lg:w-[90%] h-full xl:w-full xl:justify-center justify-center ">
        <ModalCreatePost />
      </div>
      <FriendsPosts />
    </Container>
  );
}

export const dynamic = "force-dynamic";
