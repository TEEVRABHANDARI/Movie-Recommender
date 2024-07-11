import React, { useState } from 'react';
import './Cards.css';

const Cards = () => {
  const initialPositions = [
    'center', 'left-1', 'left-2', 'hidden-left', 'hidden-right', 'right-1', 'right-2', 'right-3'
  ];
  
  const [currentPositions, setCurrentPositions] = useState(initialPositions);

  const rotatePositionsLeft = () => {
    setCurrentPositions((prevPositions) => [
      ...prevPositions.slice(1),
      prevPositions[0],
    ]);
  };

  const rotatePositionsRight = () => {
    setCurrentPositions((prevPositions) => [
      prevPositions[prevPositions.length - 1],
      ...prevPositions.slice(0, -1),
    ]);
  };

  return (
    <div className="Cardscontainer">
      <button className="buttons button-left" onClick={rotatePositionsLeft}>
        Left
      </button>
      {currentPositions.map((position, index) => (
        <div key={index} className={`divs ${position}`}>
          Div {index + 1}
        </div>
      ))}
      <button className="buttons button-right" onClick={rotatePositionsRight}>
        Right
      </button>
    </div>
  );
};

export default Cards;
