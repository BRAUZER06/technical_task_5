import React from "react";
import styles from "./CardMenu.module.scss";
const CardMenu = ({
  onClickCreateTaskInCard,
  onClickDeletedCard,
  onClickRedactNameCard,
}) => {
  return (
    <div className={styles.container__cardMenu}>
      <p className={styles.container__cardMenu_p_center}>Действие со списком</p>
      <hr />
      <p onClick={onClickCreateTaskInCard}>Добавить задачу</p>
      <p>Редактировать карточку</p>
      <p onClick={onClickRedactNameCard}>Изменить имя карточки</p>
      <p onClick={onClickDeletedCard}>Удалить карточку</p>
    </div>
  );
};

export default CardMenu;
