import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { HomePage } from "@pages";
import { Dashboard, Loader } from "@components";

const DashboardRoute = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.loading) return <Loader size="large" fullScreen />;
  if (!auth.isAuth) return <Navigate to={"/auth/login"} />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoute;
