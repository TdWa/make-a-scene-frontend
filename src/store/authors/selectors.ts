import { RootState } from "../types";

export const selectAuthorsLoading = (state: RootState) => state.authors.loading;

export const selectAuthorsFeedbackMessage = (state: RootState) =>
  state.authors.message;

export const selectAllScenes = (state: RootState) => state.authors.scenes;

export const selectAuthorScenes = (authorId: number) => (state: RootState) =>
  state.authors.scenes.filter((scene) => scene.authorId === authorId);
