"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";

export default function TabPosts() {
  const params = useParams<{ username: string }>();
  const pathName = usePathname();
  const username = params?.username;
  const links = [
    { name: "Posts", href: `/profile/${username}` },
    { name: "Medias", href: `/profile/${username}/medias` },
    { name: "Likes", href: `/profile/${username}/likes` },
  ];

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);
  return (
    <CardHeader className="flex flex-row items-center gap-4">
      {links.map((link) => (
        <Button
          asChild
          key={link.name}
          variant="ghost"
          className={
            pathName === link.href
              ? "dark:bg-green-300 dark:text-blue-800 bg-blue-800 text-white"
              : ""
          }
        >
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
    </CardHeader>
  );
}
