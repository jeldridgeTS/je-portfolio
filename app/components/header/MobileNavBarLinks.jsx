"use client";

import ProjectsButton from "@components/buttons/ProjectsButton";
import AboutMeButton from "@components/buttons/AboutMeButton";
import ExperienceButton from "@components/buttons/ExperienceButton";

const MobileNavBarLinks = () => {
  const handleClick = () => {
    console.log("CLICKED");
    document.getElementById("my-drawer-3").click();
  };

  return (
    <>
      <li>
        <ExperienceButton onClick={handleClick} />
      </li>
      <li>
        <ProjectsButton onClick={handleClick} />
      </li>
      <li>
        <AboutMeButton onClick={handleClick} />
      </li>
    </>
  );
};

export default MobileNavBarLinks;
