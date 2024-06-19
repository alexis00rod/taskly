import { SidebarLink } from "../";

const SidebarProjects: React.FC = () => {
  const projects: { href: string; name: string }[] = [
    { href: "/", name: "Proyecto 1" },
    { href: "/", name: "Proyecto 2" },
    { href: "/", name: "Proyecto 3" },
  ];

  return (
    <div className="sidebar-projects">
      <p>Proyectos</p>
      {projects.map((project, i) => (
        <SidebarLink key={i} to={project.href} icon="folder">
          {project.name}
        </SidebarLink>
      ))}
    </div>
  );
};

export default SidebarProjects;
