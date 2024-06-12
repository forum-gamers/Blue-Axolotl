import LazyLoadImg from "@/components/atoms/img/lazyLoadImg";
import { DEFAULT_PROFILE_IMG } from "@/constants";

export interface ChatTextProps {
  imageUrl?: string;
  position: "right" | "left";
  message: string;
}

export default function ChatText({
  position,
  imageUrl = "",
  message,
}: ChatTextProps) {
  const cond = position === "left";
  return (
    <div className="my-4 w-full h-max-full flex flex-row justify-start overflow-y-visible">
      <div className={`z-50 absolute ${cond ? "left-2" : "right-2"}`}>
        <LazyLoadImg
          src={imageUrl || DEFAULT_PROFILE_IMG}
          alt="profile"
          width={30}
          height={30}
          className={`rounded-full object-cover object-center`}
        />
      </div>
      <article className="flex justify-center flex-row mt-1">
        <div
          className={`w-4/5 bg-lg-blue dark:bg-d-lg-blue p-2 relative ${
            cond ? "rounded-s-md ml-auto" : "rounded-e-md mr-auto"
          }`}
        >
          <hgroup
            className={`flex flex-col gap-2 ${
              cond ? "justify-start" : "justify-end"
            }`}
          >
            <h3
              className={`text-base flex px-1 antialiased tabular-nums ${
                cond ? "justify-start" : "justify-end"
              }`}
            >
              {"guest"}
            </h3>
            <p
              className={`text-sm antialiased tabular-nums tracking-tighter leading-relaxed ${
                cond ? "text-left" : "text-right"
              } text-wrap whitespace-pre-line`}
            >
              {message}
            </p>
          </hgroup>
        </div>
      </article>
    </div>
  );
}
