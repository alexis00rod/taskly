import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { ProjectPage } from "@pages";
import {
  ProjectBoard,
  ProjectPanel,
  ProjectSummary,
  ProjectTasksList,
} from "@pages/ProjectPage/components";

const ProjectRoute: React.FC = () => {
  const { idProject } = useParams();
  return (
    <Routes>
      <Route path="/" element={<ProjectPage />}>
        <Route
          path="/"
          element={<Navigate to={`/project/${idProject}/tasks-list`} replace />}
        />
        <Route path="/tasks-list" element={<ProjectTasksList />} />
        <Route path="/board" element={<ProjectBoard />} />
        <Route path="/summary" element={<ProjectSummary />} />
        <Route path="/panel" element={<ProjectPanel />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoute;
