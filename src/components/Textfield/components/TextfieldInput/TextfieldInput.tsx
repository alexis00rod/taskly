import { useEffect, useRef, useState } from "react";
import { useTextfieldContext } from "../../TextfieldContext";

interface TextfieldInputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
}

const TextfieldInput: React.FC<TextfieldInputProps> = ({
  type = "text",
  name,
  value,
  onChange,
  autoFocus = false,
  outlined = true,
  fullWidth = false,
}) => {
  const [textfieldWidth, setTextfieldWidth] = useState<number>(value.length);
  const { id, setFocus } = useTextfieldContext();
  const textfieldInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value.length * 10 <= 320) {
      setTextfieldWidth(value.length * 10);
    }
  }, [value]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleNoFocus = () => {
    if (!value) {
      setFocus(false);
    }
  };

  useEffect(() => {
    if (autoFocus && textfieldInputRef.current) {
      textfieldInputRef.current.focus();
      setFocus(true);
    }
  }, [autoFocus, setFocus]);

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`textfield-input ${
        outlined
          ? "border-customDarkTheme"
          : "bg-transparent hover:bg-customWhite border-transparent hover:border-customDarkTheme"
      }`}
      style={{
        width: `${fullWidth ? "100%" : `${textfieldWidth}px`}`,
        minWidth: fullWidth ? "auto" : "150px",
      }}
      onFocus={handleFocus}
      onBlur={handleNoFocus}
      ref={textfieldInputRef}
    />
  );
};

export default TextfieldInput;
