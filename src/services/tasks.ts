import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";

// References
const tasksRef = (project: string) =>
  db.collection(dbFirebase, "projects", project, "tasks");

// Function to create document task
export const createTaskDoc = async (
  name: string,
  project: string,
  assignedTo: string
) => {
  return await db.addDoc(tasksRef(project), {
    name,
    assignedTo,
    createdAt: db.serverTimestamp(),
    updateAt: db.serverTimestamp(),
    status: "pending",
    priority: "low",
  });
};
