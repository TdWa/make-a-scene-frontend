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
  UPDATE_SCENE,
  UserActionTypes,
  UserWithoutToken,
  UserWithToken,
  SceneUpdate,
  REMOVE_SCENE,
} from "./types";
import { AppThunk, ActorsToCreate, Scene, Phrase } from "../types";

const removeScene = (sceneId: number): UserActionTypes => ({
  type: REMOVE_SCENE,
  payload: sceneId,
});

const setUpdatedScene = (sceneUpdate: SceneUpdate): UserActionTypes => ({
  type: UPDATE_SCENE,
  payload: sceneUpdate,
});

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

// delete scene and associated actors, phrases & comments
export const deleteScene = (sceneId: number): AppThunk => async (
  dispatch,
  getState
) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const response = await axios.delete(`${apiUrl}/scenes`, {
      data: { sceneId },
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(removeScene(response.data));
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      dispatch(setUserFeedbackMessage(error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setUserFeedbackMessage(error.message));
    }
  }
};

export const updateScene = (
  sceneId: number,
  sceneName: string,
  sceneDescription: string,
  script: Phrase[],
  actorIds: number[]
): AppThunk => async (dispatch, getState) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const response = await axios.patch(
      `${apiUrl}/scenes`,
      {
        sceneId,
        sceneName,
        sceneDescription,
        script,
        actorIds,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch(setUpdatedScene(response.data));
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      dispatch(setUserFeedbackMessage(error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setUserFeedbackMessage(error.message));
    }
  }
};

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
      if (error.response.data.message) {
        console.log(error.response.data.message);
        dispatch(setUserFeedbackMessage(error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setUserFeedbackMessage(error.message));
      }
    }
  };
};

export const editAbout = (about: string): AppThunk => async (
  dispatch,
  getState
) => {
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
    if (error.response.data.message) {
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

export const logOut = (): UserActionTypes => ({ type: LOG_OUT });

export const signUp = (
  name: string,
  email: string,
  password: string
): AppThunk => async (dispatch, getState) => {
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
    if (error.response.data.message) {
      console.log(error.response.data.message);
      dispatch(setUserFeedbackMessage(error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setUserFeedbackMessage(error.message));
    }
  }
};

export const login = (email: string, password: string): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(loadingUser());
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });

    // Sort the actors by Id so they always stay in the same order
    response.data.scenes
      .sort((a: Scene, b: Scene) => (a.id && b.id ? a.id - b.id : 0))
      .map((scene: Scene) => ({
        ...scene,
        actors: scene.actors.sort((a, b) => (a.id && b.id ? a.id - b.id : 0)),
      }));

    dispatch(loginSuccess(response.data));
    dispatch(setUserFeedbackMessage("Welcome back!"));
    setTimeout(
      () => dispatch(clearUserFeedbackMessage()),
      feedbackMessageDuration
    );
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      dispatch(setUserFeedbackMessage(error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setUserFeedbackMessage(error.message));
    }
  }
};

export const getUserWithStoredToken = (): AppThunk => async (
  dispatch,
  getState
) => {
  const token = selectToken(getState());
  if (token === null) return;

  dispatch(loadingUser());
  try {
    const response = await axios.get(`${apiUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Sort the actors by Id so they always stay in the same order
    response.data.scenes
      .sort((a: Scene, b: Scene) => (a.id && b.id ? a.id - b.id : 0))
      .map((scene: Scene) => ({
        ...scene,
        actors: scene.actors.sort((a, b) => (a.id && b.id ? a.id - b.id : 0)),
      }));

    dispatch(tokenStillValid(response.data));
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
    } else {
      console.log(error.message);
    }
    dispatch(logOut());
  }
};
