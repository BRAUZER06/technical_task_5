import {
  GET_CARD_MODAL,
  CHECKED_CARD_MODAL,
  DELETED_CARD_MODAL,
} from "../types/ModalActionTypes";
export const getModalCardAction = (card) => {
  return {
    type: GET_CARD_MODAL,
    payload: card,
  };
};
export const deletedModalCardAction = () => {
  return {
    type: DELETED_CARD_MODAL,
  };
};
export const checkedModalCardAction = (checked) => {
  return {
    type: CHECKED_CARD_MODAL,
    payload: checked,
  };
};
