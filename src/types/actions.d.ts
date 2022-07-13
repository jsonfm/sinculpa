// For header
interface ToggleHeaderMenuCollapse {
  type: "TOGGLE_HEADER_MENU_COLLAPSE";
  payload: boolean;
}

// For cart
interface AddProductToCart {
  type: "ADD_PRODUCT_TO_CART";
  payload: Product;
}

interface RemoveProductFromCart {
  type: "REMOVE_PRODUCT_FROM_CART";
  payload: Product;
}


type ApplicationAction =
  | ToggleHeaderMenuCollapse
  | AddProductToCart
  | RemoveProductFromCart
