import { createStore as ReduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const createStore = () => {
  const store = ReduxCreateStore(rootReducer, applyMiddleware(thunk));
  return store;
};
