import { ReactNode, useEffect, useRef, useState } from "react";
import MenuContext from "./MenuContext";
import { MenuExpand, MenuItem, MenuOpen } from "./components";

interface MenuProps {
  children?: ReactNode;
}

interface MenuComponent extends React.FC<MenuProps> {
  Open: typeof MenuOpen;
  Expand: typeof MenuExpand;
  Item: typeof MenuItem;
}

const Menu: MenuComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpand(false);
        setTimeout(() => {
          setIsOpen(false);
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleIsOpen = () => {
    setExpand((prev) => !prev);
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 200);
  };

  const closeMenu = () => {
    setExpand(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <MenuContext.Provider value={{ handleIsOpen, isOpen, expand, closeMenu }}>
      <div className="menu" ref={menuRef}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

Menu.Open = MenuOpen;
Menu.Expand = MenuExpand;
Menu.Item = MenuItem;

export default Menu;
