import React from "react";
import { useDispatch } from "react-redux";

import styles from "./BurgerAndFilter.module.scss";

const CardFilter = ({filterTasksVariety,taskFilter}) => {



  return (
    <div className={styles.container}>
      <p className={styles.container_p_center}> Фильтрация карточек по:</p>
      <hr />
      <p onClick={(e)=>filterTasksVariety(e)} name='Alphabet' >алфавиту</p>
      <p onClick={(e)=>filterTasksVariety(e)} name='Amount' >кол-л заданий</p>
      <p onClick={(e)=>filterTasksVariety(e)} name='Сompleted' >выполненные</p>
      {taskFilter && (<p className={styles.filterTasks}>Фильтрация в процессе </p>)}
    </div>
  );
};

export default CardFilter;
