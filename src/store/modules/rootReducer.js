import { combineReducers } from "redux";

import auth from "./auth/reducers";
import count from "./count/reducers";

export default combineReducers({
  auth,
  count
});