import React from "react";
import styles from "./Task.module.scss";
import { AiOutlineEdit, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

import classname from "classname";
import Content from "../Content/Content";
import {
  createItemAction,
  deleteTaskAction,
  redactTaskAction,
} from "../../redux/actions/cardsAction";
import { useDispatch } from "react-redux";

const Task = ({ task, cardId, handlerOpenCardMenu }) => {
  const dispatch = useDispatch();

  const createItem = (cardId, taskId) => {
    let newText = prompt("Введите названия Пункта");
    if (newText) {
      dispatch(createItemAction(cardId, taskId, newText));
    }

    handlerOpenCardMenu();
  };

  const redactTaskName = (cardId, taskId, taskTitle) => {
    let newTitle = prompt("Смена названия Задачи", taskTitle);
    dispatch(redactTaskAction(cardId, taskId, newTitle));

    handlerOpenCardMenu();
  };

  const deletedTask = (cardId, taskId) => {
    dispatch(deleteTaskAction(cardId, taskId));
  };

  const dragOverHandler = () => {};
  const dragLeaveHandler = () => {};
  const dragStartHandler = () => {};
  const dragEndHandler = () => {};
  const dropHandler = () => {};

  return (
    <div className={styles.container__content}>
      <div className={styles.container__content__header}>
        <p>{task.title}</p>
        <div>
          <AiOutlineDelete
            onClick={() => deletedTask(cardId, task.id)}
            className={classname(
              styles.container__content__header_icon,
              styles.container__content__header_iconTaskDeletedOpacity
            )}
          />
          <AiOutlinePlus
            onClick={() => {
              createItem(cardId, task.id);
            }}
            className={styles.container__content__header_icon}
          />
          <AiOutlineEdit
            onClick={() => redactTaskName(cardId, task.id, task.title)}
            className={styles.container__content__header_icon}
          />
        </div>
      </div>

      <div className={styles.container__content__section}>
        {task.contents.map((content) => (
          <Content
            key={content.id}
            cardId={cardId}
            taskId={task.id}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};

export default Task;
