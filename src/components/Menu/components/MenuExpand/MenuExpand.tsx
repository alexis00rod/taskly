import { ReactNode } from "react";
import { useMenuContext } from "../../MenuContext";

interface MenuExpandProps {
  children: ReactNode;
  divide?: boolean;
  position?: string;
}

const MenuExpand: React.FC<MenuExpandProps> = ({
  children,
  divide,
  position = "right",
}) => {
  const { isOpen, expand } = useMenuContext();

  return (
    <div
      className={`menu-container ${
        isOpen ? "flex" : "hidden"
      } menu-${position}`}
    >
      <div
        className={`menu-container-expand ${expand ? "open" : ""} ${
          divide ? "divide-y divide-customDarkTheme" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuExpand;
