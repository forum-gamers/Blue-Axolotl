"use client";

import type { ChildrenProps } from "@/interfaces";
import LoadingOverlay, {
  type LoadingOverLayProps,
} from "react-loading-overlay-ts";

export type LoadingWrapperProps = LoadingOverLayProps &
  ChildrenProps & {
    loading: boolean;
  };

export default function LoadingWrapper({
  children,
  loading,
  ...rest
}: LoadingWrapperProps) {
  return (
    <LoadingOverlay {...rest} spinner active={loading}>
      {children}
    </LoadingOverlay>
  );
}
