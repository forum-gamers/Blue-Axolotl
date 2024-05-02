"use client";

import type { Language } from "@/interfaces";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense } from "react";

export default function NavFooter() {
  const { lang } = useParams<{ lang: Language }>();

  return (
    <>
      <nav className="pt-1 pb-0 lg:pt-4 flex flex-col space-y-1 lg:space-y-2">
        <h6 className="text-lg font-bold antialiased cursor-default underline underline-offset-4">
          Services
        </h6>
        <Suspense>
          {["Post", "Tournament", "Create Team"].map((el) => (
            <Link
              prefetch
              href={`/${lang}/services/${el
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              key={el}
              className="hover:cursor-pointer text-sm no-underline hover:underline-offset-1 hover:underline"
            >
              {el}
            </Link>
          ))}
        </Suspense>
      </nav>
      <nav className="pt-1 pb-0 lg:pt-4 space-y-1 lg:space-y-2 flex flex-col">
        <h6 className="text-lg font-bold antialiased cursor-default underline underline-offset-4">
          Company
        </h6>
        <Suspense>
          <Link
            href={`/${lang}/company/`}
            prefetch
            className="hover:cursor-pointer text-sm no-underline hover:underline-offset-1 hover:underline"
          >
            About us
          </Link>
        </Suspense>
      </nav>
    </>
  );
}
