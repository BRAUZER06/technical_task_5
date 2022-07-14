import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Header.module.scss";

import HeaderWidget from "../HeaderWidget/HeaderWidget";
import { deletedAllCardAction } from "../../redux/actions/cardsAction";
import { toggleCheckedSaveBoardAction } from "../../redux/actions/headerAction";

import { AiOutlinePlus } from "react-icons/ai";
import { FiTrash2, FiUsers } from "react-icons/fi";
import { BiClipboard, BiPhotoAlbum, BiUserPlus } from "react-icons/bi";



const HeaderLetfBlock = ({ saveBoard, toggleSaveBoard, createCardInput }) => {
  const dispatch = useDispatch();
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

  return (
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
        <HeaderWidget
          Bcolor="gray"
          color="#dddddd"
          Bshadow="1px 1px 2px 0px black inset"
          cursor="default"
        >
          <BiPhotoAlbum /> <p>Junior gate</p>
        </HeaderWidget>
        <hr className={styles.container__hr} />
        <HeaderWidget
          Bcolor="gray"
          color="#dddddd"
          Bshadow="1px 1px 2px 0px black inset"
          cursor="default"
        >
          <FiUsers /> <p>Рабочее пространство</p>
        </HeaderWidget>
        <hr className={styles.container__hr} />
        <HeaderWidget
          Bcolor="white"
          color="black"
          Bshadow="1px 1px 2px 0px black inset"
          cursor="default"
        >
          <BiUserPlus /> <p>Поделиться</p>
        </HeaderWidget>
      </div>
    </div>
  );
};

export default HeaderLetfBlock;
