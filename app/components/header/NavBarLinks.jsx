import Link from "next/link";
import dots from "/public/dots-horizontal.svg";
import Image from "next/image";
import ExperienceButton from "@components/buttons/ExperienceButton";
import ProjectsButton from "@components/buttons/ProjectsButton";
import AboutMeButton from "@components/buttons/AboutMeButton";

export default function NavBarLinks() {
  const handleClick = () => {
    const elem = document.activeElement;
    elem && elem?.blur();
  };

  return (
    <div className="flex flex-row place-content-end">
      <a
        className="connectBtn btn btn-secondary btn-outline rounded-full self-center h-full no-animation shadow-none border-2 font-semibold"
        href="mailto:james.eldridge@mail.com"
        target="#"
      >
        LET'S CONNECT
      </a>
      <figure className="self-center pl-4">
        <div
          className="dropdown dropdown-bottom dropdown-end"
          style={{ display: "block" }}
        >
          <Image
            className="text-primary"
            role="button"
            tabIndex={0}
            src={dots}
            height={48}
            width={48}
            alt="github"
          />
          <ul
            tabIndex={0}
            className="dropdown-content dropdownContainer z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
          >
            <li onClick={handleClick} className="dropdownBtns">
              <ExperienceButton />
            </li>
            <li onClick={handleClick} className="dropdownBtns">
              <ProjectsButton />
            </li>
            <li onClick={handleClick} className="dropdownBtns">
              <AboutMeButton />
            </li>
          </ul>
        </div>
      </figure>
    </div>
  );
}
