import { combineReducers } from "redux";
import user from "./user/reducer";
import authors from "./authors/reducer";

const rootReducer = combineReducers({
  user,
  authors,
});

export default rootReducer;
