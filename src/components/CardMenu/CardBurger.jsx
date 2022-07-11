import React from "react";
import styles from "./BurgerAndFilter.module.scss";
const CardMenu = ({ deletedCard, redactNameCard, createTask }) => {
  
  return (
    <div className={styles.container}>
      <p className={styles.container_p_center}>Действие со списком</p>
      <hr />
      <p onClick={createTask}>Добавить задачу</p>
      <p>Редактировать карточку</p>
      <p onClick={redactNameCard}>Изменить имя карточки</p>
      <p onClick={deletedCard}>Удалить карточку</p>
    </div>
  );
};

export default CardMenu;
