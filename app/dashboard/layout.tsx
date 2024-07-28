import Foorter from "../ui/dashbaord/footer";
import PageNavBar from "../ui/dashbaord/page-nav-bar";
import SideNav from "../ui/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SideNav />
        {/* Layout container */}
        <div className="layout-page">
           <PageNavBar/>
          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}
            {children}
            {/* / Content */}
            <Foorter/>
            <div className="content-backdrop fade" />
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
        
      </div>
      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle" />
    </div>
  );
}
