import React from "react";

import styles from "./BurgerAndFilter.module.scss";

const CardFilter = ({ handlerFilterContentsVariety }) => {
  return (
    <div className={styles.container}>
      <p className={styles.container_p_center}> Фильтрация карточек по:</p>
      <hr />
      <p onClick={(e) => handlerFilterContentsVariety("Alphabet default")}>
        алфавиту A-Я
      </p>
      <p onClick={(e) => handlerFilterContentsVariety("Alphabet Reverse")}>
        алфавиту Я-A
      </p>
      <p onClick={(e) => handlerFilterContentsVariety("Completed True")}>
        выполненные задания
      </p>
      <p onClick={(e) => handlerFilterContentsVariety("Completed False")}>
        не выполненные задания
      </p>
    </div>
  );
};

export default CardFilter;
