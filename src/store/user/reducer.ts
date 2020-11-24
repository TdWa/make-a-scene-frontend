import {
  UserState,
  UserActionTypes,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
} from "./types";

const initialState: UserState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    default:
      return state;
  }
};
