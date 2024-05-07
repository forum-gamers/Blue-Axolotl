export interface Profile {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  following: boolean;
}

export interface ProfileProps {
  username: string;
}

export type BlogPageProps<searchParams = Record<string, string>> = {
  params: { slug: string };
  searchParams?: searchParams;
};
