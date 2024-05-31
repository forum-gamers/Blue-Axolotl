"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlignJustify, LogIn, Menu } from "lucide-react";

export default function MobileBtnBlogNavbar() {
  // const [open, setOpen] = useState<boolean>(false);

  const navigations = [
    { href: "/en-US/blog", title: "Blog" },
    { href: "/login", title: "Login" },
    { href: "/register", title: "Register" },
    { href: "/user", title: "Profile" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center sm:hidden" asChild>
        <Button variant="ghost">
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup className="flex flex-col border-sm-blue dark:border-d-sm-blue bg-lg-blue dark:bg-d-base-blue justify-start items-start gap-2 ">
            {navigations.map((el) => (
              <Link
                href={el.href}
                key={el.title}
                className="flex justify-center gap-2 items-center border-1 p-2 border-black"
              >
                {el.title}
              </Link>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </AnimatePresence>
    </DropdownMenu>
  );
}
