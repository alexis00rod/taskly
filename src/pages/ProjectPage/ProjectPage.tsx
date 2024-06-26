import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ProjectTypes } from "@models";
import { getProjectDocPerId } from "@services";
import { handleDocumentTitle } from "@utils";
import { Loader } from "@components";
import {
  ProjectAddFavorite,
  ProjectControls,
  ProjectName,
  ProjectNav,
} from "./components";
import ProjectPageContext from "./ProjectPageContext";

const ProjectPage: React.FC = () => {
  const { idProject } = useParams();
  const [project, setProject] = useState<ProjectTypes | null>(null);
  const [projectLoader, setProjectLoader] = useState<boolean>(false);

  useEffect(() => {
    if (!idProject) return;
    setProjectLoader(false);
    const unsubscribe = getProjectDocPerId(idProject, (projectDoc) => {
      setProjectLoader(true);
      setProject(projectDoc);
      handleDocumentTitle(projectDoc.name);
    });
    return () => {
      unsubscribe();
    };
  }, [idProject]);

  if (!project || !projectLoader) return <Loader size="medium" />;

  return (
    <ProjectPageContext.Provider value={{ project }}>
      <div className="projectPage">
        <div className="projectPage-header">
          <ProjectName />
          <ProjectControls />
          <ProjectAddFavorite />
        </div>
        <ProjectNav />
        <div className="projectPage-main">
          <Outlet />
        </div>
      </div>
    </ProjectPageContext.Provider>
  );
};

export default ProjectPage;
