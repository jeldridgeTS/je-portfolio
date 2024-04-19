"use client";

import ProjectsButton from "./ProjectsButton";
import AboutMeButton from "./AboutMeButton";
import ExperienceButton from "./ExperienceButton";

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
