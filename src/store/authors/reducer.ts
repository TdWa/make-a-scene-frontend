import {
  AuthorsState,
  AuthorsActionTypes,
  LOADING_SCENES,
  SCENESFETCH_ERROR,
  SCENESFETCH_SUCCESS,
} from "./types";

const initialState: AuthorsState = {
  loading: false,
  message: null,
  scenes: [],
};

const authorsReducer = (state = initialState, action: AuthorsActionTypes) => {
  switch (action.type) {
    case LOADING_SCENES:
      return { ...state, loading: true };

    case SCENESFETCH_ERROR:
      return { ...state, loading: false, message: action.payload };

    case SCENESFETCH_SUCCESS:
      return { ...state, loading: false, scenes: action.payload };

    default:
      return state;
  }
};

export default authorsReducer;
