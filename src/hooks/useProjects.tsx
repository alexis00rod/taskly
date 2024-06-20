import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { getProjectsDoc } from "@services";
import { ProjectTypes } from "@models";

const useProjects = () => {
  const {
    userData: { uid },
  } = useSelector((state: RootState) => state.auth);
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [projectsLoader, setProjectsLoader] = useState<boolean>(false);

  useEffect(() => {
    if (!uid) return;
    setProjectsLoader(false);
    const unsubscribe = getProjectsDoc(uid, (projects) => {
      setProjects(projects);
      setProjectsLoader(true);
    });
    return () => {
      unsubscribe();
    };
  }, [uid]);

  return { projects, projectsLoader };
};

export default useProjects;
