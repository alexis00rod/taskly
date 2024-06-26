import { ReactNode } from "react";
import { useAccordionContext } from "../../AccordionContext";

interface AccordionExpandProps {
  children: ReactNode;
}

const AccordionExpand: React.FC<AccordionExpandProps> = ({ children }) => {
  const { isOpen } = useAccordionContext();

  return (
    <div className={`accordion-expand ${isOpen ? "flex" : "hidden"}`}>
      {children}
    </div>
  );
};

export default AccordionExpand;
