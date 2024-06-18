import { useEffect, useRef } from "react";
import { useTextfieldContext } from "../../TextfieldContext";

interface TextfieldInputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

const TextfieldInput: React.FC<TextfieldInputProps> = ({
  type = "text",
  name,
  value,
  onChange,
  autoFocus = false,
}) => {
  const { id, setFocus } = useTextfieldContext();
  const textfieldInputRef = useRef<HTMLInputElement>(null);

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
      className="textfield-input"
      onFocus={handleFocus}
      onBlur={handleNoFocus}
      ref={textfieldInputRef}
    />
  );
};

export default TextfieldInput;
