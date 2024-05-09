import SocialLinks from "@components/socialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About Me</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">Experience</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <SocialLinks />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
