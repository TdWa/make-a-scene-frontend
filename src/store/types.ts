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

export type Phrase = {
  id: number;
  actorId: number;
  index: number;
  text: string;
};

export type ActorType = {
  id?: number;
  type: "man" | "woman";
  name: string;
  backgroundColor: string;
  color: string;
  phrases?: Phrase[];
  currentText?: string;
};

export type ActorsToCreate = {
  actor1: ActorType | null;
  actor2: ActorType | null;
};

export type Scene = {
  id: number;
  name: string;
  description: string | null;
  actors: ActorType[];
};
