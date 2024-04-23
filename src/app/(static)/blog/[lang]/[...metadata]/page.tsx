import UseMdxComponent from "@/app/mdx-components";
import Container from "@/components/atoms/contents/container";
import { LANGUAGE } from "@/constants";
import type { BlogPageProps } from "@/interfaces/blog";
import { loadMdxFiles } from "@/lib/mdx";
import { notFound } from "next/navigation";

export default function Page({
  params: {
    metadata: [slug, game],
    lang,
  },
}: BlogPageProps) {
  if (!lang || !slug || !LANGUAGE.includes(lang)) notFound();

  const content = loadMdxFiles(slug, game, lang);
  if (!content) notFound();

  return (
    <Container data-aos="fade-left">
      <UseMdxComponent>{content.content.toString() as any}</UseMdxComponent>
    </Container>
  );
}
