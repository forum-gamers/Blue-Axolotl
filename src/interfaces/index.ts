import type { ReactNode } from "react";

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
