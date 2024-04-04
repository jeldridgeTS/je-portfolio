import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <li>
        <Link href="projects" className="btn btn-primary">
          Projects
        </Link>
      </li>
      <li>
        <Link href="aboutme" className="">
          About Me
        </Link>
      </li>
    </>
  );
}
