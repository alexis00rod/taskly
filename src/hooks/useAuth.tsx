import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authFirebase } from "config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { login } from "redux/slices/auth.slice";

const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        dispatch(login({ uid: user.uid, email: user.email }));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuth;
