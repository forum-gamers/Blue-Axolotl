import CardPost from "@/components/posts/CardPost";
import { CardContent } from "@/components/ui/card";
import { getUserPostsWithMedia } from "./actions";
export default async function ProfileUserPage() {
  const {
    data: { getMyPost: userPosts },
  } = await getUserPostsWithMedia();
  return (
    <CardContent className="flex p-0 flex-col gap-2 w-full">
      {userPosts.map((post) => (
        <CardPost
          key={post._id}
          description={post.text}
          author={post.user.fullname}
          authorAvatar={post.user.imageUrl}
          date={post.createdAt}
          images={post.media}
        />
      ))}
    </CardContent>
  );
}
