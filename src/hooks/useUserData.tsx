import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const useUserData = () => {
  const { userData } = useSelector((state: RootState) => state.auth);
  return { userData };
};

export default useUserData;
