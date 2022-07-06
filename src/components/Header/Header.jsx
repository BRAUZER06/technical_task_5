import React from "react";
import HeaderWidget from "../HeaderWidget/HeaderWidget";
import styles from "./Header.module.scss";
import {
  BiStar,
  BiClipboard,
  BiPhotoAlbum,
  BiRocket,
  BiFilter,
  BiUserPlus,
  BiHighlight,
} from "react-icons/bi";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  createCardInputCheckedAction,
  createCardAction,
} from "../../redux/actions/CardsAction";

const Header = ({ onClickCheckedNavMenu }) => {
  const dispatch = useDispatch();
  const { createCardInputChecked, cards } = useSelector((state) => state.card);

  const createCardInput = () => {
    let text = prompt();
    if (text) {
      dispatch(createCardAction(text));
    } else {
      alert("Введите значение ");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <div>
          <BiHighlight onClick={createCardInput}></BiHighlight>
        </div>
        <HeaderWidget>
          <BiClipboard /> <p>Доска</p>
        </HeaderWidget>

        <h2 className={styles.container__left_Name}>Junior Gate App</h2>
        <HeaderWidget>
          <BiStar />
        </HeaderWidget>

        <hr className={styles.container__hr} />
        <HeaderWidget>
          <BiPhotoAlbum /> <p>Junior gate</p>
        </HeaderWidget>

        <hr className={styles.container__hr} />
        <HeaderWidget>
          <FiUsers /> <p>Для рабочего простарнства</p>
        </HeaderWidget>

        <hr className={styles.container__hr} />
        <HeaderWidget Bcolor="white" color="black">
          <BiUserPlus /> <p>Поделиться</p>
        </HeaderWidget>
      </div>

      <div className={styles.container__right}>
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
