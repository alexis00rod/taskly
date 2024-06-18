import Icon from "components/Icon/Icon";
import Textfield from "components/Textfield/Textfield";
import { useEffect, useRef, useState } from "react";

const SidebarAddProject = () => {
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

  const submitProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(project);
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
