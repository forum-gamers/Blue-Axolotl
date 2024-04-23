import { useEffect, useRef, useState, useTransition } from "react";

export interface BaseHandlerParams {
  page: number;
  limit: number;
}

export type UseScrollProps<
  state = any,
  handlerParams = BaseHandlerParams & any
> = {
  initialState: state[];
  handler: (param: handlerParams) => Promise<state[]>;
  params?: object;
  fetchLimit?: number;
};

export default function useScroll({
  initialState,
  handler,
  params,
  fetchLimit = 20,
}: UseScrollProps) {
  const [data, setData] = useState<typeof initialState>(initialState);
  const [pending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entities) => {
        if (entities[0].isIntersecting)
          startTransition(async () => {
            if (data.length) {
              const newData = await handler({
                ...params,
                page: Math.floor(data.length / 20 + 1),
                limit: fetchLimit,
              });
              if (newData.length) setData((prev) => [...prev, ...newData]);
            }
          });
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [data, fetchLimit, handler, params]);

  return {
    pending,
    data,
    ref,
  };
}
