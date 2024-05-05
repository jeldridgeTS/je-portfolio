import NavButton from "./NavButton";

const AboutMeButton = ({ ...props }) => {
  return (
    <NavButton {...props} href="aboutme">
      About Me
    </NavButton>
  );
};

export default AboutMeButton;
