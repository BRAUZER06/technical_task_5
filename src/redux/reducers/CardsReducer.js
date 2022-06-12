import { nanoid } from "nanoid";

const initState = {
  cards: [
    {
      id: nanoid(10),
      title: "Title1",
      tasks: [
        {
          id: nanoid(10),
          title: "Заголовок1",
          contents: [
            {
              id: nanoid(10),
              completed: false,
              text: "Текст Текст1",
            },
            { id: nanoid(10), completed: false, text: "Текст Текст1" },
            { id: nanoid(10), completed: false, text: "Текст Текст1" },
            { id: nanoid(10), completed: false, text: "Текст Текст1" },
            { id: nanoid(10), completed: false, text: "Текст Текст1" },
          ],
        },
      ],
    },
    {
      id: nanoid(10),
      title: "Title2",
      tasks: [
        {
          id: nanoid(10),
          title: "Заголовок2",
          contents: [
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
          ],
        },
      ],
    },
    {
      id: nanoid(10),
      title: "Title3",
      tasks: [
        {
          id: nanoid(10),
          title: "Заголовок3",
          contents: [
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
          ],
        },
      ],
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
            title: action.payload,
            tasks: [],
          },
        ],
      };

    case "DELETED_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };

    case "CREATE_CARD_INPUT_CHECKED":
      return { ...state, createCardInputChecked: action.payload };

    //доделать
    case "REDACT_CARD_TITLE":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) {
            return { ...card, title: action.payload.newTitleCard };
          }
          return card;
        }),
      };

    case "CREATE_TASK":
      return state;

    case "DELETE_TASK":
      return state;

    case "REDACT_NAME_TASK":
      return {
        ...state,
        cards: state.cards?.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks?.map((task) => {
                if (task.id === action.payload.taskId) {
                  return { ...task, title: action.payload.newText };
                }
                return task;
              }),
            };
          }
          return card;
        }),
      };
    // cardId, taskId, newText

    case "DELETED_ITEM_TASK":
      return state;

    case "REDACT_NAME_ITEM_TASK":
      return state;

    case "CREATE_ITEM_TASK":
      return state;

    case "TOGGLE_CHECKBOX_TASK":
      return state;

    default:
      return state;
  }
};
