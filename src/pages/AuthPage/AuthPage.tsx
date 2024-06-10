import { NavLink, Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div>
      <h2>Taskly</h2>
      <NavLink to="/auth/login">Iniciar sesion</NavLink>
      <NavLink to="/auth/signup">Registrarse</NavLink>
      <Outlet />
    </div>
  );
};

export default AuthPage;
