import React from "react";
import styles from "./Card.module.scss";
import {
  AiOutlineEllipsis,
  AiOutlineEdit,
  AiOutlinePlus,
} from "react-icons/ai";
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
} from "../../redux/actions/CardsAction";
import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../CardMenu/CardMenu";
import classNames from "classname";
import Task from "../Task/Task";

const Card = ({ title = "Текст", id, card }) => {
  const dispatch = useDispatch();

  const [checkedkMenuCard, setcheckedMenuCard] = React.useState(false);

  const openCardMenu = () => {
    setcheckedMenuCard(!checkedkMenuCard);
  };
  const deletedCard = () => {
    const result = window.confirm("Вы точно хотите удаить Карточку ?");
    if (result) {
      dispatch(deletedCardAction(id));
    }
  };
  const redactNameCard = () => {
    let newTitle = prompt("Смена названия Карточки", title);

    dispatch(redactCardTitleAction(id, newTitle));
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

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p onClick={redactNameCard} className={styles.container__header_title}>
          {title}
        </p>
        <div
          className={classNames(
            styles.container__header_icon,
            checkedkMenuCard && styles.container__header_iconActive
          )}
        >
          <AiOutlineEllipsis onClick={openCardMenu} />
        </div>

        {checkedkMenuCard && (
          <CardMenu
            createTask={createTask}
            redactNameCard={redactNameCard}
            deletedCard={deletedCard}
          />
        )}
      </div>
      <div className={styles.container__tasks}>
        {card.tasks.map((task) => (
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
