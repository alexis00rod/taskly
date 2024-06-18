import Icon from "components/Icon/Icon";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  children: ReactNode;
  to: string;
  icon: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ children, to, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
    >
      <Icon name={icon} />
      <span>{children}</span>
    </NavLink>
  );
};

export default SidebarLink;
