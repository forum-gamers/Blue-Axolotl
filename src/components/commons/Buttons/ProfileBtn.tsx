import LazyLoadImg from "@/components/commons/Images/LazyLoadImg";
import LOGO from "@/components/static/images/guest.png";
import Link from "next/link";

export default function ProfileBtn() {
  return (
    <div className="relative">
      <Link
        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        href={"/user"}
        prefetch
        passHref
      >
        <LazyLoadImg
          className="h-8 w-8 rounded-full"
          src={LOGO}
          alt="user image"
        />
      </Link>
    </div>
  );
}
