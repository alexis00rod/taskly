import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useNavigate } from "react-router-dom";
import { createProjectDoc } from "@services";
import { handleDocumentTitle, validateProjectName } from "@utils";
import { Button, ButtonBack, Icon, Textfield } from "@components";

const NewProjectPage: React.FC = () => {
  handleDocumentTitle("Nuevo proyecto");
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
        navigate(`/project/${project}`);
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
    <div className="newProjectPage">
      <ButtonBack variant="icon" color="secondary">
        <Icon name="arrow-left" />
      </ButtonBack>
      <form onSubmit={submitName} className="newProjectPage-form">
        <h2>Nuevo proyecto</h2>
        <Textfield id="name" error={nameError.length > 0}>
          <Textfield.Label>Nombre del proyecto</Textfield.Label>
          <Textfield.Input
            name="name"
            value={name}
            onChange={handleName}
            autoFocus
          />
          <Textfield.Validation>
            {nameError.includes("name-empty") &&
              "El nombre del proyecto no puede estar vacío."}
          </Textfield.Validation>
        </Textfield>
        <Button
          type="submit"
          loader={nameLoader}
          disabled={nameLoader || !name}
          fullWidth
        >
          Crear proyecto
        </Button>
      </form>
    </div>
  );
};

export default NewProjectPage;
