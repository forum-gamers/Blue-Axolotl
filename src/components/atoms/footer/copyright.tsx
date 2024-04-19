import LogoImg from "../img/logoImg";

export interface CopyrightProps {
  isHover: boolean;
}

export default function Copyright({ isHover }: CopyrightProps) {
  return (
    <footer className="font-sora flex items-center gap-1 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-400">
      {isHover ? (
        <>
          <span>© {new Date().getFullYear()}</span>
          <span>by</span>
          <span className="cursor-pointer hover:dark:text-neutral-400">
            Forum Gamers
          </span>
        </>
      ) : (
        <LogoImg
          className="animate-pulse rounded-full object-cover object-center"
          width={175}
          height={175}
        />
      )}
    </footer>
  );
}
