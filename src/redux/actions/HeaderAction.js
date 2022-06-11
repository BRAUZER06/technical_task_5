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
} from "../types/HeaderActionTypes";

export const toggleChecledBoard = (check) => {
  return { type: TOGGLE_CHECKED_BOARD, payload: check };
};
export const toggleChecledStar = (check) => {
  return { type: TOGGLE_CHECKED_STAR, payload: check };
};
export const toggleChecledWidget = (check) => {
  return { type: TOGGLE_CHECKED_WIDGET, payload: check };
};
export const toggleChecledWorkplace = (check) => {
  return { type: TOGGLE_CHECKED_WORKPLACE, payload: check };
};
export const toggleChecledShare = (check) => {
  return { type: TOGGLE_CHECKED_SHAER, payload: check };
};
export const toggleChecledUpdate = (check) => {
  return { type: TOGGLE_CHECKED_UPDATE, payload: check };
};
export const toggleChecledAutomation = (check) => {
  return { type: TOGGLE_CHECKED_AUTOMATION, payload: check };
};
export const toggleChecledFilter = (check) => {
  return { type: TOGGLE_CHECKED_FILTER, payload: check };
};
export const toggleChecledMenu = (check) => {
  return { type: TOGGLE_CHECKED_MENU, payload: check };
};
