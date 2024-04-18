import { useState } from "react";
import NavLink from "./NavLink";

const ProjectsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("MOO");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink onMouseOver={handleMouseEnter} href="projects">
      Projects
    </NavLink>
  );
};

export default ProjectsButton;
