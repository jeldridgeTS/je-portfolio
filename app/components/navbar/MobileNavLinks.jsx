"use client";

import Link from "next/link";

const MobileNavLinks = () => {
  const handleClick = () => {
    document.getElementById("my-drawer-3").click();
  };

  return (
    <>
      <li>
        <Link onClick={handleClick} href="projects" className="btn btn-primary">
          Projects
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} href="aboutme" className="btn btn-primary">
          About Me
        </Link>
      </li>
    </>
  );
};

export default MobileNavLinks;
