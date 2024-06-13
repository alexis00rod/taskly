import { Route, Routes } from "react-router-dom";
import { AuthPage } from "@pages";
import { Login, LoginConfirm, Signup } from "@pages/AuthPage/components";

const AuthRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />}>
        <Route path="login" element={<Login />} />
        <Route path="login/:email" element={<LoginConfirm />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AuthRoute;
