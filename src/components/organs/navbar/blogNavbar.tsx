import MobileBtnBlogNavbar from "@/components/molleculs/button/mobileBtnBlogNavbar";
import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import LOGO from "@/components/static/images/logo-blue.png";
import Link from "next/link";
import ThemeToggleBtn from "@/components/atoms/button/themeBtn";
import ProfileBtn from "@/components/molleculs/button/profileBtn";

export default function BlogNavbar() {
  return (
    <header className="dark:bg-d-base-blue bg-base-blue rounded-xl mx-5 py-1 my-3">
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
                  href="/"
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeToggleBtn />

            <ProfileBtn />
          </div>
        </section>
      </nav>
    </header>
  );
}
