import decodeToken from "jwt-decode";
import { useCallback } from "react";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { useAppDispatch } from "../../store/hooks";
import { TokenPayload } from "../useUser/types";

interface UseTokenStructure {
  fetchTokenAndLogin: () => void;
  removeTokenAndLogout: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const fetchTokenAndLogin = useCallback(() => {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const { id, username, administrator } =
        decodeToken<TokenPayload>(userToken);

      dispatch(
        loginUserActionCreator({
          id,
          username,
          token: userToken,
          administrator,
        })
      );
    }
  }, [dispatch]);

  const removeTokenAndLogout = () => {
    localStorage.removeItem("token");

    dispatch(logoutUserActionCreator());
  };

  return { fetchTokenAndLogin, removeTokenAndLogout };
};

export default useToken;
