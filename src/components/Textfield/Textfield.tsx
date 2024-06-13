import { ReactNode, useState } from "react";
import TextfieldContext from "./TextfieldContext";
import {
  TextfieldHelper,
  TextfieldInput,
  TextfieldLabel,
  TextfieldValidation,
} from "./components";

interface TextfieldProps {
  children: ReactNode;
  id: string;
  error?: boolean;
}

interface TextfieldComponent extends React.FC<TextfieldProps> {
  Label: typeof TextfieldLabel;
  Input: typeof TextfieldInput;
  Helper: typeof TextfieldHelper;
  Validation: typeof TextfieldValidation;
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
Textfield.Helper = TextfieldHelper;
Textfield.Validation = TextfieldValidation;

export default Textfield;
