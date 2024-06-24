import { ReactNode } from "react";
import { useMenuContext } from "../../MenuContext";

interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  className,
}) => {
  const { closeMenu } = useMenuContext();

  const handleCloseMenu = () => {
    closeMenu();
    onClick && onClick();
  };

  return (
    <button
      type="button"
      onClick={handleCloseMenu}
      className={`menu-item ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default MenuItem;
