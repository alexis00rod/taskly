import { createContext, useContext } from "react";

interface MenuContextType {
  handleIsOpen: () => void;
  closeMenu: () => void;
  isOpen: boolean;
  expand: boolean;
}

const MenuContext = createContext<MenuContextType | null>(null);
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Error al renderizar componente menu");
  }
  return context;
};
export default MenuContext;
