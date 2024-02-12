import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as authReduer } from "./auth/reducer";
import { reducer as postReducer } from "./postdata/reducer";
import {reducer as patientReducer} from "./patientdata/reducer"

const rootReducer = combineReducers({
  authReduer,
  postReducer,
  patientReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
