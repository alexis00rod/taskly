import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";

// References
const favoriteRef = (uid: string, project: string) =>
  db.doc(dbFirebase, "users", uid, "favorites", project);

// Function to see if a project exists in favorites
export const isProjectInFavorites = (
  uid: string,
  project: string,
  callback: (isFavorite: boolean) => void
) => {
  const unsubscribe = db.onSnapshot(favoriteRef(uid, project), (snapshot) => {
    if (snapshot.exists()) {
      callback(true);
    } else {
      callback(false);
    }
  });
  return unsubscribe;
};

// Function to add project to favorites
export const addProjectToFavorites = async (uid: string, project: string) => {
  return await db.setDoc(favoriteRef(uid, project), {
    addedAt: db.serverTimestamp(),
  });
};

// Function to remove project to favorites
export const removeProjectToFavorites = async (
  uid: string,
  project: string
) => {
  return await db.deleteDoc(favoriteRef(uid, project));
};
