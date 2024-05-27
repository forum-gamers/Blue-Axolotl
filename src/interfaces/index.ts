import type { ReactNode } from "react";
import type { Session } from "next-auth";

export interface ChildrenProps {
  readonly children: ReactNode;
}

export type Language = "id-ID" | "en-US";

export interface OptionalChildrenProps {
  readonly children?: ReactNode;
}

export type PageProps<
  params = Record<string, string>,
  searchParams = Record<string, string>
> = {
  params: params & { lang: Language };
  searchParams?: searchParams;
};

export interface CustomSession extends Session {
  user?: {
    id?: string;
    name?: string | null;
    access_token?: string | null;
    username?: string | null;
    accountType?: string | null;
  };
}

export interface Pagination {
  page?: number;
  limit?: number;
}
