import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { HomePage, NewProjectPage, ProjectPage } from "@pages";
import { Dashboard, Loader } from "@components";

const DashboardRoute = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.loading) return <Loader size="large" fullScreen />;
  if (!auth.isAuth) return <Navigate to={"/auth/login"} />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Navigate to="/dashboard/home" replace />} />
        <Route index path="/home" element={<HomePage />} />
        <Route path="/project/:idProject" element={<ProjectPage />} />
        <Route path="/new-project" element={<NewProjectPage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoute;
