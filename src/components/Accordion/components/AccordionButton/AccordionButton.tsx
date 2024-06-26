import { Button, Icon } from "@components";
import { useAccordionContext } from "../../AccordionContext";

const AccordionButton: React.FC = () => {
  const { isOpen, handleIsOpen } = useAccordionContext();
  return (
    <Button variant="icon" color="secondary" onClick={handleIsOpen}>
      <Icon name={`caret-${isOpen ? "down" : "right"}`} />
    </Button>
  );
};

export default AccordionButton;
