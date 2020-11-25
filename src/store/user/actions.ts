import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  LOADING_USER,
  USER_REQUEST_ERROR,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
  UserActionTypes,
  UserWithoutToken,
  UserWithToken,
} from "./types";
import { AppThunk } from "../types";

const loadingUser = (): UserActionTypes => ({ type: LOADING_USER });

const setUserRequestError = (error: string): UserActionTypes => ({
  type: USER_REQUEST_ERROR,
  payload: error,
});

const loginSuccess = (userWithToken: UserWithToken): UserActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: userWithToken,
});

const tokenStillValid = (
  userWithoutToken: UserWithoutToken
): UserActionTypes => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

const logOut = (): UserActionTypes => ({ type: LOG_OUT });

export const signUp = (
  name: string,
  email: string,
  password: string
): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(loadingUser());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserRequestError(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserRequestError(error.message));
      }
    }
  };
};

export const login = (email: string, password: string): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(loadingUser());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserRequestError(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserRequestError(error.message));
      }
    }
  };
};

export const getUserWithStoredToken = (): AppThunk => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;

    dispatch(loadingUser());
    try {
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserRequestError(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserRequestError(error.message));
      }
      dispatch(logOut());
    }
  };
};
