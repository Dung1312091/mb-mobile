/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
/** import main reducer load sync */
import commonsReducer from "./commons";

const createReducer = (injectedReducers = {}) => (state, action) =>
  combineReducers({
    commonsReducer,
    ...injectedReducers
  })(action.type === "LOGOUT_SUCCESS" ? undefined : state, action);
export default createReducer;
