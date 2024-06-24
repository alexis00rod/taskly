import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectTypes } from "@models";
import { getProjectDocPerId } from "@services";
import { handleDocumentTitle } from "@utils";
import { Loader } from "@components";
import { ProjectAddFavorite, ProjectControls, ProjectName } from "./components";

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

  if (!projectLoader || !project) return <Loader size="medium" />;

  return (
    <div className="projectPage">
      <div className="projectPage-header">
        <ProjectName id={project.id} name={project.name} />
        <ProjectControls project={project.id}/>
        <ProjectAddFavorite project={project.id} />
      </div>
      <div className="projectPage-main"></div>
    </div>
  );
};

export default ProjectPage;
