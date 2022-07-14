// Initial state
export const initialState = (): HeaderState => ({
  showMenuCollapse: false,
})

// Reducer
export const headerReducer = (state: HeaderState = initialState(), action: HeaderAction) => {

  const  { type, payload } = action;

  switch(type){

    case "@header/ToggleHeaderMenuCollapse":
      state.showMenuCollapse = payload as boolean;
      return {...state};

    default:
      return {...state};
  }
}

