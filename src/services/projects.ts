import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";
import { ProjectTypes } from "@models";
// References
const projectsRef = () => db.collection(dbFirebase, "projects");
const projectRef = (project: string) => db.doc(dbFirebase, "projects", project);

// Function to create project doc
export const createProjectDoc = async (name: string, uid: string) => {
  const projectId = await db.addDoc(projectsRef(), {
    name,
    ownerId: uid,
    createdAt: db.serverTimestamp(),
    updatedAt: db.serverTimestamp(),
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

// Function to get project per id
export const getProjectDocPerId = (
  projectId: string,
  callback: (project: ProjectTypes) => void
) => {
  const unsubscribe = db.onSnapshot(projectRef(projectId), (snapshot) => {
    const project = { id: snapshot.id, ...snapshot.data() } as ProjectTypes;
    callback(project);
  });
  return unsubscribe;
};

// Function to update project name document
export const updateProjectNameDoc = async (
  project: string,
  newName: string
) => {
  return await db.updateDoc(projectRef(project), {
    name: newName,
    updatedAt: db.serverTimestamp(),
  });
};

// Function to delete document from project
export const deleteDocProject = async (project: string) => {
  return await db.deleteDoc(projectRef(project));
};
