import { ReactNode } from "react";

interface AccordionHeaderProps {
  children: ReactNode;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  return <div className="accordion-header">{children}</div>;
};

export default AccordionHeader;
