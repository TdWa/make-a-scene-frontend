import { apiUrl, feedbackMessageDuration } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  LOADING_USER,
  USER_FEEDBACK_MESSAGE,
  CLEAR_USER_FEEDBACK_MESSAGE,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
  EDIT_ABOUT,
  CREATE_NEW_SCENE,
  UserActionTypes,
  UserWithoutToken,
  UserWithToken,
} from "./types";
import { AppThunk, ActorsToCreate, Scene } from "../types";

const setNewScene = (scene: Scene): UserActionTypes => ({
  type: CREATE_NEW_SCENE,
  payload: scene,
});

const setAbout = (about: string): UserActionTypes => ({
  type: EDIT_ABOUT,
  payload: about,
});

const loadingUser = (): UserActionTypes => ({ type: LOADING_USER });

const setUserFeedbackMessage = (message: string): UserActionTypes => ({
  type: USER_FEEDBACK_MESSAGE,
  payload: message,
});

export const clearUserFeedbackMessage = (): UserActionTypes => ({
  type: CLEAR_USER_FEEDBACK_MESSAGE,
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

export const createNewScene = (
  sceneName: string,
  actors: ActorsToCreate
): AppThunk => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;

    try {
      const response = await axios.post(
        `${apiUrl}/scenes`,
        {
          sceneName,
          actors,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(setNewScene(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserFeedbackMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserFeedbackMessage(error.message));
      }
    }
  };
};

export const editAbout = (about: string): AppThunk => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;

    const currentAbout = getState().user.about || "";
    try {
      const response = await axios.patch(
        `${apiUrl}/users`,
        {
          about,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(setAbout(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserFeedbackMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserFeedbackMessage(error.message));
      }
      // change the text back to what it was to show that it didn't save
      dispatch(setAbout(currentAbout));
    }
  };
};

export const logOut = (): UserActionTypes => ({ type: LOG_OUT });

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
      dispatch(setUserFeedbackMessage("Account created!"));
      setTimeout(
        () => dispatch(clearUserFeedbackMessage()),
        feedbackMessageDuration
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserFeedbackMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserFeedbackMessage(error.message));
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
      dispatch(setUserFeedbackMessage("Welcome back!"));
      setTimeout(
        () => dispatch(clearUserFeedbackMessage()),
        feedbackMessageDuration
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setUserFeedbackMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserFeedbackMessage(error.message));
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
      } else {
        console.log(error.message);
      }
      dispatch(logOut());
    }
  };
};
