import {
  TOGGLE_CHECKED_BOARD,
  TOGGLE_CHECKED_STAR,
  TOGGLE_CHECKED_WIDGET,
  TOGGLE_CHECKED_WORKPLACE,
  TOGGLE_CHECKED_SHAER,
  TOGGLE_CHECKED_UPDATE,
  TOGGLE_CHECKED_AUTOMATION,
  TOGGLE_CHECKED_FILTER,
  TOGGLE_CHECKED_MENU,
} from "../actions/HeaderAction";

const initState = {
  toggleBoard: false,
  toggleStar: false,
  toggleWidget: false,
  toggleWorkplace: false,
  toggleShare: false,
  toggleUpdate: false,
  toggleAutomation: false,
  toggleFilter: false,
  toggleMenu: false,
};

export const HeaderReducer = (state = initState, action) => {
  switch (action.type) {
    case "NAME":
      return state;

    default:
      return state;
  }
};
