import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../types/uiTypes";

export const initialUiState: UiState = {
  isLoading: false,
  buttonIsLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      isLoading: true,
    }),

    unsetIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      isLoading: false,
    }),

    setButtonIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      buttonIsLoading: true,
    }),

    unsetButtonIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      buttonIsLoading: false,
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  setButtonIsLoading: setButtonIsLoadingActionCreator,
  unsetButtonIsLoading: unsetButtonIsLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
