import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineEllipsis, AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import {
  deletedCardAction,
  redactCardTitleAction,
  redactTaskAction,
  createTaskAction,
  deleteTaskAction,
  createItemAction,
  checkedItemAction,
  redactNameItemAction,
  deletedItemAction,
} from "../../redux/actions/cardsAction";
import { useDispatch } from "react-redux";
import CardMenu from "../CardMenu/CardBurger";
import classNames from "classname";
import Task from "../Task/Task";
import {
  checkedModalCardAction,
  getModalCardAction,
} from "../../redux/actions/modalAction";
import CardFilter from "../CardMenu/CardFilter";

const Card = ({ title = "Текст", cardId, card }) => {
  const dispatch = useDispatch();
  const [checkedkMenuCard, setcheckedMenuCard] = React.useState(false);
  const [checkedkMenuFilter, setcheckedMenuFilter] = React.useState(false);
  const [taskFilter, setTaskFilter] = React.useState(false);

  React.useEffect(() => {
    dispatch(getModalCardAction(card));
  }, [card]);

  const dbClickOpenModal = () => {
    dispatch(getModalCardAction(card));
    dispatch(checkedModalCardAction(true));
  };

  const openCardMenu = (e) => {
    setcheckedMenuCard(!checkedkMenuCard);
  };
  const openCardFilter = (e) => {
    setcheckedMenuFilter(!checkedkMenuFilter);
  };

  const deletedCard = () => {
    const result = window.confirm("Вы точно хотите удаить Карточку ?");
    if (result) {
      dispatch(deletedCardAction(cardId));
    }
    setcheckedMenuCard(false);
  };

  const redactNameCard = () => {
    let newTitle = prompt("Смена названия Карточки", title);
    dispatch(redactCardTitleAction(cardId, newTitle));
    setcheckedMenuCard(false);
  };

  const createTask = () => {
    let newText = prompt("Введите имя Задачи");
    if (newText) {
      dispatch(createTaskAction(card.id, newText));
    }
    setcheckedMenuCard(false);
  };

  const redactTaskName = (cardId, taskId, taskTitle) => {
    let newTitle = prompt("Смена названия Задачи", taskTitle);
    dispatch(redactTaskAction(cardId, taskId, newTitle));
    setcheckedMenuCard(false);
  };

  const deletedTask = (cardId, taskId) => {
    dispatch(deleteTaskAction(cardId, taskId));
  };

  const createItem = (cardId, taskId, nameTask) => {
    dispatch(createItemAction(cardId, taskId, nameTask));
  };
  const checkedItem = (cardId, taskId, itemId, checked) => {
    dispatch(checkedItemAction(cardId, taskId, itemId, checked));
  };
  const redactNameItem = (cardId, taskId, itemId, newNameTask) => {
    if (newNameTask) {
      dispatch(redactNameItemAction(cardId, taskId, itemId, newNameTask));
    }
  };
  const deletedItem = (cardId, taskId, itemId) => {
    dispatch(deletedItemAction(cardId, taskId, itemId));
  };

  //Фильтрация в процессе
  const filterTasksVariety = (e) => {
    setTaskFilter(true);

    if (e.target.innerHTML === "алфавиту") {
      console.log("алфавиту");
      return function (x, y) {
        if (x.title < y.title) {
          return -1;
        }
        if (x.title > y.title) {
          return 1;
        }
        return 0;
      };
    } else if (e.target.innerHTML === "кол-л заданий") {
      console.log("кол-л заданий");
    } else if (e.target.innerHTML === "выполненные") {
      console.log("выполненные");
    }
  };

  return (
    <div onDoubleClick={dbClickOpenModal} className={styles.container}>
      <div className={styles.container__header}>
        <p onClick={redactNameCard} className={styles.container__header_title}>
          {title}
        </p>
        <div className={styles.container__header_block}>
          <AiFillFilter
            className={classNames(
              styles.container__header_icon,
              checkedkMenuFilter && styles.container__header_iconActive
            )}
            onClick={(e) => openCardFilter(e)}
          />

          <AiOutlineEllipsis
            className={classNames(
              styles.container__header_icon,
              checkedkMenuCard && styles.container__header_iconActive
            )}
            onClick={(e) => openCardMenu(e)}
          />
        </div>

        {checkedkMenuCard && (
          <CardMenu
            createTask={createTask}
            redactNameCard={redactNameCard}
            deletedCard={deletedCard}
          />
        )}
        {checkedkMenuFilter && (
          <CardFilter
            filterTasksVariety={filterTasksVariety}
            taskFilter={taskFilter}
          />
        )}
      </div>
      <div className={styles.container__tasks}>
        {card.tasks?.map((task) => (
          <Task
            cardId={card.id}
            key={task.id}
            task={task}
            taskId={task.id}
            redactTaskName={redactTaskName}
            deletedTask={deletedTask}
            createItem={createItem}
            redactNameItem={redactNameItem}
            checkedItem={checkedItem}
            deletedItem={deletedItem}
          />
        ))}
      </div>

      <div onClick={createTask} className={styles.container__footer}>
        <AiOutlinePlus className={styles.container__footer_icon} />
        <p>Добавить задачу</p>
      </div>
    </div>
  );
};

export default Card;
