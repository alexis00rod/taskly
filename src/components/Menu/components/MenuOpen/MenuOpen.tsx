import { ReactNode } from "react";
import { useMenuContext } from "../../MenuContext";

interface MenuProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

const MenuOpen: React.FC<MenuProps> = ({ children, className, title }) => {
  const { handleIsOpen } = useMenuContext();
  return (
    <div onClick={handleIsOpen} className={className} title={title}>
      {children}
    </div>
  );
};

export default MenuOpen;
