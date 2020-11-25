// state type
export type UserState = {
  loading: boolean;
  error: string | null;
  token: string | null;
  name: string | null;
  email: string | null;
  about?: string;
};

// user types
export type UserWithoutToken = {
  name: string;
  email: string;
  about: string;
};

export type UserWithToken = UserWithoutToken & { token: string };

// action types
export const LOADING_USER = "LOADING_USER";
export const USER_REQUEST_ERROR = "USER_REQUEST_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

export type SetLoadingUser = {
  type: typeof LOADING_USER;
};

export type SetUserRequestError = {
  type: typeof USER_REQUEST_ERROR;
  payload: string;
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
  | SetLoadingUser
  | SetUserRequestError
  | ManualLogin
  | TokenLogin
  | Logout;
