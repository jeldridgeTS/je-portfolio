import NavButton from "./NavButton";

const ProjectsButton = ({ ...props }) => {
  return (
    <NavButton {...props} href="https://github.com/jeldridgeTS">
      Projects
    </NavButton>
  );
};

export default ProjectsButton;
