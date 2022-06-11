export const createCardAction = (titleCard) => {
  return {
    type: "CREATE_CARD",
    paylaod: titleCard,
  };
};

export const createCardInputCheckedAction = (checked) => {
  return {
    type: "CREATE_CARD_INPUT_CHECKED",
    paylaod: checked,
  };
};


export const deletedCardAction = (id) => {
  return {
    type: "DELETED_CARD",
    payload: id,
  };
};
export const redactCardTitleAction = (id, newTitleCard) => {
  return {
    type: "REDACT_CARD_TITLE",
    paylaod: {
      id,
      newTitleCard,
    },
  };
};
