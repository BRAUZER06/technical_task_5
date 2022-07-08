import React from "react";
import styles from "./Task.module.scss";
import { AiOutlineEdit, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

import classname from "classname";
const Task = ({
  task,
  cardId,
  redactTaskName,
  deletedTask,
  createItem,
  redactNameItem,
  checkedItem,
  deletedItem,
}) => {
  const fucCreateItem = (cardId, taskID) => {
    let newText = prompt("Введите названия Пункта");
    if (newText) {
      return createItem(cardId, taskID, newText);
    }
  };
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
              fucCreateItem(cardId, task.id);
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
          <div key={content.id} className={styles.container__content_input}>
            <div className={styles.container__content_input_div}>
              <input
                checked={null}
                onChange={(e) => {
                  checkedItem(cardId, task.id, content.id, e.target.checked);
                }}
                name={content.id}
                type="checkbox"
              />
              <p
                onDoubleClick={() =>
                  redactNameItem(
                    cardId,
                    task.id,
                    content.id,
                    prompt("Введите новое название Пункта")
                  )
                }
              >
                {content.text}
              </p>
            </div>

            <div>
              <AiOutlineDelete
                onClick={() => deletedItem(cardId, task.id, content.id)}
                className={classname(
                  styles.container__content__header_icon,
                  styles.container__content__header_iconItemDeletedOpacity
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
