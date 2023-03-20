import {
  initialUserState,
  loginUserActionCreator,
  userReducer,
} from "../../store/features/userSlice/userSlice";
import { User, UserState } from "../../types/userTypes";

describe("Given a loginUser function", () => {
  describe("When it receives a user", () => {
    test("Then it should set the user's isLogged property to true", () => {
      const mockUser: User = {
        id: "1",
        token: "token",
        username: "felixBauhaus",
        administrator: false,
      };

      const expectedMockUserState: UserState = {
        id: "1",
        token: "token",
        username: "felixBauhaus",
        isLogged: true,
        administrator: false,
      };

      const loginUserAction = loginUserActionCreator(mockUser);

      const updatedUserState = userReducer(initialUserState, loginUserAction);

      expect(updatedUserState).toStrictEqual(expectedMockUserState);
    });
  });
});
