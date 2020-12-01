import { AuthorScene, CommentType } from "../types";

// state type
export type AuthorsState = {
  loading: boolean;
  message: string | null;
  scenes: AuthorScene[];
};

// action types
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const LOADING_SCENES = "LOADING_SCENES";
export const SCENESFETCH_SUCCESS = "SCENESFETCH_SUCCESS";
export const SCENESFETCH_ERROR = "SCENESFETCH_ERROR";
export const CLEAR_SCENESFETCH_ERROR = "CLEAR_SCENESFETCH_ERROR";

type RemoveComment = {
  type: typeof REMOVE_COMMENT;
  payload: { commentId: number; sceneId: number };
};

type AddComment = {
  type: typeof ADD_COMMENT;
  payload: CommentType;
};

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
  | RemoveComment
  | AddComment
  | ClearScenesFetchError
  | SetLoadingScenes
  | ScenesFetchSuccess
  | ScenesFetchError;
