import { useState } from "react";
import { validateProjectName } from "@utils";
import { Button, Textfield } from "@components";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { createProjectDoc } from "@services";
import { useNavigate } from "react-router-dom";

const FirstProjectName: React.FC = () => {
  const {
    userData: { uid },
  } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string[]>([]);
  const [nameLoader, setNameLoader] = useState<boolean>(false);

  const handleName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const submitName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameLoader(true);
    const err: string[] = validateProjectName(name);

    if (err.length > 0) {
      setNameError(err);
      setNameLoader(false);
      return;
    }
    try {
      if (uid) {
        const project = await createProjectDoc(name, uid);
        navigate(`/first-project/${project}`);
        setNameError([]);
        setNameLoader(false);
      }
    } catch (error) {
      console.log(error);
      setNameError([]);
      setNameLoader(false);
    }
  };

  return (
    <form onSubmit={submitName} className="firstProjectPage-form">
      <div className="firstProjectPage-form-header">
        <h3>Tu proyecto, el primer paso</h3>
        <p>
          En Taskly, todo comienza con un proyecto. Aquí podrás organizar
          tareas, listas, fechas de entrega y cualquier otro elemento necesario
          para mantener todo bajo control y alcanzar tus metas.
        </p>
      </div>
      <Textfield id="name" error={nameError.length > 0}>
        <Textfield.Label>Ingresa el nombre del proyecto</Textfield.Label>
        <Textfield.Input name="name" value={name} onChange={handleName} />
        <Textfield.Validation>
          {nameError.includes("name-empty") &&
            "El nombre del proyecto no puede estar vacío."}
        </Textfield.Validation>
        <Textfield.Helper>
          Por ej.: Mi primer proyecto de Taskly
        </Textfield.Helper>
      </Textfield>
      <div className="firstProjectPage-form-btns">
        <Button
          type="submit"
          loader={nameLoader}
          disabled={nameLoader || !name}
        >
          Continuar
        </Button>
      </div>
    </form>
  );
};

export default FirstProjectName;
