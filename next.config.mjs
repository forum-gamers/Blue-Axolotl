import remarkGfm from "remark-gfm";
import createMdx from "@next/mdx";
const withMDX = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  env: {
    DOMAIN: process.env.DOMAIN,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
};

export default withMDX(nextConfig);
