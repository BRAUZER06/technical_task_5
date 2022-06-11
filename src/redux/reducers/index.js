import { HeaderReducer } from "./HeaderReducer";
import { combineReducers } from "redux";
import { cardsReducer } from "./CardsReducer";

export const RootReducer = combineReducers({
  header: HeaderReducer,
  card: cardsReducer,
});
