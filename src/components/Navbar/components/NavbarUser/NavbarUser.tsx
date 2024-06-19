import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { logout } from "redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "@services";
import { Button, Menu } from "@components";

const NavbarUser = () => {
  const {
    userData: { email, uid, photoURL },
  } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function navigate profile
  const navigateProfile = () => {
    navigate("/dashboard/profile");
  };
  // Function navigate settings
  const navigateSettings = () => {
    navigate("/dashboard/settings");
  };
  // Function logout
  const logoutAccount = () => {
    logoutUser();
    dispatch(logout());
  };

  return (
    <Menu>
      <Menu.Open className="navbar-user" title="Cuenta">
        <Button variant="icon" color="secondary">
          <img
            src={
              photoURL ? photoURL : import.meta.env.VITE_DEFAULT_PROFILE_PHOTO
            }
            alt="User Photo"
            className="w-[90%] h-[90%] object-cover rounded-md"
          />
        </Button>
      </Menu.Open>
      <Menu.Expand divide>
        {/* Account */}
        <div className="navbar-user-box">
          <span>Cuenta</span>
          <div className="navbar-user-account">
            <img
              src={
                photoURL ? photoURL : import.meta.env.VITE_DEFAULT_PROFILE_PHOTO
              }
              alt="User Photo"
            />
            <div className="navbar-user-account-info">
              <h3>{uid}</h3>
              {email && <h4>{email}</h4>}
            </div>
          </div>
        </div>
        {/* Links */}
        <div className="navbar-user-box">
          <span>Taskly</span>
          <Menu.Item onClick={navigateProfile}>Perfil</Menu.Item>
          <Menu.Item onClick={navigateSettings}>Ajustes</Menu.Item>
        </div>
        {/* Button logout */}
        <div className="navbar-user-box">
          <Menu.Item onClick={logoutAccount}>Cerrar sesión</Menu.Item>
        </div>
      </Menu.Expand>
    </Menu>
  );
};

export default NavbarUser;
