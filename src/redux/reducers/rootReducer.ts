import { combineReducers } from "redux";
import directoryReducer from "./directoryReducer";

const rootReducer = combineReducers({
  directory: directoryReducer,
});
export default rootReducer;
