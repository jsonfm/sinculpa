import { initialState as cartInitialState } from "@/store/cart/reducers";
import { initialState as headerInitialState } from "@/store/header/reducers";


export const initialState = ():ApplicationState => ({
  cartState: cartInitialState(),
  headerState: headerInitialState(),
});
