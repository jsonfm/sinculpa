// Inital State
export const initialState = (): CartState => ({
  cartProducts: []
});

// Reducer
export const cartReducer = (state: CartState = initialState(), action: CartAction): CartState => {

  const  { type, payload } = action;

  switch(type){

    case "@cart/AddProductToCart":
      state.cartProducts.push(payload as Product)
      return {...state};

    case "@cart/RemoveProductFromCart":
      const productIndex = state.cartProducts.indexOf(payload as Product);
      state.cartProducts.slice(productIndex, 1);
      return {...state};


    default:
      return {...state};
  }
}

