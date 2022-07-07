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
import { AiOutlinePlus } from "react-icons/ai";

const Header = ({ onClickCheckedNavMenu }) => {
  const dispatch = useDispatch();
  const { createCardInputChecked, cards } = useSelector((state) => state.card);

  const createCardInput = () => {
    let text = prompt("Введите название Карточки");
    if (text) {
      dispatch(createCardAction(text));
    } else {
      alert("Введите значение ");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <HeaderWidget onClick={createCardInput} Bcolor="white" color="black">
          <AiOutlinePlus />
        </HeaderWidget>
        <HeaderWidget>
          <BiClipboard /> <p>Доска</p>
        </HeaderWidget>
        <div className={styles.container__left_content}>
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
