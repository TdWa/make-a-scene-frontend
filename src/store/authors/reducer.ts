import { AuthorsState, AuthorsActionTypes } from "./types";

const initialState: AuthorsState = {
  loading: false,
  message: null,
  scenes: [],
};

const authorsReducer = (state = initialState, action: AuthorsActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authorsReducer;
