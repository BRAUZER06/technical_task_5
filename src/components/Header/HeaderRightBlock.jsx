import React from "react";
import styles from "./Header.module.scss";

import HeaderWidget from "../HeaderWidget/HeaderWidget";

import { BsLightning } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import { BiFilter, BiRocket } from "react-icons/bi";



const HeaderRightBlock = ({ handlerCheckedNavMenu }) => {
  return (
    <div className={styles.container__right}>
      <div className={styles.container__right_content}>
        <HeaderWidget
          Bcolor="gray"
          color="#dddddd"
          Bshadow="1px 1px 2px 0px black inset"
          cursor="default"
        >
          <BiRocket /> <p>Улучшение</p>
        </HeaderWidget>

        <HeaderWidget
          Bcolor="gray"
          color="#dddddd"
          Bshadow="1px 1px 2px 0px black inset"
          cursor="default"
        >
          <BsLightning />
          <p>Автоматизация</p>
        </HeaderWidget>

        <hr className={styles.container__hr} />
        <HeaderWidget
          Bcolor="gray"
          color="#dddddd"
          Bshadow="1px 1px 2px 0px black inset"
          cursor="default"
        >
          <BiFilter /> <p>Фильтр</p>
        </HeaderWidget>
      </div>
      <div onClick={() => handlerCheckedNavMenu(true)}>
        <HeaderWidget>
          <AiOutlineEllipsis /> <p>Меню</p>
        </HeaderWidget>
      </div>
    </div>
  );
};

export default HeaderRightBlock;
