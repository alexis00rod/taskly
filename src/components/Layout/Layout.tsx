import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "@components";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
