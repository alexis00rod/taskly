import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Dashboard, Loader } from "@components";

const DashboardRoute = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user.loading) return <Loader size="large" fullScreen />;
  if (!user.isAuth) return <Navigate to={"/auth/login"} />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default DashboardRoute;
