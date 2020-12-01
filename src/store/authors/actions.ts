import { apiUrl } from "../../config/constants";
import axios from "axios";
import { ActorType, AppThunk, AuthorScene, CommentType } from "../types";
import {
  AuthorsActionTypes,
  LOADING_SCENES,
  SCENESFETCH_SUCCESS,
  SCENESFETCH_ERROR,
  CLEAR_SCENESFETCH_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";
import { setUserFeedbackMessage } from "../user/actions";
import { selectToken } from "../user/selectors";

const removeComment = (
  commentId: number,
  sceneId: number
): AuthorsActionTypes => ({
  type: REMOVE_COMMENT,
  payload: { commentId, sceneId },
});

const addComment = (comment: CommentType): AuthorsActionTypes => ({
  type: ADD_COMMENT,
  payload: comment,
});

const loadingScenes = (): AuthorsActionTypes => ({ type: LOADING_SCENES });

const scenesFetchSuccess = (scenes: AuthorScene[]): AuthorsActionTypes => ({
  type: SCENESFETCH_SUCCESS,
  payload: scenes,
});

const scenesFetchError = (error: string): AuthorsActionTypes => ({
  type: SCENESFETCH_ERROR,
  payload: error,
});

export const clearScenesFetchError = (): AuthorsActionTypes => ({
  type: CLEAR_SCENESFETCH_ERROR,
});

// delete a comment
export const deleteComment = (commentId: number): AppThunk => async (
  dispatch,
  getState
) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const response = await axios.delete(`${apiUrl}/comments`, {
      data: { commentId },
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(removeComment(response.data.id, response.data.sceneId));
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

// create a new comment
export const createComment = (comment: CommentType): AppThunk => async (
  dispatch,
  getState
) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const response = await axios.post(
      `${apiUrl}/comments`,
      { ...comment },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(addComment(response.data));
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

// get all scenes
export const getScenes: AppThunk = async (dispatch, getState) => {
  dispatch(loadingScenes());
  try {
    const response = await axios.get(`${apiUrl}/scenes`);

    // Sort the actors by Id so they always stay in the same order
    response.data.map((scene: AuthorScene) =>
      scene.actors.sort((a: ActorType, b: ActorType) =>
        a.id && b.id ? a.id - b.id : 0
      )
    );

    dispatch(scenesFetchSuccess(response.data));
  } catch (error) {
    if (error.response.data.message) {
      console.log(error.response.data.message);
      dispatch(scenesFetchError(error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(scenesFetchError(error.message));
    }
  }
};
