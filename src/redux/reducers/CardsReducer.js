import { nanoid } from "nanoid";

const initState = {
  cards: [
    {
      id: nanoid(10),
      title: "",
      tasks: [],
    },
    {
      id: "MaCavWXKfI",
      title: "123123123",
      tasks: [],
    },
    {
      id: "AVcriEjXIH",
      title: "345345345345",
      tasks: [],
    },
  ],
  createCardInputChecked: false,
};

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CARD":
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: nanoid(10),
            title: action.paylaod,
            tasks: [],
          },
        ],
      };

    case "DELETED_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.paylaod),
      };

    case "CREATE_CARD_INPUT_CHECKED":
      return { ...state, createCardInputChecked: action.paylaod };

    //доделать
    case "REDACT_CARD_TITLE":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.paylaod.id) {
            return { ...card, title: action.paylaod.newTitleCard };
          }
          return card;
        }),
      };

    case "CREATE_TASK":
      return state;
    case "DELETE_TASK":
      return state;
    case "REDACT_TASK":
      return state;

    default:
      return state;
  }
};
