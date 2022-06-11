import { legacy_createStore as createStore } from "redux";

import { RootReducer } from "./reducers";

export const store = createStore(RootReducer);
