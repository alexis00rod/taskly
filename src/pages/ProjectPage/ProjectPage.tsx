import { useParams } from "react-router-dom";
import { handleDocumentTitle } from "@utils";
import { useEffect, useState } from "react";
import { getProjectDocPerId } from "@services";
import { ProjectTypes } from "@models";
import { Loader } from "@components";
import { ProjectName } from "./components";

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
      </div>
      <div className="projectPage-main"></div>
    </div>
  );
};

export default ProjectPage;
