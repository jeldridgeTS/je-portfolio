import NavLink from "./NavLink";

const ExperienceButton = ({ ...props }) => {
  const mooCow = () => {
    console.log("MOO COW");
  };

  console.log(props);

  return (
    <NavLink {...props} href="projects">
      Experience
    </NavLink>
  );
};

export default ExperienceButton;
