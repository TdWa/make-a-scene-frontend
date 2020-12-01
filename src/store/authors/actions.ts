import { apiUrl } from "../../config/constants";
import axios from "axios";
import { ActorType, AppThunk, AuthorScene } from "../types";
import {
  AuthorsActionTypes,
  LOADING_SCENES,
  SCENESFETCH_SUCCESS,
  SCENESFETCH_ERROR,
} from "./types";

const loadingScenes = (): AuthorsActionTypes => ({ type: LOADING_SCENES });

const scenesFetchSuccess = (scenes: AuthorScene[]): AuthorsActionTypes => ({
  type: SCENESFETCH_SUCCESS,
  payload: scenes,
});

const scenesFetchError = (error: string): AuthorsActionTypes => ({
  type: SCENESFETCH_ERROR,
  payload: error,
});

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
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(scenesFetchError(error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(scenesFetchError(error.message));
    }
  }
};
