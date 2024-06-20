import { useParams } from "react-router-dom";
import { handleDocumentTitle } from "@utils";

const ProjectPage: React.FC = () => {
  const { idProject } = useParams();
  handleDocumentTitle(`${idProject}`);
  return (
    <div className="projectPage">
      <h3>{idProject}</h3>
    </div>
  );
};

export default ProjectPage;
