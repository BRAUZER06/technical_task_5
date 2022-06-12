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
} from "../../redux/actions/CardsAction";
import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../CardMenu/CardMenu";
import classNames from "classname";
import Task from "../Task/Task";

const Card = ({ title = "Текст", id, card }) => {
  const dispatch = useDispatch();

  const [checkedkMenuCard, setcheckedMenuCard] = React.useState(false);

  const onClickOpenCardMenu = () => {
    setcheckedMenuCard(!checkedkMenuCard);
  };
  const onClickDeletedCard = () => {
    console.log(id);
    dispatch(deletedCardAction(id));
  };
  const onClickRedactNameCard = () => {
    let newTitle = prompt("Смена названия карточки", title);
    dispatch(redactCardTitleAction(id, newTitle));
  };

  const redactTaskName = (cardId, taskId, taskTitle) => {
    let newTitle = prompt("Смена названия задачи", taskTitle);
    dispatch(redactTaskAction(cardId, taskId, newTitle));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p
          onClick={onClickRedactNameCard}
          className={styles.container__header_title}
        >
          {title}
        </p>
        <div
          className={classNames(
            styles.container__header_icon,
            checkedkMenuCard && styles.container__header_iconActive
          )}
        >
          <AiOutlineEllipsis onClick={onClickOpenCardMenu} />
        </div>

        {checkedkMenuCard && (
          <CardMenu
            onClickRedactNameCard={onClickRedactNameCard}
            onClickDeletedCard={onClickDeletedCard}
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
          />
        ))}
      </div>

      <div className={styles.container__footer}>
        <AiOutlinePlus className={styles.container__footer_icon} />
        <p>Добавить задачу</p>
      </div>
    </div>
  );
};

export default Card;
