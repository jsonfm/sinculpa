import { rootReducer } from "@/reducers";
import { createStore as reduxCreateStore } from "redux";
import { initialState } from "./state";

export const createStore = () => reduxCreateStore(rootReducer, initialState());
