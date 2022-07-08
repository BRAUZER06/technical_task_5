import {
  GET_CARD_MODAL,
  CHECKED_CARD_MODAL,
  DELETED_CARD_MODAL,
} from "../types/ModalActionTypes";
const initState = {
  checkedModal: false,
  card: {
    id: 0,
    title: "",
    tasks: [
      {
        id: 0,
        title: "",
        contents: [{ id: 0, completed: false, text: "" }],
      },
    ],
  },
};

export const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CARD_MODAL:
      return { ...state, card: action.payload, checkedModal: true };

    case DELETED_CARD_MODAL:
      return { ...state, card: {}, checkedModal: false };

    case CHECKED_CARD_MODAL:
      return { ...state, checkedModal: action.payload };

    default:
      return state;
  }
};
