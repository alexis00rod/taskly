import { Outlet } from "react-router-dom";
import AuthImage from "@assets/images/auth-image.png";

const AuthPage = () => {
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
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
