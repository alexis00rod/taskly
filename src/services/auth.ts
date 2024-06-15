import { authFirebase } from "config/firebase.config";
import * as auth from "firebase/auth";

// Check email
export const checkEmail = async (email: string) => {
  return await auth.fetchSignInMethodsForEmail(authFirebase, email);
};

// Login anonymous
export const createTemporalUser = async () => {
  const userCredential = await auth.signInAnonymously(authFirebase);
  const user = userCredential.user;
  return user;
};

// Login
export const loginUser = async (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(authFirebase, email, password);
};

// Logout
export const logoutUser = async () => {
  return auth.signOut(authFirebase);
};
