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
  actorId: number;
  index: number;
  text: string;
};

export type ActorType = {
  id?: number;
  sceneId?: number;
  type: "male" | "female";
  name: string;
  backgroundColor: string;
  color: string;
  phrases?: Phrase[];
};

export type Scene = Phrase[];
