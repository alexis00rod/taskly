import { useTextfieldContext } from "../../TextfieldContext";

interface TextfieldInputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextfieldInput: React.FC<TextfieldInputProps> = ({
  type = "text",
  name,
  value,
  onChange,
}) => {
  const { id, setFocus } = useTextfieldContext();

  const handleFocus = () => {
    setFocus(true);
  };

  const handleNoFocus = () => {
    if (!value) {
      setFocus(false);
    }
  };

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
    />
  );
};

export default TextfieldInput;
