import { useEffect, useState } from "react";
import {
  addProjectToFavorites,
  isProjectInFavorites,
  removeProjectToFavorites,
} from "@services";
import { useUserData } from "@hooks";
import { Button, Icon } from "@components";
import { useProjectPageContext } from "@pages/ProjectPage/ProjectPageContext";

const ProjectAddFavorite: React.FC = () => {
  const {
    project: { id },
  } = useProjectPageContext();
  const {
    userData: { uid },
  } = useUserData();
  const [projectInFavorites, setProjectInFavorites] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    if (!uid) return;
    const unsubscribe = isProjectInFavorites(uid, id, (snapshot) => {
      setProjectInFavorites(snapshot);
    });
    return () => {
      unsubscribe();
    };
  }, [id, uid]);

  const handleProjectInFavorites = () => {
    if (!uid) return;
    projectInFavorites
      ? removeProjectToFavorites(uid, id)
      : addProjectToFavorites(uid, id);
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
