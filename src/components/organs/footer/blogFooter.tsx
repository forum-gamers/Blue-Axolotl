import BlogFooterImg from "@/components/molleculs/contents/blogFooterImg";
import NavFooter from "@/components/molleculs/nav/navFooter";
import { SOCIALMEDIA } from "@/constants/social";
import Link from "next/link";

export default function BlogFooter() {
  return (
    <footer
      id="blog-footer"
      className="w-full font-sora bottom-0 relative mx-auto lg:h-40 px-12 mt-4 pb-4 rounded-t-xl bg-lg-blue dark:bg-d-lg-blue grid grid-cols-1 lg:grid-cols-4 lg:gap-6 items-center space-y-4 lg:space-y-0"
    >
      <BlogFooterImg />
      <section className="lg:col-span-3 flex flex-col lg:flex-row justify-evenly space-y-4 lg:space-y-0">
        <NavFooter />
        <nav className="pt-1 pb-0 lg:pt-4 space-y-1 lg:space-y-2 flex flex-col">
          <h6 className="text-lg font-bold antialiased cursor-default underline underline-offset-4">
            Find us
          </h6>
          {SOCIALMEDIA.map((el) => (
            <Link
              href={el.href}
              target="_blank"
              key={el.title}
              className="hover:cursor-pointer text-sm no-underline hover:underline-offset-1 hover:underline"
            >
              <div className="flex flex-wrap gap-3 items-center">
                {el.icon}
                {el.title}
              </div>
            </Link>
          ))}
        </nav>
      </section>
    </footer>
  );
}
