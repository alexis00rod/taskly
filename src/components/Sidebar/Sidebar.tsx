import { SidebarAddProject, SidebarLink, SidebarProjects } from "./components";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <SidebarLink to="/dashboard/home" icon="home">
          Inicio
        </SidebarLink>
        <SidebarLink to="/dashboard/calendar" icon="calendar">
          Calendario
        </SidebarLink>
      </div>
      <div className="sidebar-section scrollable">
        <p>Proyectos</p>
        <SidebarProjects />
        <SidebarAddProject />
      </div>
      <div className="sidebar-resize"></div>
    </div>
  );
};

export default Sidebar;
