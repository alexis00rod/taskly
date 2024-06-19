import { Button, Icon, Menu } from "@components";

const NavbarNotifications: React.FC = () => {
  return (
    <Menu>
      <Menu.Open className="navbar-notifications" title="Notificaciones">
        <Button variant="icon" color="secondary">
          <Icon name="bell" />
        </Button>
      </Menu.Open>
      <Menu.Expand divide>
        <div className="p-[8px]">
          <p>Notificaciones</p>
        </div>
        <div className="p-[8px]"></div>
      </Menu.Expand>
    </Menu>
  );
};

export default NavbarNotifications;
