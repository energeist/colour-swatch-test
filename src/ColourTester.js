import React, { useState, useEffect } from 'react';
import ColourSwatch from './ColourSwatch';
import './ColourSwatch.css';

function ColourTester() {
  const [swatchColours, setSwatchColours] = useState([]);
  const [correctColour, setCorrectColour] = useState('');
  // const [isCorrect, setIsCorrect] = useState(null);
  // const [isReloaded, setIsReoaded] = useState(false);

  const randomHexColour = () => {
    let randomColour = '#';
    let hexValues = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      randomColour += hexValues[Math.floor(Math.random() * 16)];
    }

    return randomColour;
  }

  useEffect(() => {
    let colours = [];
    for (let i = 0; i < 3; i++) {
      colours.push(randomHexColour());
    }
    setSwatchColours(colours);
    setCorrectColour(colours[Math.floor(Math.random() * 3)]);
  }
  , []);

  return (
    <div className="ColourTester">
      <p>Which colour is {correctColour}?</p>
      <div className="swatches">
        { swatchColours.map((colour, index) => {
          let swatchProps = {colour, index}
          
          return (
            <ColourSwatch {...swatchProps} />
          )
        })}
      </div>
      <p className="clickMessage">correct/incorrect</p>
      <button 
        className="replayButton"
      >
        Play Again!
      </button>
    </div>
  );
}

export default ColourTester;
