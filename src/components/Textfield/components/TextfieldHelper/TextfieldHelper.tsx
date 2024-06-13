import { ReactNode } from "react";

interface TextfieldHelperProps {
  children: ReactNode;
}

const TextfieldHelper: React.FC<TextfieldHelperProps> = ({ children }) => {
  return (
    <div className="textfield-helper">
      <p>{children}</p>
    </div>
  );
};

export default TextfieldHelper;
