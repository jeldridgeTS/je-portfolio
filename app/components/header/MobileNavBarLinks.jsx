"use client";

import ProjectsButton from "@components/buttons/ProjectsButton";
import AboutMeButton from "@components/buttons/AboutMeButton";
import ExperienceButton from "@components/buttons/ExperienceButton";
import SocialLinks from "@components/socialLinks/SocialLinks";
import NameButton from "@components/buttons/NameButton";

const MobileNavBarLinks = () => {
  const handleClick = () => {
    document.getElementById("my-drawer-3").click();
  };

  return (
    <>
      <div className="pt-4 pb-8 text-center">
        <NameButton style={{ paddingBottom: "2rem" }} />
      </div>
      <li className="mobileDrawerBtns">
        <ExperienceButton onClick={handleClick} />
      </li>
      <li className="mobileDrawerBtns">
        <ProjectsButton onClick={handleClick} />
      </li>
      <li className="mobileDrawerBtns">
        <AboutMeButton onClick={handleClick} />
      </li>
      <div className="pt-8 text-center">
        <SocialLinks style={{ paddingTop: "2rem" }} />
      </div>
    </>
  );
};

export default MobileNavBarLinks;
