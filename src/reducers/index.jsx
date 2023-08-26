import { combineReducers } from "redux";

import loginReducer from "./login";
// import feed from "./feed";

export const rootReducer = combineReducers({
  auth: loginReducer,
  //   feed,
});
