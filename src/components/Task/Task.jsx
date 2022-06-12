import React from "react";
import styles from "./Task.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
const Task = ({ task, redactTaskName, cardId }) => {
  return (
    <div className={styles.container__content}>
      <div className={styles.container__content__header}>
        <p>{task.title}</p>
        <AiOutlineEdit
          onClick={() => redactTaskName(cardId, task.id, task.title)}
          className={styles.container__content__header_icon}
        />
      </div>

      <div className={styles.container__content__section}>
        {task.contents?.map((content) => (
          <div
            key={content.id}
            className={styles.container__content__section_input}
          >
            <input type="checkbox" />
            <p>{content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
