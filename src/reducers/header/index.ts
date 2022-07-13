
export const headerReducer = (state: HeaderState = {showMenuCollapse: false}, action: ApplicationAction) => {

  const  { type, payload } = action;

  switch(type){

    case "TOGGLE_HEADER_MENU_COLLAPSE":
      state.showMenuCollapse = payload as boolean;
      return {...state};

    default:
      return {...state};
  }
}

