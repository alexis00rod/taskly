import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { createTaskDoc } from "@services";
import { validateTaskName } from "@utils";
import { Button, Textfield } from "@components";

const FirstProjectTasks: React.FC = () => {
  const { project } = useParams();
  const {
    userData: { uid },
  } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [task, setTask] = useState<string>("");
  const [taskError, setTaskError] = useState<string[]>([]);
  const [taskLoader, setTaskLoader] = useState<boolean>(false);

  const handleTask = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
  };

  const submitTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTaskLoader(true);
    const err: string[] = validateTaskName(task);

    if (err.length > 0) {
      setTaskError(err);
      setTaskLoader(false);
      return;
    }
    try {
      if (project && uid) {
        await createTaskDoc(task, project, uid);
        navigate("/");
        setTaskError([]);
        setTaskLoader(false);
      }
    } catch (error) {
      console.log(error);
      setTaskError([]);
      setTaskLoader(false);
    }
  };

  return (
    <form onSubmit={submitTask} className="firstProjectPage-form">
      <div className="firstProjectPage-form-header">
        <h3>Las tareas son la base de tus proyectos</h3>
        <p>
          En Taskly, las tareas te ayudan a mantenerte organizado y a compartir
          responsabilidades con tu equipo. Puedes agregar fechas límite para no
          olvidar ningún detalle importante.
        </p>
      </div>
      <Textfield id="name" error={taskError.length > 0}>
        <Textfield.Label>Ingresa el nombre de la tarea</Textfield.Label>
        <Textfield.Input name="name" value={task} onChange={handleTask} />
        <Textfield.Validation>
          {taskError.includes("task-empty") &&
            "El nombre de la tarea no puede estar vacío."}
        </Textfield.Validation>
        <Textfield.Helper>Por ej.: Planificación del proyecto</Textfield.Helper>
      </Textfield>
      <div className="firstProjectPage-form-btns">
        <Button
          type="submit"
          loader={taskLoader}
          disabled={taskLoader || !task}
        >
          Continuar
        </Button>
      </div>
    </form>
  );
};

export default FirstProjectTasks;
