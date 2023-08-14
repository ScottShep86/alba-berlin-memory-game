import React from "react";
import CardBack from "../assets/images/ALBA Logo RGB.png";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.image} alt="player card" />
        <img
          className="back"
          src={CardBack}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
