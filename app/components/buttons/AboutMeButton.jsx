import { useState } from "react";
import NavButton from "./NavButton";

const AboutMeButton = ({ ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavButton {...props} href="aboutme">
      About Me
    </NavButton>
  );
};

export default AboutMeButton;
