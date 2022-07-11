import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

import styles from "./HomePages.module.scss";

const HomePages = () => {
  const cards = useSelector((state) => state.card.cards);

  return (
    <div className={styles.container}>
      {cards &&
        cards.map((card) => (
          <div key={card.id} className={styles.container__Card}>
            <Card card={card} cardId={card.id} title={card.title} />
          </div>
        ))}
      <Modal />
    </div>
  );
};

export default HomePages;
