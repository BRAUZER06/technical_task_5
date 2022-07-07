import { nanoid } from "nanoid";

const initState = {
  cards: [
    {
      id: nanoid(10),
      title: "Title1",
      tasks: [
        {
          id: nanoid(10),
          title: "Задача №1",
          contents: [
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №2",
          contents: [
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №3",
          contents: [
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
            { id: nanoid(10), completed: false, text: "Текст Текст2" },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №4",
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
      title: "Title2",
      tasks: [
        {
          id: nanoid(10),
          title: "Задача №1",
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

    {
      id: nanoid(10),
      title: "Title3",
      tasks: [
        {
          id: nanoid(10),
          title: "Задача №1",
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
        {
          id: nanoid(10),
          title: "Задача №2",
          contents: [
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
            { id: nanoid(10), completed: false, text: "Текст Текст3" },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №3",
          contents: [],
        },
      ],
    },
  ],
  createCardInputChecked: false,
};

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    //CARD
    //CARD

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

    //TASK
    //TASK

    case "CREATE_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: [
                ...card.tasks,
                {
                  id: nanoid(10),
                  title: action.payload.textTask,
                  contents: [],
                },
              ],
            };
          }
          return card;
        }),
      };

    case "DELETE_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks.filter(
                (task) => task.id !== action.payload.taskId
              ),
            };
          }
          return card;
        }),
      };

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

    //ITEM
    //ITEM

    case "CREATE_ITEM_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks.map((task) => {
                if (task.id === action.payload.taskId) {
                  return {
                    ...task,
                    contents: [
                      ...task.contents,
                      {
                        id: nanoid(10),
                        completed: false,
                        text: action.payload.nameTask,
                      },
                    ],
                  };
                }
                return task;
              }),
            };
          }
          return card;
        }),
      };
    //cardId, taskId, nameTask

    case "DELETED_ITEM_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks.map((task) => {
                if (task.id === action.payload.taskId) {
                  return {
                    ...task,
                    contents: task.contents.filter(
                      (item) => item.id !== action.payload.itemId
                    ),
                  };
                }
                return task;
              }),
            };
          }
          return card;
        }),
      };
    //cardId, taskId, itemId

    case "REDACT_NAME_ITEM_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks.map((task) => {
                if (task.id === action.payload.taskId) {
                  return {
                    ...task,
                    contents: task.contents.map((item) => {
                      if (item.id === action.payload.itemId) {
                        return { ...item, text: action.payload.newNameTask };
                      }
                      return item;
                    }),
                  };
                }
                return task;
              }),
            };
          }
          return card;
        }),
      };
    //cardId, taskId, itemId, newNameTask

    case "TOGGLE_CHECKBOX_ITEM_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.cardId) {
            return {
              ...card,
              tasks: card.tasks.map((task) => {
                if (task.id === action.payload.taskId) {
                  return {
                    ...task,
                    contents: task.contents.map((item) => {
                      if (item.id === action.payload.itemId) {
                        return { ...item, completed: action.payload.checked };
                      }
                      return item;
                    }),
                  };
                }
                return task;
              }),
            };
          }
          return card;
        }),
      };
    //cardId, taskId, itemId, checked

    default:
      return state;
  }
};
