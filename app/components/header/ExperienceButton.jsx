import NavLink from "./NavLink";

const ExperienceButton = ({ ...props }) => {
  const mooCow = () => {
    console.log("MOO COW");
  };

  return (
    <NavLink onClick={mooCow} href="projects">
      Experience
    </NavLink>
  );
};

export default ExperienceButton;
