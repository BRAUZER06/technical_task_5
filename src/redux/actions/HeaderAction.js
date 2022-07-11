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

export const toggleCheckedSaveBoardAction = (checked) => {
  return { type: TOGGLE_CHECKED_SAVE_BOARD, payload: checked };
};

export const toggleChecledWidgetAction = (checked) => {
  return { type: TOGGLE_CHECKED_WIDGET, payload: checked };
};
export const toggleChecledWorkplaceAction = (checked) => {
  return { type: TOGGLE_CHECKED_WORKPLACE, payload: checked };
};
export const toggleChecledShareAction = (checked) => {
  return { type: TOGGLE_CHECKED_SHAER, payload: checked };
};
export const toggleChecledUpdateAction = (checked) => {
  return { type: TOGGLE_CHECKED_UPDATE, payload: checked };
};
export const toggleChecledAutomationAction = (checked) => {
  return { type: TOGGLE_CHECKED_AUTOMATION, payload: checked };
};
export const toggleChecledFilterAction = (checked) => {
  return { type: TOGGLE_CHECKED_FILTER, payload: checked };
};
export const toggleChecledMenuAction = (checked) => {
  return { type: TOGGLE_CHECKED_MENU, payload: checked };
};
