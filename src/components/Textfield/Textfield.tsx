import { ReactNode, useState } from "react";
import TextfieldContext from "./TextfieldContext";
import { TextfieldInput, TextfieldLabel, TextfieldMessage } from "./components";

interface TextfieldProps {
  children: ReactNode;
  id: string;
  error?: boolean;
}

interface TextfieldComponent extends React.FC<TextfieldProps> {
  Label: typeof TextfieldLabel;
  Input: typeof TextfieldInput;
  Message: typeof TextfieldMessage;
}

const Textfield: TextfieldComponent = ({ children, id, error }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <TextfieldContext.Provider value={{ id, setFocus }}>
      <div
        className={`textfield ${focus ? "focus" : ""} ${error ? "error" : ""}`}
      >
        {children}
      </div>
    </TextfieldContext.Provider>
  );
};

Textfield.Label = TextfieldLabel;
Textfield.Input = TextfieldInput;
Textfield.Message = TextfieldMessage;

export default Textfield;
