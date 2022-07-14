import classname from "classname";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  checkedItemAction,
  deletedItemAction,
  redactNameItemAction,
} from "../../redux/actions/cardsAction";
import styles from "./Content.module.scss";

const Content = ({ cardId, taskId, content, }) => {
  const dispatch = useDispatch();

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
    <div
      draggable={true}
      key={content.id}
      className={styles.container__content_input}
    >
      <div className={styles.container__content_input_div}>
        <input
          checked={content.completed}
          onChange={(e) => {
            checkedItem(cardId, taskId, content.id, e.target.checked);
          }}
          name={content.id}
          type="checkbox"
        />
        <p
          onDoubleClick={() =>
            redactNameItem(
              cardId,
              taskId,
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
          onClick={() => deletedItem(cardId, taskId, content.id)}
          className={classname(
            styles.container__content__footer_icon,
            styles.container__content__footer_iconItemDeletedOpacity
          )}
        />
      </div>
    </div>
  );
};

export default Content;
