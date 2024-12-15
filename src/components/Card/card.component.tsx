"use client";
import style from "./card.module.scss";
import { useCardState } from "@/store/store";

export default function Card() {
  const { cardState, setCardState } = useCardState();
  return (
    <div
      className={style.cardContainer}
      style={{ display: cardState ? "flex" : "none" }}
    >
      <div className={`${style.card}`}>
        <div className={`row ${style.cardButton}`}>
          <button onClick={() => setCardState(false)}>X</button>
        </div>
      </div>
    </div>
  );
}
