// import React from 'react';
import './AusmalbildButton.css';
import Pdf from '../assets/AlbaBerlinAusmalbild.pdf';

export default function AusmalbildButton() {
  const handleButtonClick = () => {
    window.open(Pdf, '_blank');
  };

  return (
    <div>
      <button className="ausmalbildBtn" onClick={handleButtonClick}>
        Ausmalbild
      </button>
    </div>
  );
}
