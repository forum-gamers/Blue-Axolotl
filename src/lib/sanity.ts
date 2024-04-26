import type { Language } from "@/interfaces";
import type { SupportedGame } from "@/interfaces/blog";
import type { SanityPostResponse } from "@/interfaces/sanity";
import { createClient } from "@sanity/client";
import SanityImg from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_SANITY_PROJECTID,
  dataset: process.env.SANITY_STUDIO_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "v2022-03-07",
});

export default client;

export const getContentList = async (lang: Language) => {
  const { signal } = new AbortController();
  return await client.fetch<SanityPostResponse[]>(
    `*[_type == 'post' && 
    count(categories[_ref in 
      *[_type == 'category' && title == '${lang}']._id
    ]) == 1
  ]
    `,
    {},
    { signal }
  );
};

export const getContentListPerGame = async (
  lang: Language,
  game: SupportedGame
) => {
  const { signal } = new AbortController();
  return await client.fetch<SanityPostResponse[]>(
    `*[_type == 'post' && 
    count(categories[_ref in 
      *[_type == 'category' && title in ['${lang}', '${game.replaceAll(
      "-",
      " "
    )}']]._id
    ]) == 2
  ]`,
    {},
    {
      signal,
    }
  );
};

export const getBySlug = async (
  lang: Language,
  game: SupportedGame,
  slug: string
) => {
  const { signal } = new AbortController();
  const [data] = await client.fetch<
    (SanityPostResponse & { authorName: string })[]
  >(
    `*[_type == 'post' && slug.current == '${slug}' &&
        count(categories[_ref in 
          *[_type == 'category' && title in ['${lang}', '${game.replaceAll(
      "-",
      " "
    )}']]._id
        ]) == 2
      ] {
        'authorName': *[_type == 'author' && _id == ^.author._ref][0].name,
          ...
      }`,
    {},
    { signal }
  );
  return !!data ? data : null;
};

const imgLoader = SanityImg(client);

export const loadSanityImg = (source: SanityImageSource) =>
  imgLoader.image(source);
