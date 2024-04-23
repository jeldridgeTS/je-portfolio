"use client";

import NameButton from "@components/buttons/NameButton";
import NavBarLinks from "./NavBarLinks";

export default function NavBar() {
  return (
    <nav className="nav flex justify-center pt-6">
      <div className="w-full navbar">
        <div className="flex-1 h-full pl-12">
          <NameButton />
        </div>
        <div className="flex-none hidden lg:block px-4">
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
