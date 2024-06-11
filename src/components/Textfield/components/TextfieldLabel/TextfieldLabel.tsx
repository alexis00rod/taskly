import { ReactNode } from "react";
import { useTextfieldContext } from "../../TextfieldContext";

interface TextfieldLabelProps {
  children: ReactNode;
}

const TextfieldLabel: React.FC<TextfieldLabelProps> = ({ children }) => {
  const { id } = useTextfieldContext();
  return (
    <label htmlFor={id} className="textfield-label">
      {children}
    </label>
  );
};

export default TextfieldLabel;
