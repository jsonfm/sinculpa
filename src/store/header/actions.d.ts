interface ToggleHeaderMenuCollapse {
  type: "@header/ToggleHeaderMenuCollapse";
  payload: boolean;
}

type HeaderAction =
  | ToggleHeaderMenuCollapse
