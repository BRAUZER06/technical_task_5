import React from "react";
import styles from "./BurgerAndFilter.module.scss";
const CardBurger = ({
  handlerDeletedCard,
  handlerRedactNameCard,
  handlerCreateTask,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.container_p_center}>Действие со списком</p>
      <hr />
      <p onClick={handlerCreateTask}>Добавить задачу</p>
      <p>Редактировать карточку</p>
      <p onClick={handlerRedactNameCard}>Изменить имя карточки</p>
      <p onClick={handlerDeletedCard}>Удалить карточку</p>
    </div>
  );
};

export default CardBurger;
