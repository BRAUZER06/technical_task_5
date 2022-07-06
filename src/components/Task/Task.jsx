import React from "react";
import styles from "./Task.module.scss";
import { AiOutlineEdit, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
const Task = ({
  task,
  cardId,
  redactTaskName,
  deletedTask,
  createItem,
  checkedItem,
  deletedItem,
}) => {
  return (
    <div className={styles.container__content}>
      <div className={styles.container__content__header}>
        <p>{task.title}</p>
        <div>
          <AiOutlineDelete
            onClick={() => deletedTask(cardId, task.id)}
            className={styles.container__content__header_icon}
          />
          <AiOutlinePlus
            onClick={() => {
              createItem(cardId, task.id, prompt("Введите названия Пункта"));
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
        {task.contents?.map((content) => (
          <div
            key={content.id}
            className={styles.container__content__section_input}
          >
            <input
              onClick={() => checkedItem(cardId, task.id, content.id)}
              type="checkbox"
            />
            <p>{content.text}</p>
            <div>
              <AiOutlineDelete
                onClick={() => deletedItem(cardId, task.id, content.id)}
                className={styles.container__content__header_icon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
