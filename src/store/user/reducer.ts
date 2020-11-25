import {
  UserState,
  UserActionTypes,
  LOADING_USER,
  USER_REQUEST_ERROR,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
} from "./types";

const initialState: UserState = {
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...state, loading: true, error: null };

    case USER_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, loading: false, error: null, ...action.payload };

    case TOKEN_STILL_VALID:
      return { ...state, loading: false, error: null, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    default:
      return state;
  }
};

export default userReducer;
