// import React from 'react';
import PropTypes from 'prop-types';
import CardBack from '../assets/images/ALBA Logo RGB.png';
import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.image1} alt="player card" />
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

SingleCard.propTypes = {
  card: PropTypes.object.isRequired, // Assuming 'card' is an object
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
