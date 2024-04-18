"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import ProjectsButton from "./ProjectsButton";
import AboutMeButton from "./AboutMeButton";
import ExperienceButton from "./ExperienceButton";

const MobileNavBarLinks = () => {
  const handleClick = () => {
    document.getElementById("my-drawer-3").click();
  };

  return (
    <>
      <li>
        <ExperienceButton onClick={handleClick} />
      </li>
      <li>
        <ProjectsButton onClick={handleClick}>Projects</ProjectsButton>
      </li>
      <li>
        <AboutMeButton onClick={handleClick}>About Me</AboutMeButton>
      </li>
    </>
  );
};

export default MobileNavBarLinks;
