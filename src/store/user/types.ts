export type UserState = {
  token: string | null;
  name: string | null;
  email: string | null;
  about?: string;
};

export type UserWithoutToken = {
  name: string | null;
  email: string | null;
  about: string | null;
};

export type UserWithToken = UserWithoutToken & { token: string };

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

export type ManualLoginAction = {
  type: typeof LOGIN_SUCCESS;
  payload: UserWithToken;
};

export type TokenLoginAction = {
  type: typeof TOKEN_STILL_VALID;
  payload: UserWithoutToken;
};

export type LogoutAction = {
  type: typeof LOG_OUT;
};

export type UserActionTypes =
  | ManualLoginAction
  | TokenLoginAction
  | LogoutAction;
