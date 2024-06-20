import { useProjects } from "@hooks";
import { SidebarLink } from "../";

const SidebarProjects: React.FC = () => {
  const { projects, projectsLoader } = useProjects();

  return (
    <div className="sidebar-projects">
      <p>Proyectos</p>
      {projectsLoader &&
        projects.map((project) => (
          <SidebarLink
            key={project.id}
            to={`/dashboard/project/${project.id}`}
            icon="folder"
          >
            {project.name}
          </SidebarLink>
        ))}
    </div>
  );
};

export default SidebarProjects;
