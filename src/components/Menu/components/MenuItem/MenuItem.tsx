import { ReactNode } from "react";
import { useMenuContext } from "../../MenuContext";

interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
  const { closeMenu } = useMenuContext();

  const handleCloseMenu = () => {
    closeMenu();
    onClick && onClick();
  };

  return (
    <button type="button" onClick={handleCloseMenu} className="menu-item">
      {children}
    </button>
  );
};

export default MenuItem;
