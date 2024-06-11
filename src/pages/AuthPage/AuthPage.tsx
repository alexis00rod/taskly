import { NavLink, Outlet } from "react-router-dom";
import AuthImage from "../../assets/images/auth-image.png";

const AuthPage = () => {
  return (
    <div className="authPage">
      <figure className="authPage-left">
        <img src={AuthImage} alt="Auth Image" />
      </figure>
      <div className="authPage-right">
        <div className="authPage-header">
          <h2>Taskly</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <NavLink to="/auth/login">Iniciar sesion</NavLink>
        <NavLink to="/auth/signup">Registrarse</NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
