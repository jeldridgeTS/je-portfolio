import LinkedInIcon from "@components/svgs/LinkedInIcon";
import GithubIcon from "@components/svgs/GithubIcon";

export default function SocialLinks() {
  return (
    <>
      <ul className="wrapper">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/james-eldridge-19981b1b/"
          className="circle linkedin linkedinSvg tooltip tooltip-bottom tooltip-linkedin btn btn-secondary btn-outline border-2 p-0"
          data-tip="Linked In"
          style={{ padding: "6px" }}
        >
          <span>
            <LinkedInIcon />
          </span>
        </a>
        <a
          target="_blank"
          href="https://github.com/jeldridgeTS"
          className="circle github githubSvg tooltip tooltip-bottom tooltip-github btn btn-secondary btn-outline border-2 p-0"
          data-tip="Github"
          style={{ padding: "12px" }}
        >
          <span>
            <GithubIcon />
          </span>
        </a>
      </ul>
    </>
  );
}
