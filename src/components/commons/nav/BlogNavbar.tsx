import MobileBtnBlogNavbar from "@/components/commons/Buttons/MobileBtnBlogNavbar";
import LazyLoadImg from "@/components/commons/Images/LazyLoadImg";
import LOGO from "@/components/static/images/logo-blue.png";
import Link from "next/link";
import BlogNavbarBtn from "../Buttons/blogNavbarBtn";
import { Button } from "@/components/ui/button";
const navigations = [
  { href: "/en-US/blog", title: "Blog" },
  { href: "/register", title: "Register" },
  { href: "/login", title: "Login" },
];

export default function BlogNavbar() {
  return (
    <header className="bg-gradient-to-bl from-base-blue via-sm-blue to-md-blue dark:from-d-base-blue dark:via-d-sm-blue dark:to-d-md-blue rounded-xl mx-5 py-1 my-3 ">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <section className="relative flex h-16 items-center justify-between">
          <MobileBtnBlogNavbar />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <LazyLoadImg alt="logo" className="h-8 w-auto" src={LOGO} />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 font-sora">
                {navigations.map((el) => (
                  <Button key={el.title} className="hover:bg-slate-100" asChild>
                    <Link href={el.href}>{el.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <BlogNavbarBtn />
        </section>
      </nav>
    </header>
  );
}
