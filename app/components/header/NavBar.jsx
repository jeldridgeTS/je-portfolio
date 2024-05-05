import NameButton from "@components/buttons/NameButton";
import NavBarLinks from "./NavBarLinks";
import SocialLinks from "@components/socialLinks/SocialLinks";

export default function NavBar() {
  return (
    <nav className="nav flex pt-6 pb-6 px-8 lg:max-w-6xl lg:px-0 mx-auto">
      <div className="w-full navbar justify-between">
        <NameButton />
        <div className="hidden lg:block">
          <SocialLinks />
        </div>
        <div className="hidden lg:block">
          <NavBarLinks />
        </div>
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
}
