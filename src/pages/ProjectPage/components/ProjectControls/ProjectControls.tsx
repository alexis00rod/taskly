import { useNavigate } from "react-router-dom";
import { deleteDocProject } from "@services";
import { Button, Icon, Menu } from "@components";

interface ProjectControlsProps {
  project: string;
}

const ProjectControls: React.FC<ProjectControlsProps> = ({ project }) => {
  const navigate = useNavigate();

  // Function to copy project link
  const copyProjectLink = () => {
    navigator.clipboard
      .writeText(`${window.location.href}`)
      .then(() => alert("Enlace copiado en el portapapeles"))
      .catch(() => alert("Error al copiar el enlace al portapapeles"));
  };

  // Function to navigate to edit project
  const navigateToEditProject = () => {
    navigate(`/dashboard/project/${project}/edit`);
  };

  // Function to remove project
  const removeProject = async () => {
    await deleteDocProject(project);
    navigate("/dashboard/home");
  };

  return (
    <Menu>
      <Menu.Open>
        <Button variant="icon" color="secondary">
          <Icon name="chevron-down" />
        </Button>
      </Menu.Open>
      <Menu.Expand position="left" divide>
        <div className="py-[5px]">
          <Menu.Item onClick={navigateToEditProject}>
            <Icon name="pen" />
            Editar detalles del proyecto
          </Menu.Item>
        </div>
        <div className="py-[5px]">
          <Menu.Item onClick={copyProjectLink}>
            <Icon name="link" />
            Copiar enlace del proyecto
          </Menu.Item>
        </div>
        <div className="py-[5px]">
          <Menu.Item className="text-red-500" onClick={removeProject}>
            <Icon name="trash" />
            Eliminar proyecto
          </Menu.Item>
        </div>
      </Menu.Expand>
    </Menu>
  );
};

export default ProjectControls;
