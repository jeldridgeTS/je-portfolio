import Link from "next/link";
import dotsHoriz from "/home/jeld/Development/portfolio/je-portfolio/public/dots-horizontal.svg";
import Image from "next/image";

export default function NavBarLinks() {
  return (
    <div className="flex flex-row">
      <Link
        className="btn btn-outline btn-primary rounded-full self-center h-full no-animation shadow-none border-2 font-semibold"
        href="aboutme"
      >
        Let's Connect
      </Link>
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <figure className="self-center px-4 m-2">
          <Image
            role="button"
            tabIndex={0}
            src={dotsHoriz}
            height={48}
            width={48}
            alt="github"
          />
        </figure>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Experience</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">About Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
