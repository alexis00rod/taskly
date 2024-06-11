import { useTextfieldContext } from "../../TextfieldContext";

const TextfieldInput: React.FC = () => {
  const { id, name, value, onChange, handleFocus, handleNoFocus } =
    useTextfieldContext();
  return (
    <input
      type="text"
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
