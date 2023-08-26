import { combineReducers } from "redux";

import loginReducer from "./login";
import feedReducer from "./feed";

export default combineReducers({
  auth: loginReducer,
  feed: feedReducer,
});
