import React from "react";
import styles from "./Nav.module.scss";
import { AiOutlineClose, AiOutlineEllipsis } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineSettings } from "react-icons/md";
import { BiSticker, BiCreditCardFront } from "react-icons/bi";
import classNames from "classname";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p>Menu</p> <AiOutlineClose className={styles.container__header_close} />
      </div>
      <div className={styles.container__nav}>
        <div className={styles.container__nav_item}>
          <MdOutlineSpaceDashboard /> <p>О доске</p>
        </div>
        <div className={styles.container__nav_item}>
          <BiCreditCardFront /> <p>Сменить фон</p>
        </div>
        <div className={styles.container__nav_item}>
          <MdOutlineSettings /> <p>Настройка карточек</p>
        </div>
        <div className={styles.container__nav_item}>
          <BiSticker /> <p>Стикеры</p>
        </div>
        <div className={styles.container__nav_item}>
          <AiOutlineEllipsis /> <p>Еще</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
