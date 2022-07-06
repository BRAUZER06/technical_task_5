import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import styles from "./HomePages.module.scss";

const HomePages = () => {
  const cards = useSelector((state) => state.card.cards);
const state = useSelector(state=>state.card)



  return (
    <div className={styles.container}>
      {cards &&
        cards.map((card) => (
          <div key={card.id} className={styles.container__Card}>
            <Card card={card} id={card.id} title={card.title} />
          </div>
        ))}
    </div>
  );
};

export default HomePages;
