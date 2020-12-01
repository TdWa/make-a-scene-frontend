import { AuthorScene } from "../types";

// state type
export type AuthorsState = {
  loading: boolean;
  message: string | null;
  scenes: AuthorScene[];
};

// action types
export const LOADING_SCENES = "LOADING_SCENES";
export const SCENESFETCH_SUCCESS = "SCENESFETCH_SUCCESS";
export const SCENESFETCH_ERROR = "SCENESFETCH_ERROR";
export const CLEAR_SCENESFETCH_ERROR = "CLEAR_SCENESFETCH_ERROR";

type ClearScenesFetchError = {
  type: typeof CLEAR_SCENESFETCH_ERROR;
};

type SetLoadingScenes = {
  type: typeof LOADING_SCENES;
};

type ScenesFetchSuccess = {
  type: typeof SCENESFETCH_SUCCESS;
  payload: AuthorScene[];
};

type ScenesFetchError = {
  type: typeof SCENESFETCH_ERROR;
  payload: string;
};

export type AuthorsActionTypes =
  | ClearScenesFetchError
  | SetLoadingScenes
  | ScenesFetchSuccess
  | ScenesFetchError;
