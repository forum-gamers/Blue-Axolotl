import Container from "@/components/atoms/contents/container";
import type { BlogPageProps } from "@/interfaces/blog";
import { getMdxList } from "@/lib/mdx";

export default function Page({ params: { lang } }: BlogPageProps) {
  const lists = getMdxList(lang);
  return (
    <Container
      data-aos="fade-left"
      as="section"
      className="flex justify-center"
    >
      {Object.keys(lists).map((el) => (
        <div key={el}>{el}</div>
      ))}
    </Container>
  );
}
