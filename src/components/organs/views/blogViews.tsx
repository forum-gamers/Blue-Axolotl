"use client";

import {
  PortableText,
  type PortableTextBlock,
  type PortableTextReactComponents,
} from "@/components/atoms/contents/sanityPortableText";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import { loadSanityImg } from "@/lib/sanity";
import Link from "next/link";
import CodeBlockViews from "./codeBlockViews";

export interface BlogViewsProps {
  value: PortableTextBlock[];
  components?: Partial<PortableTextReactComponents>;
}

export const defaultComponent: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ children, value }) => (
      <Link
        {...value}
        className="cursor-pointer text-teal-600 hover:text-teal-400 hover:underline"
      >
        {children}
      </Link>
    ),
    code: ({ children, ...rest }) => (
      <CodeBlockViews {...rest}>{children}</CodeBlockViews>
    ),
  },
  types: {
    image: ({ value, isInline }) => (
      <LazyLoadImg
        src={loadSanityImg(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt="pic"
        width={isInline ? 100 : 800}
        height={isInline ? 100 : 800}
        {...value}
      />
    ),
  },
  block: {
    h1: ({ children, ...rest }) => (
      <h1
        className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300"
        {...rest}
      >
        {children}
      </h1>
    ),
    normal: ({ children }) => (
      <p className="dark:text-neutral-300 font-sora text-neutral-800 space-y-1">
        {children}
      </p>
    ),
    h2: ({ children, ...rest }) => (
      <h2
        className="font-sans text-xl font-medium dark:text-neutral-300"
        {...rest}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300">
        {children}
      </h4>
    ),
    blockquote: ({ children, ...rest }) => (
      <blockquote
        {...rest}
        className="text-md rounded-lg border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 py-3 pl-6 text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200"
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    ul: ({ children, ...rest }) => (
      <ul {...rest} className="list-disc space-y-3 pb-5 pl-10 font-sans">
        {children}
      </ul>
    ),
    ol: ({ children, ...rest }) => (
      <ol {...rest} className="list-decimal space-y-3 pb-5 pl-10 font-sans">
        {children}
      </ol>
    ),
  },
};

export default function BlogViews({
  value,
  components = defaultComponent,
}: BlogViewsProps) {
  return <PortableText value={value} components={components} />;
}
