import { ReactNode } from "react";
import { Button } from "@components";
import { useNavigate } from "react-router-dom";

interface ButtonBackProps {
  children: ReactNode;
  variant?: string;
  color?: string;
}

const ButtonBack: React.FC<ButtonBackProps> = ({
  children,
  variant,
  color,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button variant={variant} color={color} onClick={handleBack} title="Volver">
      {children}
    </Button>
  );
};

export default ButtonBack;
