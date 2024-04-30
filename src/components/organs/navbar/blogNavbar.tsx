import MobileBtnBlogNavbar from "@/components/molleculs/button/mobileBtnBlogNavbar";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import LOGO from "@/components/static/images/logo-blue.png";
import Link from "next/link";
import BlogNavbarBtn from "../button/blogNavbarBtn";

export default function BlogNavbar() {
  return (
    <header className="bg-gradient-to-bl from-base-blue via-sm-blue to-md-blue dark:from-d-base-blue dark:via-d-sm-blue dark:to-d-md-blue  rounded-xl mx-5 py-1 my-3">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <section className="relative flex h-16 items-center justify-between">
          <MobileBtnBlogNavbar />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <LazyLoadImg alt="logo" className="h-8 w-auto" src={LOGO} />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 font-sora">
                <Link
                  href="/blog" //TODO balikin ke home lagi href nya nanti
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-xl-blue hover:dark:bg-d-xl-blue hover:opacity-50"
                  prefetch
                >
                  Home
                </Link>
                {false && (
                  <>
                    <Link
                      href="/"
                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-xl-blue hover:dark:bg-d-xl-blue hover:opacity-50"
                    >
                      Login
                    </Link>
                    <Link
                      href="/"
                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-xl-blue hover:dark:bg-d-xl-blue hover:opacity-50"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <BlogNavbarBtn />
        </section>
      </nav>
    </header>
  );
}
