import {
  UserState,
  UserActionTypes,
  LOADING_USER,
  USER_FEEDBACK_MESSAGE,
  CLEAR_USER_FEEDBACK_MESSAGE,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
} from "./types";

const initialState: UserState = {
  loading: false,
  message: null,
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...state, loading: true };

    case USER_FEEDBACK_MESSAGE:
      return { ...state, loading: false, message: action.payload };

    case CLEAR_USER_FEEDBACK_MESSAGE:
      return { ...state, message: null };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, loading: false, ...action.payload };

    case TOKEN_STILL_VALID:
      return { ...state, loading: false, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    default:
      return state;
  }
};

export default userReducer;
