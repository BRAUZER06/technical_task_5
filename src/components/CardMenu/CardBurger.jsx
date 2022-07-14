import React from "react";
import styles from "./BurgerAndFilter.module.scss";
const CardBurger = ({
  handlerDeletedCard,
  handlerRedactNameCard,
  handlerCreateTask,
  handlerToggleCardBurger,
}) => {
  return (
    <div className={styles.container}>
      <p
        onClick={() => handlerToggleCardBurger(false)}
        className={styles.container_p_center}
      >
        Действие со списком
      </p>
      <hr />
      <p onClick={handlerCreateTask}>Добавить задачу</p>
      <p>Редактировать карточку</p>
      <p onClick={handlerRedactNameCard}>Изменить имя карточки</p>
      <p onClick={handlerDeletedCard}>Удалить карточку</p>
      <p
        style={{ color: "red", textAlign: "center" }}
        onClick={() => handlerToggleCardBurger(false)}
      >
        Закрыть 
      </p>
    </div>
  );
};

export default CardBurger;
