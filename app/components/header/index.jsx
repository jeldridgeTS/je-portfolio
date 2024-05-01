import MobileNavBarLinks from "./MobileNavBarLinks";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="drawer drawer-end lg:max-w-6xl mx-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavBar />
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-4">
          <MobileNavBarLinks />
        </ul>
      </div>
    </div>
  );
};

export default Header;
