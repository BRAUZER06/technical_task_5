import React from "react";
import styles from "./Nav.module.scss";
import { AiOutlineClose, AiOutlineEllipsis } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineSettings } from "react-icons/md";
import {
  BiSticker,
  BiCreditCardFront,
  BiRocket,
  BiFilter,
  BiClipboard,
} from "react-icons/bi";

import { FiUsers } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import { toggleCheckedSaveBoardAction } from "../../redux/actions/headerAction";
import { useDispatch, useSelector } from "react-redux";
const Nav = ({ checkedNavMenu, handlerCheckedNavMenu }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.card);
  const toggleSaveBoard = useSelector((state) => state.header.toggleSaveBoard);

  
  const saveBoard = () => {
    window.localStorage.setItem("SaveBoard", JSON.stringify(state));
    dispatch(toggleCheckedSaveBoardAction(true));

    if (toggleSaveBoard) {
      dispatch(toggleCheckedSaveBoardAction(false));
      window.localStorage.clear();
    }
  };
  return (
    <>
      {checkedNavMenu && (
        <div className={styles.container}>
          <div className={styles.container__header}>
            <p>Menu</p>
            <AiOutlineClose
              onClick={() => handlerCheckedNavMenu(false)}
              className={styles.container__header_close}
            />
          </div>
          <div className={styles.container__nav}>
            <div onClick={saveBoard} className={styles.container__nav_item}>
              <BiClipboard /> <p>Сохранить доску</p>
            </div>
            <div className={styles.container__nav_item}>
              <FiUsers /> <p>Для рабочего простарнства</p>
            </div>

            <div className={styles.container__nav_item}>
              <BiRocket /> <p>Улучшение</p>
            </div>
            <div className={styles.container__nav_item}>
              <BsLightning />
              <p>Автоматизация</p>
            </div>
            <div className={styles.container__nav_item}>
              <BiFilter /> <p>Фильтр</p>
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
              <MdOutlineSpaceDashboard /> <p>О доске</p>
            </div>
            <a href="https://github.com/BRAUZER06">
              <div className={styles.container__nav_item}>
                <AiOutlineEllipsis /> <p>Еще</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
