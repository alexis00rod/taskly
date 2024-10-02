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
  margin?: "none" | "small" | "medium" | "large";
  size?: null | "small" | "medium" | "large";
  error?: boolean;
}

interface TextfieldComponent extends React.FC<TextfieldProps> {
  Label: typeof TextfieldLabel;
  Input: typeof TextfieldInput;
  Helper: typeof TextfieldHelper;
  Validation: typeof TextfieldValidation;
}

const Textfield: TextfieldComponent = ({
  children,
  id,
  error,
  margin = "large",
  size = "medium",
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  const textfieldSize = {
    small: "textfield-small",
    medium: "textfield-medium",
    large: "textfield-large",
  };

  const textfieldMargin = {
    none: "margin-none",
    small: "margin-small",
    medium: "margin-medium",
    large: "margin-large",
  };

  const textfieldClasses = [
    "textfield",
    size !== null && textfieldSize[size],
    margin ? textfieldMargin[margin] : "",
    focus ? "focus" : "",
    error ? "error" : "",
  ];

  return (
    <TextfieldContext.Provider value={{ id, setFocus }}>
      <div className={textfieldClasses.filter(Boolean).join(" ")}>
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
