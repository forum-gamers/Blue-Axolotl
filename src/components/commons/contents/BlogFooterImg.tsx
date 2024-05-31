import Link from "next/link";
import LogoImg from "@/components/commons/Images/LogoImg";

export default function BlogFooterImg() {
  return (
    <aside className="flex flex-col justify-center items-start pt-1 pb-0 lg:pt-4">
      <LogoImg width={75} height={75} />
      <p className="font-medium">
        Copyright ©{" "}
        <Link href="/" prefetch className="cursor-pointer font-bold">
          {" "}
          Forum Gamers{" "}
        </Link>{" "}
        {new Date().getFullYear()}
        <br />
        All right reserved
      </p>
    </aside>
  );
}
