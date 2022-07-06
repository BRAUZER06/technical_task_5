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
    dispatch(deletedCardAction(id));
  };
  const redactNameCard = () => {
    let newTitle = prompt("Смена названия карточки", title);
    dispatch(redactCardTitleAction(id, newTitle));
    setcheckedMenuCard(false);
  };

  const createTask = () => {
    let newText = prompt("Введите имя Задачи");
    dispatch(createTaskAction(card.id, newText));
  };
  const redactTaskName = (cardId, taskId, taskTitle) => {
    let newTitle = prompt("Смена названия задачи", taskTitle);
    dispatch(redactTaskAction(cardId, taskId, newTitle));
  };
  const deletedTask = (cardId, taskId) => {
    dispatch(deleteTaskAction(cardId, taskId));
  };

  const createItem = (cardId, taskId, nameTask) => {
    dispatch(createItemAction(cardId, taskId, nameTask));
  };
  const checkedItem = (cardId, taskId, itemId) => {
    dispatch(checkedItemAction(cardId, taskId, itemId));
  };
  const redactNameItem = (cardId, taskId, itemId, newNameTask) => {
    dispatch(redactNameItemAction(cardId, taskId, itemId, newNameTask));
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
