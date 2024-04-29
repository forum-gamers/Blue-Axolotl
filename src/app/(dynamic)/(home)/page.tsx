import Container from "@/components/atoms/contents/container";
import CreatePost from "@/components/organs/form/createPost";

export default function Page() {
  return (
    <Container data-aos="fade-left">
      <CreatePost />
    </Container>
  );
}

export const dynamic = "force-dynamic";
