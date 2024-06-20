import { FirebaseOptions, initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import * as db from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = auth.getAuth(appFirebase);
export const dbFirebase = db.getFirestore(appFirebase);
