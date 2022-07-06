export const createCardAction = (titleCard) => {
  return {
    type: "CREATE_CARD",
    payload: titleCard,
  };
};

export const createCardInputCheckedAction = (checked) => {
  return {
    type: "CREATE_CARD_INPUT_CHECKED",
    payload: checked,
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
    payload: {
      id,
      newTitleCard,
    },
  };
};

//TASK
//TASK

export const createTaskAction = (cardId, textTask) => {
  console.log(cardId, textTask);
  return {
    type: "CREATE_TASK",
    payload: { cardId, textTask },
  };
};

export const deleteTaskAction = (cardId, taskId) => {
  return {
    type: "DELETE_TASK",
    payload: { cardId, taskId },
  };
};

export const redactTaskAction = (cardId, taskId, newText) => {
  return {
    type: "REDACT_NAME_TASK",
    payload: { cardId, taskId, newText },
  };
};

//ITEM
//ITEM

export const createItemAction = (cardId, taskId, nameTask) => {
  return {
    type: "CREATE_ITEM_TASK",
    payload: { cardId, taskId, nameTask },
  };
};
export const checkedItemAction = (cardId, taskId, itemId) => {
  return {
    type: "TOGGLE_CHECKBOX_TASK",
    payload: { cardId, taskId, itemId },
  };
};
export const redactNameItemAction = (cardId, taskId, itemId, newNameTask) => {
  return {
    type: "REDACT_NAME_ITEM_TASK",
    payload: { cardId, taskId, itemId, newNameTask },
  };
};
export const deletedItemAction = (cardId, taskId, itemId) => {
  return {
    type: "DELETED_ITEM_TASK",
    payload: { cardId, taskId, itemId },
  };
};
