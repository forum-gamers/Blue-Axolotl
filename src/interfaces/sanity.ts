export interface SanityGetContentListResponse {
  posts: SanityPostResponse[];
}

export interface SanityPostResponse {
  _rev: string;
  _id: string;
  categories: Category[];
  body: Body[];
  slug: Slug;
  mainImage: MainImage;
  _createdAt: Date;
  _type: string;
  title: string;
  _updatedAt: Date;
  author?: Author;
}

export interface Author {
  _ref: string;
  _type: string;
}

export interface Body {
  style: Style;
  _key: string;
  markDefs: any[];
  children: Child[];
  _type: BodyType;
}

export enum BodyType {
  Block = "block",
}

export interface Child {
  marks: string[];
  text: string;
  _key: string;
  _type: ChildType;
}

export enum ChildType {
  Span = "span",
}

export enum Style {
  H3 = "h3",
  Normal = "normal",
}

export interface Category {
  _key: string;
  _ref: string;
  _type: string;
}

export interface MainImage {
  _type: string;
  asset: Author;
}

export interface Slug {
  current: string;
  _type: string;
}
