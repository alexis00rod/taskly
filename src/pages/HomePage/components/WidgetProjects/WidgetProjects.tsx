import { Link } from "react-router-dom";
import { useProjects } from "@hooks";
import { Icon, Loader } from "@components";

const WidgetProjects: React.FC = () => {
  const { projects, projectsLoader } = useProjects();

  return (
    <div className="widget">
      <div className="widget-header">
        <h3>Proyectos</h3>
      </div>
      {!projectsLoader ? (
        <Loader size="medium" />
      ) : (
        <div className="widget-content widget-projects">
          <Link to="/new-project" className="widget-projects-item">
            <span className="widget-projects-newProject">
              <Icon name="plus" />
            </span>{" "}
            <h4>Crear proyecto</h4>
          </Link>
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="widget-projects-item"
            >
              <h4>{project.name}</h4>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default WidgetProjects;
