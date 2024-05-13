import type { ChildrenProps } from "@/interfaces";
import { getUserProfile } from "./actions";
import Container from "@/components/atoms/contents/container";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TruncateCardText from "@/components/commons/TruncateCardText";
import TabPosts from "@/components/profile/TabPosts";

export default async function Layout({ children }: ChildrenProps) {
  const { data, error } = await getUserProfile();

  return (
    <Container className="w-full flex flex-col gap-4 min-h-screen mt-0 lg:mt-10 lg:pr-10 lg:max-w-xl xl:max-w-3xl">
      {/**
       * header section
       */}
      <section className="w-full bg-slate-300 rounded-md dark:bg-slate-700 ">
        <div className="w-full">
          <Image
            src="https://source.unsplash.com/random/400x100"
            width={450}
            height={150}
            alt="banner"
            className="w-full rounded-md"
          />
          <Image
            src="https://source.unsplash.com/random/200x200"
            className="rounded-full -mt-10 ml-5"
            width={100}
            height={100}
            alt="profile-photo"
          />
        </div>
        <div className="flex flex-col w-full p-4">
          <p>John Doe</p>
          <p>PUBG-m pro player</p>
        </div>
      </section>

      {/**
       * section about
       */}
      <Card className="w-full bg-slate-300 dark:bg-slate-700 ">
        <CardHeader>About</CardHeader>
        <CardContent>
          <TruncateCardText
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            animi, nobis provident culpa voluptate repudiandae sed aliquam
            tempore ipsum iste totam minima voluptatibus optio nihil eius
            architecto aperiam eveniet reprehenderit perspiciatis in. In
            accusamus magni, nulla cumque eius aliquam exercitationem esse
            facilis! Quam ipsum iure perspiciatis modi provident commodi in."
          />
        </CardContent>
      </Card>

      <Card className="w-full bg-slate-300 dark:bg-slate-700">
        <TabPosts />

        {children}
      </Card>
    </Container>
  );
}
