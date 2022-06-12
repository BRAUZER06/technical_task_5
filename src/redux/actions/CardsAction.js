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
    paylaod: id,
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

export const createTask = (cardId, textTask) => {
  return {
    type: "CREATE_TASK",
    paylaod: { cardId, textTask },
  };
};

export const deleteTask = (cardId, TastId) => {
  return {
    type: "DELETE_TASK",
    paylaod: { cardId, TastId },
  };
};

export const redactTask = (cardId, TastId, newText) => {
  return {
    type: "REDACT_TASK",
    paylaod: { cardId, TastId, newText },
  };
};
