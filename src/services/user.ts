import { dbFirebase } from "config/firebase.config";
import * as db from "firebase/firestore";

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
