import { Route, Routes } from "react-router-dom";
import { HomePage, NewProjectPage } from "@pages";
import { AuthRoute, ProjectRoute, FirstProjectRoute } from "./index";
import { PrivateRoute, Layout } from "@components";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index path="/" element={<HomePage />} />
        <Route path="/project/:idProject/*" element={<ProjectRoute />} />
        <Route path="/new-project" element={<NewProjectPage />} />
      </Route>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/first-project/*" element={<FirstProjectRoute />} />
    </Routes>
  );
};

export default AppRoutes;
