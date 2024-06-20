import { Route, Routes } from "react-router-dom";
import { FirstProjectPage } from "@pages";
import {
  FirstProjectName,
  FirstProjectTasks,
} from "@pages/FirstProjectPage/components";

const FirstProjectRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstProjectPage />}>
        <Route index path="/" element={<FirstProjectName />} />
        <Route path="/:project" element={<FirstProjectTasks />} />
      </Route>
    </Routes>
  );
};

export default FirstProjectRoute;
