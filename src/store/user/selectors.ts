import { RootState } from "../types";

export const selectUserLoading = (state: RootState) => state.user.loading;

export const selectUserFeedbackMessage = (state: RootState) =>
  state.user.message;

export const selectToken = (state: RootState) => state.user.token;

export const selectUser = (state: RootState) => state.user;

export const selectUserScenes = (state: RootState) => state.user.scenes;
