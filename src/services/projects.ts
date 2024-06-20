import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";
import { ProjectTypes } from "@models";
// References
const projectsRef = () => db.collection(dbFirebase, "projects");

// Function to create project doc
export const createProjectDoc = async (name: string, uid: string) => {
  const projectId = await db.addDoc(projectsRef(), {
    name,
    ownerId: uid,
    createdAt: db.serverTimestamp(),
    updateAt: db.serverTimestamp(),
  });
  return projectId.id;
};

// Function to get project doc
export const getProjectsDoc = (
  uid: string,
  callback: (projects: ProjectTypes[]) => void
) => {
  const projectQuery = db.query(projectsRef(), db.where("ownerId", "==", uid));

  const unsubscribe = db.onSnapshot(projectQuery, (snapshot) => {
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ProjectTypes[];
    callback(projects);
  });

  return unsubscribe;
};
