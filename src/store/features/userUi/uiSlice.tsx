import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../types/uiTypes";

export const initialUiState: UiState = {
  isLoading: false,
  submitIsLoading: false,
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

    setSubmitIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      submitIsLoading: true,
    }),

    unsetSubmitIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      submitIsLoading: false,
    }),
  },
});

export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
  setSubmitIsLoading: setButtonIsLoadingActionCreator,
  unsetSubmitIsLoading: unsetButtonIsLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
