import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { User, onAuthStateChanged } from "firebase/auth";
import { login, setLoading } from "redux/slices/auth.slice";
import { authFirebase } from "config/firebase.config";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(false));

    const unsubscribe = onAuthStateChanged(
      authFirebase,
      (user: User | null) => {
        if (user) {
          dispatch(
            login({
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL || null,
            })
          );
        }
        dispatch(setLoading(true));
      },
      (error) => {
        console.error("Error in onAuthStateChanged:", error);
        dispatch(setLoading(true));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default useAuth;
