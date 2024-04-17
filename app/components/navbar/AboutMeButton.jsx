import Link from "next/link";
import { useState } from "react";

const AboutMeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href="aboutme"
      className="
        btn
        btn-primary
        rounded-none
        border-none
        self-center
        h-full
        navLinksButton"
    >
      About Me
    </Link>
  );
};

export default AboutMeButton;
