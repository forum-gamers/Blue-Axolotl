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
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  env: {
    DOMAIN: process.env.DOMAIN,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    SANITY_STUDIO_SANITY_PROJECTID: process.env.SANITY_STUDIO_SANITY_PROJECTID,
    SANITY_STUDIO_SANITY_DATASET: process.env.SANITY_STUDIO_SANITY_DATASET,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  compiler: {
    reactRemoveProperties: { properties: ["renderNode"] },
  },
};

export default withMDX(nextConfig);
