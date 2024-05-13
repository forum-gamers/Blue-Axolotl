"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { CardHeader } from "../ui/card";

import { useParams } from "next/navigation";

export default function TabPosts() {
  const { username } = useParams<{ username: string }>();
  return (
    <CardHeader className="flex flex-row items-center gap-4">
      <Button asChild variant="ghost">
        <Link href={`/profile/${username}`}>Posts</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href={`/profile/${username}/medias`}>Medias</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href={`/profile/${username}/likes`}>Likes</Link>
      </Button>
    </CardHeader>
  );
}
