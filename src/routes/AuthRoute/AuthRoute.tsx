import { AuthPage } from "@pages";
import { Login, Signup } from "pages/AuthPage/components";
import { Route, Routes } from "react-router-dom";

const AuthRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AuthRoute;
