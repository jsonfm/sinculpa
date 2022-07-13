import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { headerReducer } from "./header";


export const rootReducer = combineReducers({
  header: headerReducer,
  cart: cartReducer,
});
