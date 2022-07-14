import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineEllipsis, AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import {
  deletedCardAction,
  redactCardTitleAction,
  createTaskAction,
  filterContentsAlphabetAction,
  filterContentsСompletedAction,
  filterContentsAlphabetReverseAction,
  filterContentsСompletedReverseAction,
} from "../../redux/actions/cardsAction";
import { useDispatch } from "react-redux";
import CardBurger from "../CardMenu/CardBurger";
import classNames from "classname";
import Task from "../Task/Task";
import {
  checkedModalCardAction,
  getModalCardAction,
} from "../../redux/actions/modalAction";
import CardFilter from "../CardMenu/CardFilter";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const [checkedkMenuCard, setcheckedMenuCard] = React.useState(false);
  const [checkedkMenuFilter, setcheckedMenuFilter] = React.useState(false);

  React.useEffect(() => {
    dispatch(getModalCardAction(card));
  }, [card]);
  //сделать проверку Поменять

  const onDeletedCard = () => {
    const result = window.confirm("Вы точно хотите удаить Карточку ?");
    if (result) {
      dispatch(deletedCardAction(card.id));
    }
    setcheckedMenuCard(false);
  };

  const onRedactNameCard = () => {
    let newTitle = prompt("Смена названия Карточки", card.title);
    dispatch(redactCardTitleAction(card.id, newTitle));
    setcheckedMenuCard(false);
  };

  const dbClickOpenModal = () => {
    dispatch(getModalCardAction(card));
    dispatch(checkedModalCardAction(true));
  };

  const onOpenCardMenu = () => {
    setcheckedMenuCard(!checkedkMenuCard);
  };
  const onOpenCardFilter = () => {
    setcheckedMenuFilter(!checkedkMenuFilter);
  };

  const onCreateTask = () => {
    let newText = prompt("Введите имя Задачи");
    if (newText) {
      dispatch(createTaskAction(card.id, newText));
    }
    setcheckedMenuCard(false);
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
    <div onDoubleClick={dbClickOpenModal} className={styles.container}>
      <div className={styles.container__header}>
        <p
          onClick={onRedactNameCard}
          className={styles.container__header_title}
        >
          {card.title}
        </p>
        <div className={styles.container__header_block}>
          <AiFillFilter
            className={classNames(
              styles.container__header_icon,
              checkedkMenuFilter && styles.container__header_iconActive
            )}
            onClick={(e) => onOpenCardFilter(e)}
          />

          <AiOutlineEllipsis
            className={classNames(
              styles.container__header_icon,
              checkedkMenuCard && styles.container__header_iconActive
            )}
            onClick={(e) => onOpenCardMenu(e)}
          />
        </div>

        {checkedkMenuCard && (
          <CardBurger
            handlerCreateTask={onCreateTask}
            handlerRedactNameCard={onRedactNameCard}
            handlerDeletedCard={onDeletedCard}
          />
        )}
        {checkedkMenuFilter && (
          <CardFilter handlerFilterContentsVariety={onFilterContentsVariety} />
        )}
      </div>
      <div className={styles.container__tasks}>
        {card.tasks.map((task) => (
          <Task
            key={task.id}
            handlerOpenCardMenu={onOpenCardMenu}
            cardId={card.id}
            task={task}
          />
        ))}
      </div>

      <div onClick={onCreateTask} className={styles.container__footer}>
        <AiOutlinePlus className={styles.container__footer_icon} />
        <p>Добавить задачу</p>
      </div>
    </div>
  );
};

export default Card;
