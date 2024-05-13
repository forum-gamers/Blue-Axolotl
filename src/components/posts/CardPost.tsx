import { Heart, MessageSquareMore } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import TruncateCardText from "../commons/TruncateCardText";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

type CardPostProps = {
  title: string;
  description: string;
  image?: string;
  author: string;
  authorAvatar: string;
  date: Date;
  className?: string;
};

export default function CardPost({
  title,
  description,
  image,
  author,
  authorAvatar,
  date,
  className,
}: CardPostProps) {
  return (
    <Card className={`bg-blue-200 dark:bg-d-sm-blue ${className}`}>
      <CardHeader className="flex flex-row gap-2 items-center space-y-0 pb-2">
        <Avatar>
          <AvatarImage src={authorAvatar} alt={`${author} avatar`} />
          <AvatarFallback>
            {author.split(" ")[0][0]}
            {author.split(" ")[1][0] || ""}
          </AvatarFallback>
        </Avatar>
        <div className="w-full  text-xs">
          <p>{author}</p>
          <p>{moment(date).fromNow()}</p>
        </div>
      </CardHeader>
      {/* <Separator className="my-4  bg-slate-500 w-full " /> */}
      <CardContent className="mt-4">
        <TruncateCardText text={description} />
        {image && (
          <div className="justify-center flex w-full mt-5">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className=""
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="hover:bg-slate-200 gap-2">
          <Heart /> Like
        </Button>
        <Button variant="ghost" className="hover:bg-slate-200 gap-2">
          <MessageSquareMore /> Comment
        </Button>
      </CardFooter>
    </Card>
  );
}
