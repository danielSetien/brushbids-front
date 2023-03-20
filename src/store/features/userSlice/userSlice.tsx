import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types/userTypes";

export const initialUserState: UserState = {
  username: "",
  token: "",
  id: "",
  isLogged: false,
  administrator: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (currentUserState: UserState): UserState => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
