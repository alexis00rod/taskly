import { ReactNode } from "react";

interface InputRadioLabelProps {
  children: ReactNode;
  className?: string;
}

const InputRadioLabel: React.FC<InputRadioLabelProps> = ({
  children,
  className,
}) => {
  return (
    <div className="inputRadio-label">
      <div className={className}>{children}</div>
    </div>
  );
};

export default InputRadioLabel;
