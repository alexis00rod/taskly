import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";
// References
const projectsRef = () => db.collection(dbFirebase, "projects");

export const createProjectDoc = async (name: string, uid: string) => {
  const projectId = await db.addDoc(projectsRef(), {
    name,
    ownerId: uid,
    createdAt: db.serverTimestamp(),
    updateAt: db.serverTimestamp(),
  });
  return projectId.id;
};
