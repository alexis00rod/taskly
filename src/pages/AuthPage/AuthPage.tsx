import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "@components";
import AuthImage from "@assets/images/auth-image.png";
import { ButtonGoogleProvider } from "./components";

const AuthPage = () => {
  const { pathname } = useLocation();
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.isAuth) return <Navigate to="/" />;

  return (
    <div className="authPage">
      <figure className="authPage-image">
        <img src={AuthImage} alt="Auth Image" />
      </figure>
      <div className="authPage-container">
        <div className="authPage-header">
          <h2>Taskly</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="authPage-main">
          <Outlet />
          <div className="authPage-open">
            <p>O continúa con:</p>
            <ButtonGoogleProvider />
          </div>
          <div className="authPage-links">
            {pathname.includes("login") ? (
              <>
                <Button href="/auth/signup" variant="link">
                  ¿No puedes iniciar sesión?
                </Button>
                <Button href="/auth/signup" variant="link">
                  Crear cuenta
                </Button>
              </>
            ) : (
              <Button href="/auth/login" variant="link">
                ¿Ya tienes una cuenta? Iniciar sesión
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
