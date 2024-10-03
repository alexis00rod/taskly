import { ReactNode } from "react";
import InputRadioContext from "./InputRadioContext";
import { InputRadioCheckmark, InputRadioLabel } from "./components";

interface InputRadioProps {
  children: ReactNode;
  id: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface InputRadioComponent extends React.FC<InputRadioProps> {
  Checkmark: typeof InputRadioCheckmark;
  Label: typeof InputRadioLabel;
}

const InputRadio: InputRadioComponent = ({
  children,
  id,
  name,
  checked,
  onChange,
}) => {
  return (
    <InputRadioContext.Provider value={{ checked }}>
      <label htmlFor={id} className="inputRadio">
        <input
          type="radio"
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
        />
        {children}
      </label>
    </InputRadioContext.Provider>
  );
};

InputRadio.Checkmark = InputRadioCheckmark;
InputRadio.Label = InputRadioLabel;

export default InputRadio;
