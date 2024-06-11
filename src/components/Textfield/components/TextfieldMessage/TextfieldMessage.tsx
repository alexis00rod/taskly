import { ReactNode } from "react";

interface TextfieldMessageProps {
  children: ReactNode;
}

const TextfieldMessage: React.FC<TextfieldMessageProps> = ({ children }) => {
  return (
    <div className="textfield-message">
      <p>{children}</p>
    </div>
  );
};

export default TextfieldMessage;
