import Link from "next/link";
import { useState } from "react";

const ProjectsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href="projects"
      className="
        btn
        btn-primary
        rounded-none
        border-none
        self-center
        h-full
        navLinksButton"
    >
      Projects
    </Link>
  );
};

export default ProjectsButton;
