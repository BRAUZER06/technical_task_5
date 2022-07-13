import React from "react";
import styles from "./HeaderWidget.module.scss";
const HeaderWidget = ({ children, Bcolor, color, Bshadow,cursor, ...arg }) => {
  const style = {
    backgroundColor: Bcolor,
    color,
    boxShadow: Bshadow,
    cursor,
  };
  return (
    <div {...arg} style={style} className={styles.container}>
      {children}
    </div>
  );
};

export default HeaderWidget;
