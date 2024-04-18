"use client";

import ProjectsButton from "./ProjectsButton";
import AboutMeButton from "./AboutMeButton";
import ExperienceButton from "./ExperienceButton";
import NavLink from "./NavLink";

export default function NavBarLinks() {
  return (
    <>
      <ExperienceButton />
      <ProjectsButton />
      <AboutMeButton />
    </>
  );
}
