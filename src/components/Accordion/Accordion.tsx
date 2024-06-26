import { ReactNode, useState } from "react";
import AccordionContext from "./AccordionContext";
import {
  AccordionButton,
  AccordionExpand,
  AccordionHeader,
} from "./components";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionComponent extends React.FC<AccordionProps> {
  Header: typeof AccordionHeader;
  Button: typeof AccordionButton;
  Expand: typeof AccordionExpand;
}

const Accordion: AccordionComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, handleIsOpen }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Expand = AccordionExpand;
Accordion.Header = AccordionHeader;
Accordion.Button = AccordionButton;

export default Accordion;
