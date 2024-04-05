import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-center px-4 py-4">
      <div className="w-full navbar bg-base-300">
        <div className="flex-1 px-2 mx-2">James Eldridge</div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal lg:space-x-4">
            <NavLinks />
          </ul>
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
};

export default Navbar;
