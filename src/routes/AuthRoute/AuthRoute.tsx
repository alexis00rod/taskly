import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage } from "@pages";
import { Login, LoginPassword, Signup } from "@pages/AuthPage/components";

const AuthRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="login/:email" element={<LoginPassword />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AuthRoute;
