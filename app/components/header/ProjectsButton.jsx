import { useState } from "react";
import NavLink from "./NavLink";

const ProjectsButton = ({ ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("MOO");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink {...props} onMouseOver={handleMouseEnter} href="projects">
      Projects
    </NavLink>
  );
};

export default ProjectsButton;
