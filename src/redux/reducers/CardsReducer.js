import { nanoid } from "nanoid";
import {
  GET_LOCALSTOREG_CARD,
  DELETED_ALL_CARD,
  CREATE_CARD_INPUT_CHECKED,
  CREATE_CARD,
  REDACT_CARD_TITLE,
  DELETED_CARD,
  CREATE_TASK,
  REDACT_NAME_TASK,
  DELETE_TASK,
  CREATE_ITEM_TASK,
  TOGGLE_CHECKBOX_ITEM_TASK,
  REDACT_NAME_ITEM_TASK,
  DELETED_ITEM_TASK,
  FILTER_TASK_ALPHABET,
  FILTER_TASKS_COMPLETED,
  FILTER_TASKS_AMOUNT,
} from "../types/CardsActionTypes";
const initState = {
  cards: [
    {
      id: nanoid(10),
      title: "Сегодня",
      tasks: [
        {
          id: nanoid(10),
          title: "Задача №1",
          contents: [
            { id: nanoid(10), completed: false, text: "Купить собаку" },
            { id: nanoid(10), completed: false, text: "Продать собаку" },
            { id: nanoid(10), completed: false, text: "Опять купить собаку" },
            {
              id: nanoid(10),
              completed: false,
              text: "Lorem Ipsum - это текст-рыба, часто используемый в Aldus PageMaker, в шаблонах которых используется Lorem Ipsum Maker, в шаблонах которых используется Lorem Ipsum.",
            },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №2",
          contents: [
            { id: nanoid(10), completed: false, text: "Пойти в вуз" },
            { id: nanoid(10), completed: false, text: "Остаться дома" },
            { id: nanoid(10), completed: false, text: "Дебажить проект" },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №3",
          contents: [
            { id: nanoid(10), completed: false, text: "Пойти в магаз " },
            { id: nanoid(10), completed: false, text: "Купить тостер " },
            { id: nanoid(10), completed: false, text: "Хлеб" },
          ],
        },
        {
          id: nanoid(10),
          title: "Задача №4",
          contents: [
            { id: nanoid(10), completed: false, text: "Четкий же сайт" },
            { id: nanoid(10), completed: false, text: "Его нужно докончить" },
            { id: nanoid(10), completed: false, text: "Текст" },
          ],
        },
      ],
    },
    {
      id: nanoid(10),
      title: "Дедлайн",
      tasks: [
        {
          id: nanoid(10),
          title: "Задача №1",
          contents: [
            { id: nanoid(10), completed: false, text: "Рефакторинг кода " },
            { id: nanoid(10), completed: false, text: "Убрать Баг" },
            { id: nanoid(10), completed: false, text: "Оптимизация" },
            { id: nanoid(10), completed: false, text: "Подключить Redux" },
            { id: nanoid(10), completed: false, text: "Написать легкий UI" },
            { id: nanoid(10), completed: false, text: "Адаптация моб" },
            { id: nanoid(10), completed: false, text: "Сверстать Input" },
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
          title: "Никогда в жизни ",
          contents: [
            { id: nanoid(10), completed: false, text: "Отдохнуть" },
            { id: nanoid(10), completed: false, text: "Пойти на море " },
            { id: nanoid(10), completed: false, text: "Поиграть в игры" },
            { id: nanoid(10), completed: false, text: "Посидеть почилить" },
            { id: nanoid(10), completed: false, text: "Поднять зп" },
            { id: nanoid(10), completed: false, text: "Повысить" },
            { id: nanoid(10), completed: false, text: "Дебжить проект" },
          ],
        },
        {
          id: nanoid(10),
          title: "То что сделаю ",
          contents: [
            { id: nanoid(10), completed: false, text: "Мммм" },
            { id: nanoid(10), completed: false, text: "сложно" },
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
  
  //еще не задейстовал 
  createCardInputChecked: false,
};

export const cardsReducer = (state = initState, action) => {
  switch (action.type) {
    //CARD
    //CARD

    case GET_LOCALSTOREG_CARD:
      return action.payload;
    case DELETED_ALL_CARD:
      return { cards: [], createCardInputChecked: false };

    case CREATE_CARD:
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

    case DELETED_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };

    case CREATE_CARD_INPUT_CHECKED:
      return { ...state, createCardInputChecked: action.payload };

    case REDACT_CARD_TITLE:
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

    case CREATE_TASK:
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

    case DELETE_TASK:
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

    case REDACT_NAME_TASK:
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

    case CREATE_ITEM_TASK: //cardId, taskId, nameTask
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

    case DELETED_ITEM_TASK: //cardId, taskId, itemId
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

    case REDACT_NAME_ITEM_TASK: //cardId, taskId, itemId, newNameTask
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

    case TOGGLE_CHECKBOX_ITEM_TASK: //cardId, taskId, itemId, checked
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

    // FilterTasks in Card

    case FILTER_TASK_ALPHABET:
      return {};

    case FILTER_TASKS_COMPLETED:
      return {};

    case FILTER_TASKS_AMOUNT:
      return {};

    default:
      return state;
  }
};
