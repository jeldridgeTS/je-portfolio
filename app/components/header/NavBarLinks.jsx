import Link from "next/link";
import dots from "/public/dots-horizontal.svg";
import Image from "next/image";

export default function NavBarLinks() {
  return (
    <div className="flex flex-row place-content-end">
      <Link
        className="connectBtn btn btn-info btn-outline rounded-full self-center h-full no-animation shadow-none border-2 font-semibold"
        href="aboutme"
      >
        LET'S CONNECT
      </Link>
      <figure className="self-center px-4">
        <div
          className="dropdown dropdown-bottom dropdown-end"
          style={{ display: "block" }}
        >
          <Image
            role="button"
            tabIndex={0}
            src={dots}
            height={48}
            width={48}
            alt="github"
          />
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
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
      </figure>
    </div>
  );
}
