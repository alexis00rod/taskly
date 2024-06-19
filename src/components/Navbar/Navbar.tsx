import { Link } from "react-router-dom";
import { NavbarGreeting, NavbarNotifications, NavbarUser } from "./components";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to="/">Taskly.</Link>
        </h1>
      </div>
      <div className="navbar-main">
        <NavbarGreeting />
        <NavbarNotifications />
        <NavbarUser />
      </div>
    </div>
  );
};

export default Navbar;
