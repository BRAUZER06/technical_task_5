import React from "react";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";

import HeaderLetfBlock from "./HeaderLetfBlock";
import HeaderRightBlock from "./HeaderRightBlock";

import { toggleCheckedSaveBoardAction } from "../../redux/actions/headerAction";
import {
  createCardAction,
  getLocalSoregCardAction,
} from "../../redux/actions/cardsAction";

const Header = ({ handlerCheckedNavMenu }) => {
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

  //Логика по сохранению доски в localStorage
  //Грамотно закинуть в хук useLocalStorage
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
  //при каждом изменении стейта при включенном сохранении(toggleSaveBoard),  он постоянно будет сохрнять новый стейт в localStorage
  if (toggleSaveBoard) {
    window.localStorage.setItem("SaveBoard", JSON.stringify(state));
  }

  return (
    <div className={styles.container}>
      <HeaderLetfBlock
        saveBoard={saveBoard}
        toggleSaveBoard={toggleSaveBoard}
        createCardInput={createCardInput}
      />
      <HeaderRightBlock handlerCheckedNavMenu={handlerCheckedNavMenu} />
    </div>
  );
};

export default Header;
