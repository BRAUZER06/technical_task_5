import React from "react";
import styles from "./HeaderWidget.module.scss";
const HeaderWidget = ({ children, Bcolor, color  }) => {
const style = {
  backgroundColor:Bcolor,
  color
}
  return <div style={style} className={styles.container}>{children}</div>;
};

export default HeaderWidget;
