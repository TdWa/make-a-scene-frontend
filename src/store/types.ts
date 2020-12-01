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

export type CommentType = {
  id?: number;
  sceneId: number;
  userId: number;
  userName?: string;
  text: string;
  createdAt?: string;
};

export type AuthorScene = {
  id: number;
  name: string;
  description: string | null;
  authorId: number;
  authorName: string;
  authorAbout: string | null;
  actors: ActorType[];
  comments: CommentType[];
};
