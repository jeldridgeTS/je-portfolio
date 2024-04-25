import { useState } from "react";
import NavButton from "./NavButton";

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
    <NavButton
      {...props}
      onMouseOver={handleMouseEnter}
      href="https://github.com/jeldridgeTS"
    >
      Projects
    </NavButton>
  );
};

export default ProjectsButton;
