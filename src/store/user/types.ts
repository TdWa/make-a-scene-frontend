// state type
export type UserState = {
  loading: boolean;
  message: string | null;
  token: string | null;
  name: string | null;
  email: string | null;
  about?: string;
  scenes?: any[]; // change to a scene type later
};

// user types
export type UserWithoutToken = {
  name: string;
  email: string;
  about: string;
};

export type UserWithToken = UserWithoutToken & { token: string };

// action types
export const EDIT_ABOUT = "EDIT_ABOUT";
export const LOADING_USER = "LOADING_USER";
export const USER_FEEDBACK_MESSAGE = "USER_FEEDBACK_MESSAGE";
export const CLEAR_USER_FEEDBACK_MESSAGE = "CLEAR_USER_FEEDBACK_MESSAGE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

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
  | SetAbout
  | SetLoadingUser
  | SetUserFeedbackMessage
  | ClearUserFeedbackMessage
  | ManualLogin
  | TokenLogin
  | Logout;
