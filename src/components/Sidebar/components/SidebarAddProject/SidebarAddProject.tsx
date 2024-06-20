import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { createProjectDoc } from "@services";
import { Icon, Textfield } from "@components";

const SidebarAddProject: React.FC = () => {
  const {
    userData: { uid },
  } = useSelector((state: RootState) => state.auth);
  const [addProject, setAddProject] = useState<boolean>(false);
  const [project, setProject] = useState<string>("");
  const projectRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectRef.current &&
        !projectRef.current.contains(event.target as Node)
      ) {
        setProject("");
        setAddProject(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddProject = () => {
    setAddProject((prev) => !prev);
  };

  const handleProject = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setProject(value);
  };

  const submitProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!project) {
      setAddProject(false);
      return;
    }
    if (uid) {
      setAddProject(false);
      await createProjectDoc(project, uid);
      setProject("");
    }
  };

  return addProject ? (
    <form
      onSubmit={submitProject}
      ref={projectRef}
      className="sidebar-addProject"
    >
      <Icon name="folder" />
      <Textfield id="project" margin="m-0">
        <Textfield.Input
          name="project"
          value={project}
          onChange={handleProject}
          autoFocus
        />
      </Textfield>
    </form>
  ) : (
    <button className="sidebar-link" onClick={handleAddProject}>
      <Icon name="plus" /> <span>Nuevo proyecto</span>
    </button>
  );
};

export default SidebarAddProject;
