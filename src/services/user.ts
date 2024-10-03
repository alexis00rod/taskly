import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";
import { ProfileTypes } from "@models";

// References
const userRef = (uid: string) => db.doc(dbFirebase, "users", uid);

// Function to create user document
export const createUserDoc = async (uid: string, email: string) => {
  return await db.setDoc(userRef(uid), {
    uid,
    email,
    createdAt: db.serverTimestamp(),
    updateAt: db.serverTimestamp(),
  });
};

// Function to get user per id
export const getUserPerId = (
  id: string,
  callback: (user: ProfileTypes) => void
) => {
  const unsubscribe = db.onSnapshot(userRef(id), (snapshot) => {
    const user: ProfileTypes = {
      id: snapshot.id,
      ...snapshot.data(),
    };
    callback(user);
  });
  return unsubscribe;
};
