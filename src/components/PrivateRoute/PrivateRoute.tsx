import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Navigate } from "react-router-dom";
import { Loader } from "@components";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.loading) return <Loader size="large" fullScreen />;
  if (!auth.isAuth) return <Navigate to={"/auth/login"} />;

  return children;
};

export default PrivateRoute;
