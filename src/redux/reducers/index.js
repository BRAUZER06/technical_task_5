import { headerReducer } from "./headerReducer";
import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { modalReducer } from "./modalReducer";

export const RootReducer = combineReducers({
  header: headerReducer,
  card: cardsReducer,
  modal: modalReducer,
});
