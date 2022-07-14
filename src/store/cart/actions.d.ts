interface AddProductToCart {
  type: "@cart/AddProductToCart";
  payload: Product
}

interface RemoveProductFromCart {
  type: "@cart/RemoveProductFromCart";
  payload: Product
}

interface ResetProductsFromCart {
  type: "@cart/ResetProductsFromCart";
  payload: null
}

type CartAction =
  | AddProductToCart
  | RemoveProductFromCart
  | ResetProductsFromCart
