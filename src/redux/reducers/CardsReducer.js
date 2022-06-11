const initState = {
  cards: [
    {
      id: 0,
      title: "",
    },
  ],
  createCardInputChecked: false,
};
export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CARD":
      // const taskId = state.length ? state[state.length - 1].id + 1 : 1

      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: state.cards[state.cards.length - 1].id + 1,
            title: action.paylaod,
          },
        ],
      };

    case "CREATE_CARD_INPUT_CHECKED":
      return { ...state, createCardInputChecked: action.paylaod };

    case "DELETED_CARD":
      return state.cards.filter((card) => card.id !== action.paylaod);
    case "REDACT_CARD_TITLE":
      return state;

    default:
      return state;
  }
};
