import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/reducers";
import { headerReducer } from "./header/reducers";

export const rootReducer = combineReducers({
  headerState: headerReducer,
  cartState: cartReducer,
});
