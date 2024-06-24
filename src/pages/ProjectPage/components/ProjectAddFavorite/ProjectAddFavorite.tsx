import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import {
  addProjectToFavorites,
  isProjectInFavorites,
  removeProjectToFavorites,
} from "@services";
import { Button, Icon } from "@components";

interface ProjectAddFavoriteProps {
  project: string;
}

const ProjectAddFavorite: React.FC<ProjectAddFavoriteProps> = ({ project }) => {
  const {
    userData: { uid },
  } = useSelector((state: RootState) => state.auth);
  const [projectInFavorites, setProjectInFavorites] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    if (!uid) return;
    const unsubscribe = isProjectInFavorites(uid, project, (snapshot) => {
      setProjectInFavorites(snapshot);
    });
    return () => {
      unsubscribe();
    };
  }, [project, uid]);

  const handleProjectInFavorites = () => {
    if (!uid) return;
    projectInFavorites
      ? removeProjectToFavorites(uid, project)
      : addProjectToFavorites(uid, project);
  };

  if (projectInFavorites !== null) {
    return (
      <Button
        variant="icon"
        color={projectInFavorites ? "primary" : "secondary"}
        title={
          projectInFavorites ? "Eliminar de favoritos" : "Agregar a favoritos"
        }
        onClick={handleProjectInFavorites}
      >
        <Icon name="star" />
      </Button>
    );
  }
};

export default ProjectAddFavorite;
