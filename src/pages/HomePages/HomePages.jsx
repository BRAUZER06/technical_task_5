import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import styles from "./HomePages.module.scss";

const HomePages = () => {
  const cards = useSelector((state) => state.card.cards);
console.log(cards);
  return (
    <div className={styles.container}>
      {cards &&
        cards.map((card) => (
          <div key={card.id} className={styles.container__Card}>
            <Card id={card.id} title={card.title} />
          </div>
        ))}
    </div>
  );
};

export default HomePages;
