import Container from "@/components/atoms/contents/container";
import ModalCreatePost from "@/components/modals/ModalCreatePost";

export default function Page() {
  return (
    <Container data-aos="fade-left">
      <div className="w-full flex justify-center lg:justify-start">
        <ModalCreatePost />
      </div>
    </Container>
  );
}

export const dynamic = "force-dynamic";
