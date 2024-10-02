import { Button, Icon } from "@components";
import { useAccordionContext } from "../../AccordionContext";

interface AccordionButtonProps {
  openTitle?: string;
  closeTitle?: string;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  openTitle,
  closeTitle,
}) => {
  const { isOpen, handleIsOpen } = useAccordionContext();

  const handleTitle = () => {
    if (isOpen) {
      return closeTitle;
    } else {
      return openTitle;
    }
  };

  return (
    <Button
      variant="icon"
      color="transparent"
      size="small"
      title={handleTitle()}
      onClick={handleIsOpen}
    >
      <Icon name={`caret-${isOpen ? "down" : "right"}`} />
    </Button>
  );
};

export default AccordionButton;
