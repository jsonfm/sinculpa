export const cartReducer = (state: ApplicationState, action: ApplicationAction): ApplicationState => {

  const  { type, payload } = action;

  switch(type){

    case "ADD_PRODUCT_TO_CART":
      state.cartProducts.push(payload as Product)
      return {...state};

    case "REMOVE_PRODUCT_FROM_CART":
      const productIndex = state.cartProducts.indexOf(payload as Product);
      state.cartProducts.slice(productIndex, 1);
      return {...state};


    default:
      return {...state};
  }
}

