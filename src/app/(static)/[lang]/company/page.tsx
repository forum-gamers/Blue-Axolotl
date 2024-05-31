import Container from "@/components/commons/Container";
import PageHeading from "@/components/commons/Header/PageHeading";
import { LANGUAGE } from "@/constants";
import type { BlogPageProps } from "@/interfaces/blog";
import type { Metadata } from "next";

export default function Page({ params: { lang } }: BlogPageProps) {
  return (
    <Container data-aos="fade-left">
      <PageHeading title={lang === "en-US" ? "About us" : "Tentang kami"} />
    </Container>
  );
}

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return LANGUAGE.map((lang) => ({ lang }));
}

export function generateMetadata({
  params: { lang },
}: BlogPageProps): Metadata {
  const domain = process.env.DOMAIN as string;
  return {
    title: lang === "en-US" ? "About us" : "Tentang kami",
    description: "",
    keywords: [
      "forum gamers",
      "article",
      "blog",
      "social media",
      "gamer social media",
    ],
    authors: {
      name: "forum gamers",
    },
    openGraph: {
      type: "profile",
      description: "",
      title: lang === "en-US" ? "About us" : "Tentang kami",
      emails: "forumgamersindo@gmail.com",
    },
    robots: {
      nocache: true,
      index: true,
      follow: true,
      googleBot: {
        nocache: true,
        index: true,
      },
    },
    alternates: {
      canonical: `${domain}/en-US/company`,
      languages: {
        id: `${domain}/id-ID/company`,
        en: `${domain}/en-US/company`,
      },
    },
  };
}
