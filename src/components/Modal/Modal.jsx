import classname from "classname";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkedModalCardAction } from "../../redux/actions/modalAction";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEllipsis,
  AiOutlinePlus,
  AiFillFilter,
} from "react-icons/ai";

import {
  deletedCardAction,
  redactCardTitleAction,
  redactTaskAction,
  createTaskAction,
  deleteTaskAction,
  createItemAction,
  filterContentsAlphabetAction,
  filterContentsСompletedAction,
  filterContentsAlphabetReverseAction,
  filterContentsСompletedReverseAction,
} from "../../redux/actions/cardsAction";
import styles from "./Modal.module.scss";
import CardMenu from "../CardMenu/CardBurger";
import CardFilter from "../CardMenu/CardFilter";
import CardBurger from "../CardMenu/CardBurger";
import Content from "../Content/Content";

const Modal = () => {
  const dispatch = useDispatch();
  const [checkedkBurgerCard, setcheckedBurgerCard] = React.useState(true);
  const [checkedkFilterCard, setcheckedFilterCard] = React.useState(true);

  const checkedModal = useSelector((state) => state.modal.checkedModal);
  const card = useSelector((state) => state.modal.card);

  const closeModal = () => {
    dispatch(checkedModalCardAction(false));
  };

  const onRedactNameCard = () => {
    let newTitle = prompt("Смена названия Карточки", card.title);

    dispatch(redactCardTitleAction(card.id, newTitle));
  };
  const onCreateTask = () => {
    let newText = prompt("Введите имя Задачи");
    if (newText) {
      dispatch(createTaskAction(card.id, newText));
    }

    setcheckedBurgerCard(false);
  };
  const onDeletedCard = () => {
    const result = window.confirm("Вы точно хотите удаить Карточку ?");
    if (result) {
      dispatch(deletedCardAction(card.id));
    }
    setcheckedBurgerCard(false);
    closeModal()
  };
  const redactTaskName = (cardId, taskId, taskTitle) => {
    let newTitle = prompt("Смена названия Задачи", taskTitle);
    dispatch(redactTaskAction(cardId, taskId, newTitle));
    setcheckedBurgerCard(false);
  };
  const deletedTask = (cardId, taskId) => {
    dispatch(deleteTaskAction(cardId, taskId));
  };

  const createItem = (cardId, taskId, nameTask) => {
    dispatch(createItemAction(cardId, taskId, nameTask));
  };

  const onToggleCardBurger = (checked = !checkedkBurgerCard) => {
    setcheckedBurgerCard(checked);
  };
  const onToggleCardFilter = (checked = !checkedkFilterCard) => {
    setcheckedFilterCard(checked);
  };

  const onCreateItem = (cardId, taskID) => {
    let newText = prompt("Введите названия Пункта");
    if (newText) {
      return createItem(cardId, taskID, newText);
    }
    setcheckedBurgerCard(false);
  };

  const onFilterContentsVariety = (name) => {
    if (name === "Alphabet default") {
      dispatch(filterContentsAlphabetAction(card.id));
    } else if (name === "Alphabet Reverse") {
      dispatch(filterContentsAlphabetReverseAction(card.id));
    } else if (name === "Completed True") {
      dispatch(filterContentsСompletedAction(card.id));
    } else if (name === "Completed False") {
      dispatch(filterContentsСompletedReverseAction(card.id));
    }
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
                  onClick={onRedactNameCard}
                  className={styles.content__header_cardName}
                >
                  {card.title}
                </h2>
                <div>
                  <p className={styles.content__header_cardBurger}>
                    <AiFillFilter
                      onClick={() => onToggleCardFilter(!checkedkFilterCard)}
                    />
                  </p>
                  <p className={styles.content__header_cardBurger}>
                    <AiOutlineEllipsis
                      onClick={() => onToggleCardBurger(!checkedkBurgerCard)}
                    />
                  </p>
                </div>
              </div>

              {checkedkBurgerCard && (
                <CardBurger
                  handlerToggleCardBurger={onToggleCardBurger}
                  handlerCreateTask={onCreateTask}
                  handlerRedactNameCard={onRedactNameCard}
                  handlerDeletedCard={onDeletedCard}
                />
              )}
              {checkedkFilterCard && (
                <CardFilter
                  handlerToggleCardFilter={onToggleCardFilter}
                  handlerFilterContentsVariety={onFilterContentsVariety}
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
                            onCreateItem(card.id, task.id);
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
                      {task.contents.map((content) => (
                        <Content
                          key={content.id}
                          cardId={card.id}
                          taskId={task.id}
                          content={content}
                        />
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
