import { LANGUAGE } from "@/constants";
import type { ChildrenProps, Language } from "@/interfaces";
// import { mdxFiles } from "@/lib/mdx";

export default function MetadataLayout({ children }: ChildrenProps) {
  return children;
}

// export async function generateStaticParams() {
//   const results: { lang: Language; slug: string }[] = [];
//   LANGUAGE.forEach((lang) => {
//     mdxFiles[lang].forEach(({ slug }) => {
//       results.push({
//         lang,
//         slug,
//       });
//     });
//   });
//   return results;
// }

export const dynamic = "force-static";
