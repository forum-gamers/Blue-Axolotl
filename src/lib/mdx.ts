import "server-only";
import { readFileSync, existsSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import type { Language } from "@/interfaces";
import { LANGUAGE } from "@/constants";
import type { SupportedGame } from "@/interfaces/blog";

export interface MdxFiles {
  slug: string;
  frontMatter: Record<string, any>;
  content: string;
}

export const mdxFiles = (() => {
  const dirPath = join(process.cwd(), "src", "components", "md");
  if (!existsSync(dirPath))
    throw new Error("Missing directory in components/md");

  const files: Record<
    Language,
    Record<SupportedGame, MdxFiles[]>
  > = {} as Record<Language, Record<SupportedGame, MdxFiles[]>>;

  LANGUAGE.forEach((lang) => {
    files[lang] = {} as any;
    const gamesDirr = readdirSync(join(dirPath, lang)) as SupportedGame[];
    if (!gamesDirr.length)
      throw new Error("Missing directory in components/md");

    gamesDirr.forEach((dir) => {
      const title = readdirSync(join(dirPath, lang, dir));
      if (!title.length)
        throw new Error("Missing directory games in components/md");

      files[lang][dir] = title.map((game) => {
        const source = readFileSync(join(dirPath, lang, dir, game), "utf-8");
        if (!source)
          throw new Error("Missing directory in components/md/${mdx files}");

        const { content, data } = matter(source);
        const mdxCompiler = remark()
          .use(remarkParse)
          .use(remarkGfm)
          .use(remarkMdx);
        const mdxContent = mdxCompiler.processSync(content).toString();

        return {
          slug: dir,
          frontMatter: data,
          content: mdxContent,
        };
      });
    });
  });

  return files;
})();

export const loadMdxFiles = (
  slug: string,
  game: SupportedGame,
  lang: Language = "en-US"
): MdxFiles | null => {
  if (mdxFiles[lang] && mdxFiles[lang][game]) {
    const foundFile = mdxFiles[lang][game].find((el) => el.slug === slug);
    return foundFile || null;
  }
  return null;
};

export const getMdxList = (lang: Language) => mdxFiles[lang];

export const getMdxBlogListByGame = (lang: Language, game: SupportedGame) =>
  getMdxList(lang)[game];
