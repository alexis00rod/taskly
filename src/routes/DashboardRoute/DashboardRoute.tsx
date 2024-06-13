import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Dashboard } from "@components";

const DashboardRoute = () => {
  const { uid } = useSelector((state: RootState) => state.user);

  if (!uid) return <Navigate to={"/auth/login"} />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default DashboardRoute;
