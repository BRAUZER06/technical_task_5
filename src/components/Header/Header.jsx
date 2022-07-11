import React from "react";
import HeaderWidget from "../HeaderWidget/HeaderWidget";
import styles from "./Header.module.scss";
import {
  BiClipboard,
  BiPhotoAlbum,
  BiRocket,
  BiFilter,
  BiUserPlus,
} from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiUsers, FiTrash2 } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  createCardAction,
  deletedAllCardAction,
  getLocalSoregCardAction,
} from "../../redux/actions/cardsAction";
import { AiOutlinePlus } from "react-icons/ai";
import { toggleCheckedSaveBoardAction } from "../../redux/actions/headerAction";

const Header = ({ onClickCheckedNavMenu }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.card);
  const toggleSaveBoard = useSelector((state) => state.header.toggleSaveBoard);

  const createCardInput = () => {
    let text = prompt("Введите название Карточки");
    if (text) {
      dispatch(createCardAction(text));
    } else {
      alert("Введите значение ");
    }
  };

  const allCardsTrash = () => {
    let answer = window.confirm(
      "Ты точно хочешь без возврата удалить все Карточки и все что там есть ? "
    );
    if (answer) {
      dispatch(deletedAllCardAction());
      dispatch(toggleCheckedSaveBoardAction(false));
      window.localStorage.clear();
    }
  };

  //Логика по сохранению доски в localStorage
  //Логика по сохранению доски в localStoreg
  React.useEffect(() => {
    if (window.localStorage.getItem("SaveBoard")) {
      dispatch(toggleCheckedSaveBoardAction(true));
      let response = JSON.parse(window.localStorage.getItem("SaveBoard"));
      dispatch(getLocalSoregCardAction(response));
    }
  }, []);

  const saveBoard = () => {
    window.localStorage.setItem("SaveBoard", JSON.stringify(state));
    dispatch(toggleCheckedSaveBoardAction(true));

    if (toggleSaveBoard) {
      dispatch(toggleCheckedSaveBoardAction(false));
      window.localStorage.clear();
    }
  };
  //при каждом изменении стейта при включенном сохранении(toggleSaveBoard), он постоянно будет заного сохрнять новый стейт с localStorage
  if (toggleSaveBoard) {
    window.localStorage.setItem("SaveBoard", JSON.stringify(state));
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <HeaderWidget onClick={createCardInput} Bcolor="white" color="black">
          <AiOutlinePlus />
        </HeaderWidget>
        <div onClick={saveBoard} className={styles.container__left_board}>
          {toggleSaveBoard ? (
            <HeaderWidget Bcolor="blue" color="white">
              <BiClipboard /> <p>Сохранить доску</p>
            </HeaderWidget>
          ) : (
            <HeaderWidget>
              <BiClipboard /> <p>Сохранить доску</p>
            </HeaderWidget>
          )}
        </div>
        <div className={styles.container__left_content}>
          <h2 className={styles.container__left_Name}>Junior Gate App</h2>
          <div onClick={allCardsTrash} className={styles.container__left_trash}>
            <HeaderWidget>
              <FiTrash2 />
            </HeaderWidget>
          </div>

          <hr className={styles.container__hr} />
          <HeaderWidget>
            <BiPhotoAlbum /> <p>Junior gate</p>
          </HeaderWidget>
          <hr className={styles.container__hr} />
          <HeaderWidget>
            <FiUsers /> <p>Рабочее пространство</p>
          </HeaderWidget>
          <hr className={styles.container__hr} />
          <HeaderWidget Bcolor="white" color="black">
            <BiUserPlus /> <p>Поделиться</p>
          </HeaderWidget>
        </div>
      </div>

      <div className={styles.container__right}>
        <div className={styles.container__right_content}>
          <HeaderWidget>
            <BiRocket /> <p>Улучшение</p>
          </HeaderWidget>

          <HeaderWidget>
            <BsLightning />
            <p>Автоматизация</p>
          </HeaderWidget>

          <hr className={styles.container__hr} />
          <HeaderWidget>
            <BiFilter /> <p>Фильтр</p>
          </HeaderWidget>
        </div>
        <div onClick={() => onClickCheckedNavMenu(true)}>
          <HeaderWidget>
            <AiOutlineEllipsis /> <p>Меню</p>
          </HeaderWidget>
        </div>
      </div>
    </div>
  );
};

export default Header;
