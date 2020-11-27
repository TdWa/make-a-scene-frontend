import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// work in progress..
export type Phrase = {
  id: number;
  index: number;
  text: string;
};

export type ActorType = {
  id?: number;
  type: "male" | "female";
  name: string;
  backgroundColor: string;
  color: string;
  phrases?: Phrase[];
};

export type ActorsToCreate = {
  actor1: ActorType | null;
  actor2: ActorType | null;
};

export type Scene = {
  id: number;
  name: string;
  actors: ActorType[];
};
