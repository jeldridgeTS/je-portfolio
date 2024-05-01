import NavButton from "./NavButton";

const ExperienceButton = ({ ...props }) => {
  const mooCow = () => {
    console.log("MOO COW");
  };

  console.log(props);

  return (
    <NavButton {...props} href="experience">
      Experience
    </NavButton>
  );
};

export default ExperienceButton;
