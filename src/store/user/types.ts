import { Scene } from "../types";

// state type
export type UserState = {
  loading: boolean;
  message: string | null;
  token: string | null;
  id?: number; // should I just delete it from the response?
  name: string | null;
  email: string | null;
  scenes: Scene[];
  about?: string | null;
};

// user types
export type UserWithoutToken = {
  id: number;
  name: string;
  email: string;
  about: string | null;
  scenes?: Scene[];
};

export type UserWithToken = UserWithoutToken & { token: string };

// action types
export const CREATE_NEW_SCENE = "CREATE_NEW_SCENE";
export const EDIT_ABOUT = "EDIT_ABOUT";
export const LOADING_USER = "LOADING_USER";
export const USER_FEEDBACK_MESSAGE = "USER_FEEDBACK_MESSAGE";
export const CLEAR_USER_FEEDBACK_MESSAGE = "CLEAR_USER_FEEDBACK_MESSAGE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

export type CreateNewScene = {
  type: typeof CREATE_NEW_SCENE;
  payload: Scene;
};

export type SetAbout = {
  type: typeof EDIT_ABOUT;
  payload: string;
};

export type SetLoadingUser = {
  type: typeof LOADING_USER;
};

export type SetUserFeedbackMessage = {
  type: typeof USER_FEEDBACK_MESSAGE;
  payload: string;
};

export type ClearUserFeedbackMessage = {
  type: typeof CLEAR_USER_FEEDBACK_MESSAGE;
};

export type ManualLogin = {
  type: typeof LOGIN_SUCCESS;
  payload: UserWithToken;
};

export type TokenLogin = {
  type: typeof TOKEN_STILL_VALID;
  payload: UserWithoutToken;
};

export type Logout = {
  type: typeof LOG_OUT;
};

export type UserActionTypes =
  | CreateNewScene
  | SetAbout
  | SetLoadingUser
  | SetUserFeedbackMessage
  | ClearUserFeedbackMessage
  | ManualLogin
  | TokenLogin
  | Logout;
