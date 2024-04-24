import LinkedInIcon from "@components/svgs/LinkedInIcon";
import GithubIcon from "@components/svgs/GithubIcon";

export default function SocialLinks() {
  return (
    <>
      <ul className="wrapper">
        <li
          className="circle linkedin linkedinSvg tooltip tooltip-bottom tooltip-linkedin btn btn-primary btn-outline border-2 p-0"
          data-tip="Linked In"
          style={{ padding: "6px" }}
        >
          <span>
            <LinkedInIcon />
          </span>
        </li>
        <li
          className="circle github githubSvg tooltip tooltip-bottom tooltip-github btn btn-primary btn-outline border-2 p-0"
          data-tip="Github"
          style={{ padding: "12px" }}
        >
          <span>
            <GithubIcon />
          </span>
        </li>
      </ul>
    </>
  );
}
