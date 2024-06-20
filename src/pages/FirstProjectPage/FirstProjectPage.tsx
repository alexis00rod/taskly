import { Outlet } from "react-router-dom";

const FirstProjectPage: React.FC = () => {
  return (
    <div className="firstProjectPage">
      <div className="firstProjectPage-container">
        <h2>Bienvenido a Taskly!</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default FirstProjectPage;
