import CardPost from "./CardPost";

async function getAllFriendsPosts() {
  return [
    {
      id: 1,
      title: "My first post",
      description: "This is my first post",
      image: "https://source.unsplash.com/random/400x300",
      author: "John Doe",
      authorAvatar: "https://source.unsplash.com/random/100x200",
      date: new Date(),
    },
    {
      id: 2,
      title: "My second post",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      image: "https://source.unsplash.com/random/500x500",
      author: "Jane Doe",
      authorAvatar: "https://source.unsplash.com/random/100x200",
      date: new Date(),
    },
    {
      id: 3,
      title: "My third post",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta iusto est, repellat amet nam dolorem optio doloremque consequatur illum quisquam esse voluptas ex asperiores suscipit perspiciatis hic odio minima.",
      author: "Bob Smith",
      authorAvatar: "https://source.unsplash.com/random/100x200",
      date: new Date(),
    },
  ];
}

export default async function FriendsPosts() {
  const posts = await getAllFriendsPosts();

  return (
    <div className="flex flex-col gap-2 w-full ">
      {posts.map((post) => (
        <CardPost
          key={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
          author={post.author}
          authorAvatar={post.authorAvatar}
          date={post.date}
        />
      ))}
    </div>
  );
}
