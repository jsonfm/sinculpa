interface AddProductToCart {
  type: "ADD_PRODUCT_TO_CART";
  payload: Product;
}

interface RemoveProductFromCart {
  type: "REMOVE_PRODUCT_FROM_CART";
  payload: Product;
}
