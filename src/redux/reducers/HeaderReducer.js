import {
  TOGGLE_CHECKED_SAVE_BOARD,
  TOGGLE_CHECKED_WIDGET,
  TOGGLE_CHECKED_WORKPLACE,
  TOGGLE_CHECKED_SHAER,
  TOGGLE_CHECKED_UPDATE,
  TOGGLE_CHECKED_AUTOMATION,
  TOGGLE_CHECKED_FILTER,
  TOGGLE_CHECKED_MENU,
} from "../types/HeaderActionTypes";

const initState = {
  toggleSaveBoard: false,

  toggleWidget: false,
  toggleWorkplace: false,
  toggleShare: false,
  toggleUpdate: false,
  toggleAutomation: false,
  toggleFilter: false,
  toggleMenu: false,
};

export const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKED_SAVE_BOARD:
    
      return {...state, toggleSaveBoard:action.payload}

    default:
      return state;
  }
};
