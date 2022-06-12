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
} from "../../redux/actions/CardsAction";
import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../CardMenu/CardMenu";
import classNames from "classname";

const Card = ({ title = "Текст", id }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);
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

  const onClickCreateTaskInCard = () => {};
  const onClickTaskRedactMenu = () => {};

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
            onClickCreateTaskInCard={onClickCreateTaskInCard}
          />
        )}
      </div>
      <div className={styles.container__tasks}>
        <div className={styles.container__content}>
          <div className={styles.container__content__header}>
            <p>{title}</p>
            <AiOutlineEdit
              onClick={onClickTaskRedactMenu}
              className={styles.container__content__header_icon}
            />
          </div>
          <div className={styles.container__content__section}>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
          </div>
        </div>

        <div className={styles.container__content}>
          <div className={styles.container__content__header}>
            <p>{title}</p>
            <AiOutlineEdit className={styles.container__content__header_icon} />
          </div>
          <div className={styles.container__content__section}>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
            <div className={styles.container__content__section_input}>
              <input type="checkbox" /> <p>Text Text</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container__footer}>
        <AiOutlinePlus className={styles.container__footer_icon} />{" "}
        <p>Добавить задачу</p>
      </div>
    </div>
  );
};

export default Card;
