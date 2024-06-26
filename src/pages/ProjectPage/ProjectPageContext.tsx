import { ProjectTypes } from "@models";
import { createContext, useContext } from "react";

interface ProjectPageTypes {
  project: ProjectTypes;
}
const ProjectPageContext = createContext<ProjectPageTypes | null>(null);
export const useProjectPageContext = () => {
  const context = useContext(ProjectPageContext);
  if (!context) {
    throw new Error("Error al renderizar pagina Project");
  }
  return context;
};
export default ProjectPageContext;
