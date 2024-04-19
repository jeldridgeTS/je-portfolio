import { useState } from "react";
import NavLink from "./NavLink";

const AboutMeButton = ({ ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink {...props} href="aboutme">
      About Me
    </NavLink>
  );
};

export default AboutMeButton;
