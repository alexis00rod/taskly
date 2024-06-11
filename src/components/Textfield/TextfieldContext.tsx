import { createContext, useContext } from "react";

interface TextfieldTypes {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleNoFocus: () => void;
}
const TextfieldContext = createContext<TextfieldTypes | null>(null);
export const useTextfieldContext = () => {
  const context = useContext(TextfieldContext);
  if (!context) {
    throw new Error("Error al renderizar componente Textfield");
  }
  return context;
};
export default TextfieldContext;
