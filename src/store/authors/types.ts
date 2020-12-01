import { AuthorScene } from "../types";

// state type
export type AuthorsState = {
  loading: boolean;
  message: string | null;
  scenes: AuthorScene[];
};

// action types
export const LOADING_AUTHORS = "LOADING_AUTHORS";

type SetLoadingAuthors = {
  type: typeof LOADING_AUTHORS;
};

export type AuthorsActionTypes = SetLoadingAuthors;
