import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineEllipsis } from "react-icons/ai";
import {deletedCardAction} from '../../redux/actions/CardsAction'
import { useDispatch } from "react-redux";

const Card = ({ title = "Текст", id}) => {
  const dispatch = useDispatch()
  const [checkedkMenuCard, setcheckedMenuCard] = React.useState(true);
  console.log(id);
  const openCardMenu = () => {
    setcheckedMenuCard(!checkedkMenuCard);
  };
  const onClickDeletedCard = (id) => {
     console.log(id);
    dispatch(deletedCardAction(id))
   
  };
  const onClickRedactNameCard = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p
          onClick={onClickRedactNameCard}
          className={styles.container__header_title}
        >
          {title}
        </p>
        <div className={styles.container__header_icon}>
          <AiOutlineEllipsis onClick={openCardMenu} />
        </div>

        {checkedkMenuCard && (
          <div className={styles.container__cardMenu}>
            <p className={styles.container__cardMenu_p_center}>
              Действие со списком
            </p>
            <hr />
            <p>Добавить карточку</p>
            <p>Редактировать карточку</p>
            <p onClick={()=>onClickDeletedCard(id)}>Удалить карточку</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
