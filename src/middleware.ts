import { LANGUAGE } from "@/constants";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  switch (true) {
    case isStartWith(request, "/blog"): {
      const { pathname } = request.nextUrl;

      const pathnameHasLocale = LANGUAGE.some(
        (locale) => locale === pathname.split("/")[2]
      );

      if (pathnameHasLocale) return;

      const url = pathname.split("/");
      url[2] = "en-US";
      request.nextUrl.pathname = url.join("/");
      return NextResponse.redirect(request.nextUrl);
    }
    case !isStartWith(request, "/blog"): {
      //TODO utk sementara,selagi halaman dynamic nya blm beres
      if (process.env.NODE_ENV === "production") {
        request.nextUrl.pathname = "/blog/en-US";
        return NextResponse.redirect(request.nextUrl);
      }
      return NextResponse.next();
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
