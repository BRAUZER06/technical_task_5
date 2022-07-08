import { HeaderReducer } from "./HeaderReducer";
import { combineReducers } from "redux";
import { cardsReducer } from "./CardsReducer";
import { modalReducer } from "./ModalReducer";

export const RootReducer = combineReducers({
  header: HeaderReducer,
  card: cardsReducer,
  modal: modalReducer,
});
