import CardPost from "@/components/posts/CardPost";
import { CardContent } from "@/components/ui/card";
import { getUserPostsWithMedia } from "../actions";

export default async function MediaPage() {
  const {
    data: { getMyPost: userPosts },
  } = await getUserPostsWithMedia();
  const posts = userPosts.filter((post) => post.media && post.media.length);

  return (
    <CardContent className="flex flex-col p-0 gap-2 w-full">
      {posts.map((post) => (
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
