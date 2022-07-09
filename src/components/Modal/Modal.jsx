import classname from "classname";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkedModalCardAction } from "../../redux/actions/ModalAction";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEllipsis,
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
import styles from "./Modal.module.scss";
import CardMenu from "../CardMenu/CardMenu";

const Modal = () => {
  const dispatch = useDispatch();
  const [checkedkMenuCard, setcheckedMenuCard] = React.useState(false);
  const checkedModal   = useSelector((state) => state.modal.checkedModal);
  const card = useSelector((state) => state.modal.card);
  console.log('card Modal',card);
  const closeModal = () => {
    dispatch(checkedModalCardAction(false));
  };

  const redactNameCard = () => {
    let newTitle = prompt("Смена названия Карточки", card.title);

    dispatch(redactCardTitleAction(card.id, newTitle));
  };
  const createTask = () => {
    let newText = prompt("Введите имя Задачи");
    if (newText) {
      dispatch(createTaskAction(card.id, newText));
    }

    setcheckedMenuCard(false);
  };
  const deletedCard = () => {
    const result = window.confirm("Вы точно хотите удаить Карточку ?");
    if (result) {
      dispatch(deletedCardAction(card.id));
    }
    setcheckedMenuCard(false);
  };
  const redactTaskName = (cardID, taskId, taskTitle) => {
    let newTitle = prompt("Смена названия Задачи", taskTitle);
    dispatch(redactTaskAction(cardID, taskId, newTitle));
    setcheckedMenuCard(false);
  };
  const deletedTask = (cardID, taskId) => {
    dispatch(deleteTaskAction(cardID, taskId));
  };

  const createItem = (cardID, taskId, nameTask) => {
    dispatch(createItemAction(cardID, taskId, nameTask));
  };
  const checkedItem = (cardID, taskId, itemId, checked) => {
    dispatch(checkedItemAction(cardID, taskId, itemId, checked));
  };
  const redactNameItem = (cardID, taskId, itemId, newNameTask) => {
    if (newNameTask) {
      dispatch(redactNameItemAction(cardID, taskId, itemId, newNameTask));
    }
  };

  const deletedItem = (cardID, taskId, itemId) => {
    dispatch(deletedItemAction(cardID, taskId, itemId));
  };

  const openCardMenu = () => {
    setcheckedMenuCard(!checkedkMenuCard);
  };

  const fucCreateItem = (cardId, taskID) => {
    let newText = prompt("Введите названия Пункта");
    if (newText) {
      return createItem(cardId, taskID, newText);
    }
    setcheckedMenuCard(false);
  };

  return (
    <>
      {checkedModal && (
        <div
          className={classname(styles.modal, checkedModal && styles.active)}
          onClick={closeModal}
        >
          <div
            className={classname(
              styles.modal__content,
              checkedModal && styles.active
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.content}>
              <div className={styles.content__header}>
                <h2
                  onClick={redactNameCard}
                  className={styles.content__header_cardName}
                >
                  {card.title}
                </h2>
                <p className={styles.content__header_cardBurger}>
                  <AiOutlineEllipsis onClick={openCardMenu} />{" "}
                </p>
              </div>
              {checkedkMenuCard && (
                <CardMenu
                  createTask={createTask}
                  redactNameCard={redactNameCard}
                  deletedCard={deletedCard}
                />
              )}
              <div className={styles.content__section}>
                {card.tasks.map((task) => (
                  <div key={task.id} className={styles.content__block}>
                    <div className={styles.content__block__header}>
                      <p>{task.title}</p>
                      <div>
                        <AiOutlineDelete
                          onClick={() => deletedTask(card.id, task.id)}
                          className={classname(
                            styles.content__block__header_icon,
                            styles.content__block__header_iconTaskDeletedOpacity
                          )}
                        />
                        <AiOutlinePlus
                          onClick={() => {
                            fucCreateItem(card.id, task.id);
                          }}
                          className={styles.content__block__header_icon}
                        />
                        <AiOutlineEdit
                          onClick={() =>
                            redactTaskName(card.id, task.id, task.title)
                          }
                          className={styles.content__block__header_icon}
                        />
                      </div>
                    </div>

                    <div className={styles.content__block__inputBlock}>
                      {task.contents?.map((content) => (
                        <div
                          key={content.id}
                          className={styles.content__block_input}
                        >
                          <div className={styles.content__block_input_div}>
                            <input
                              onChange={(e) => {
                                checkedItem(
                                  card.id,
                                  task.id,
                                  content.id,
                                  e.target.checked
                                );
                              }}
                              checked={null}
                              name={content.id}
                              type="checkbox"
                            />
                            <p
                              onDoubleClick={() =>
                                redactNameItem(
                                  card.id,
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
                              onClick={() =>
                                deletedItem(card.id, task.id, content.id)
                              }
                              className={classname(
                                styles.content__block__header_icon,
                                styles.content__block__header_iconItemDeletedOpacity
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
