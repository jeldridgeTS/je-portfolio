import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";
import NameButton from "./NameButton";

const Navbar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="flex justify-center">
          <div className="w-full navbar bg-cyan-950">
            <div className="flex-1 lg:pl-24 h-full">
              <NameButton />
            </div>
            <div className="flex-none hidden lg:block h-full pr-24">
              <NavLinks />
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
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-4">
          <MobileNavLinks />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
