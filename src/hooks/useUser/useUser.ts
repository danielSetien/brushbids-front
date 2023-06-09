import decodeToken from "jwt-decode";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import displayErrorModal from "../../utils/componentUtils/modals/errorModal";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import {
  setButtonIsLoadingActionCreator,
  unsetButtonIsLoadingActionCreator,
} from "../../store/features/userUi/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { User, UserCredentials } from "../../types/userTypes";
import {
  frontRouteUtils,
  backRouteUtils,
} from "../../utils/routeUtils/routeUtils";
import { BackLoginResponse, TokenPayload } from "./types";
import definedResponses from "../../utils/responseUtils/responseUtils";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const { homePage } = frontRouteUtils;
  const { loginEndpoint } = backRouteUtils;

  const loginUser = async (userCredentials: UserCredentials) => {
    dispatch(setButtonIsLoadingActionCreator());

    try {
      const backResponse = await fetch(`${apiUrl}${loginEndpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      if (!backResponse.ok) {
        throw new Error(definedResponses.rejectedCredentials.message);
      }

      const { token } = (await backResponse.json()) as BackLoginResponse;

      const tokenPayload: TokenPayload = decodeToken(token);
      const { id, username, administrator } = tokenPayload;

      const user: User = {
        id,
        username,
        token,
        administrator,
      };

      dispatch(loginUserActionCreator(user));

      localStorage.setItem("token", token);

      dispatch(unsetButtonIsLoadingActionCreator());

      router.push(homePage);
    } catch (error: unknown) {
      dispatch(unsetButtonIsLoadingActionCreator());

      displayErrorModal((error as Error).message);
    }
  };

  return { loginUser };
};

export default useUser;
