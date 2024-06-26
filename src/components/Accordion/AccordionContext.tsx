import { createContext, useContext } from "react";
interface AccordionTypes {
  isOpen: boolean;
  handleIsOpen: () => void;
}
const AccordionContext = createContext<AccordionTypes | null>(null);
export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Error al renderizar componente Accordion");
  }
  return context;
};
export default AccordionContext;
