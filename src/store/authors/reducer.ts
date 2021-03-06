import {
  AuthorsState,
  AuthorsActionTypes,
  LOADING_SCENES,
  SCENESFETCH_ERROR,
  SCENESFETCH_SUCCESS,
  CLEAR_SCENESFETCH_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";
import { UPDATE_SCENE } from "../user/types";

const initialState: AuthorsState = {
  loading: false,
  message: null,
  scenes: [],
};

const authorsReducer = (state = initialState, action: AuthorsActionTypes) => {
  switch (action.type) {
    case UPDATE_SCENE:
      return {
        ...state,
        scenes: state.scenes.map((scene) =>
          scene.id !== action.payload.scene.id
            ? scene
            : {
                ...scene,
                name: action.payload.scene.name,
                backgroundColor: action.payload.scene.backgroundColor,
                description: action.payload.scene.description,
                actors: action.payload.actors,
              }
        ),
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        scenes: state.scenes.map((scene) =>
          scene.id === action.payload.sceneId
            ? {
                ...scene,
                comments: scene.comments.filter(
                  (comment) => comment.id !== action.payload.commentId
                ),
              }
            : scene
        ),
      };

    case ADD_COMMENT:
      return {
        ...state,
        scenes: state.scenes.map((scene) =>
          scene.id === action.payload.sceneId
            ? { ...scene, comments: [...scene.comments, action.payload] }
            : scene
        ),
      };

    case LOADING_SCENES:
      return { ...state, loading: true };

    case SCENESFETCH_ERROR:
      return { ...state, loading: false, message: action.payload };

    case CLEAR_SCENESFETCH_ERROR:
      return { ...state, message: null };

    case SCENESFETCH_SUCCESS:
      return { ...state, loading: false, scenes: action.payload };

    default:
      return state;
  }
};

export default authorsReducer;
