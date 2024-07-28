import AppLogo from "./app-logo";
import Nav1Link from "./dashbaord/navlink";

export default function SideNav() {
  return (
    <>
      {/* Menu */}
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo ">
            <AppLogo />
        </div>
        
        <div className="menu-inner-shadow" />
        {/* <NavLink/> */}
        <Nav1Link/>
      </aside>
      {/* / Menu */}
    </>
  );
}
