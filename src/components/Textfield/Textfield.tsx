import { ReactNode, useState } from "react";
import TextfieldContext from "./TextfieldContext";
import { TextfieldInput, TextfieldLabel, TextfieldMessage } from "./components";

interface TextfieldProps {
  children: ReactNode;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

interface TextfieldComponent extends React.FC<TextfieldProps> {
  Label: typeof TextfieldLabel;
  Input: typeof TextfieldInput;
  Message: typeof TextfieldMessage;
}

const Textfield: TextfieldComponent = ({
  children,
  id,
  name,
  value,
  onChange,
  error,
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleNoFocus = () => {
    if (!value) {
      setFocus(false);
    }
  };

  return (
    <TextfieldContext.Provider
      value={{ id, name, value, onChange, handleFocus, handleNoFocus }}
    >
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
