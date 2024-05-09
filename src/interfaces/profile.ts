export interface Profile {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  following: boolean;
}

export interface ProfileProps {
  userId: string;
}

export type BlogPageProps<searchParams = Record<string, string>> = {
  params: { slug: string };
  searchParams?: searchParams;
};

export interface UserProfile {
  id: string;
  fullname: string;
  username: string;
  email: string;
  isVerified: boolean;
  bio: string;
  imageUrl: string;
  imageId: string;
  backgroundImageUrl: string;
  backgroundImageId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
