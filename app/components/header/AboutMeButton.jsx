import { useState } from "react";
import NavLink from "./NavLink";

const AboutMeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return <NavLink href="aboutme">About Me</NavLink>;
};

export default AboutMeButton;
