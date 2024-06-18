import { SidebarAddProject, SidebarLink, SidebarProjects } from "./components";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Home link */}
      <SidebarLink to="/dashboard" icon="home">
        Inicio
      </SidebarLink>
      {/* Calendar link */}
      <SidebarLink to="/dashboard/calendar" icon="calendar">
        Calendario
      </SidebarLink>
      {/* Projects */}
      <SidebarProjects />
      {/* Button add project */}
      <SidebarAddProject />
      {/* Resize */}
      <div className="sidebar-resize"></div>
    </div>
  );
};

export default Sidebar;
