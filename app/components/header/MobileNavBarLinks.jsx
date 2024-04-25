"use client";

import ProjectsButton from "@components/buttons/ProjectsButton";
import AboutMeButton from "@components/buttons/AboutMeButton";
import ExperienceButton from "@components/buttons/ExperienceButton";

const MobileNavBarLinks = () => {
  const handleClick = () => {
    document.getElementById("my-drawer-3").click();
  };

  return (
    <>
      <li className="mobileDrawerBtns">
        <ExperienceButton onClick={handleClick} />
      </li>
      <li className="mobileDrawerBtns">
        <ProjectsButton onClick={handleClick} />
      </li>
      <li className="mobileDrawerBtns">
        <AboutMeButton onClick={handleClick} />
      </li>
    </>
  );
};

export default MobileNavBarLinks;
