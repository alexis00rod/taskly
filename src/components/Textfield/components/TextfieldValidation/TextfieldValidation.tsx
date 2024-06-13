import { ReactNode } from "react";

interface TextfieldValidationProps {
  children: ReactNode;
}

const TextfieldValidation: React.FC<TextfieldValidationProps> = ({
  children,
}) => {
  return (
    <div className="textfield-validation">
      <p>{children}</p>
    </div>
  );
};

export default TextfieldValidation;
