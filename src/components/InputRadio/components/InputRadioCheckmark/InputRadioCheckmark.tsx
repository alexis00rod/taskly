import { useInputRadioContext } from "components/InputRadio/InputRadioContext";
import { ReactNode } from "react";

interface InputRadioCheckmarkProps {
  children: ReactNode;
  className?: string;
  checkedClasses?: string;
}

const InputRadioCheckmark: React.FC<InputRadioCheckmarkProps> = ({
  children,
  className,
  checkedClasses,
}) => {
  const { checked } = useInputRadioContext();

  return (
    <div className="inputRadio-checkmark">
      {checked && (
        <div className={`${className} ${checkedClasses}`}>{children}</div>
      )}
    </div>
  );
};

export default InputRadioCheckmark;
