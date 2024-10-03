import { createContext, useContext } from "react";

interface InputRadioContextType {
  checked: boolean;
}

const InputRadioContext = createContext<InputRadioContextType | null>(null);
export const useInputRadioContext = () => {
  const context = useContext(InputRadioContext);
  if (!context) {
    throw new Error("Error al renderizar componente input radio");
  }
  return context;
};
export default InputRadioContext;
