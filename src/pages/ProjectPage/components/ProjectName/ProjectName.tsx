import { updateProjectNameDoc } from "@services";
import { Textfield } from "@components";
import { useEffect, useState } from "react";

interface ProjectNameProps {
  id: string;
  name: string;
}

const ProjectName: React.FC<ProjectNameProps> = ({ id, name }) => {
  const [updateName, setUpdateName] = useState<string>(name);

  useEffect(() => {
    const updateProjectName = async () => {
      await updateProjectNameDoc(id, updateName);
    };
    if (updateName.length > 0) {
      updateProjectName();
    } else {
      setUpdateName("");
    }
  }, [id, updateName]);

  const handleUpdateName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateName(value);
  };

  return (
    <div className="projectName">
      <Textfield id="name" margin="m-0" error={updateName.length <= 0}>
        <Textfield.Input
          name="name"
          value={updateName}
          onChange={handleUpdateName}
          outlined={false}
        />
      </Textfield>
    </div>
  );
};

export default ProjectName;
