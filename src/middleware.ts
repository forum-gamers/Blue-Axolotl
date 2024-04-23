import { LANGUAGE } from "@/constants";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  switch (true) {
    case isStartWith(request, "/blog"): {
      const { pathname } = request.nextUrl;
      const pathnameHasLocale = LANGUAGE.some(
        (locale) =>
          pathname.startsWith(`/blog/${locale}/`) ||
          pathname === `/blog/${locale}`
      );

      if (pathnameHasLocale) return;

      request.nextUrl.pathname = `${pathname}/en-US`;
      return NextResponse.redirect(request.nextUrl);
    }
    default:
      return NextResponse.next();
  }
}

function isStartWith(request: NextRequest, path: string) {
  return request.nextUrl.pathname.startsWith(path);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
