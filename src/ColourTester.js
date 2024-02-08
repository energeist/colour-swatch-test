import React, { useState, useEffect } from 'react';
import ColourSwatch from './ColourSwatch';
import './ColourSwatch.css';

function ColourTester() {
  const [swatchColours, setSwatchColours] = useState([]);
  const [correctColour, setCorrectColour] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
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
    setIsCorrect(null);
    setSwatchColours(colours);
    setCorrectColour(colours[Math.floor(Math.random() * 3)]);
  }
  , []);

  return (
    <div className="ColourTester">
      <div className="swatches">
        { swatchColours.map((colour, index) => {
          let swatchProps = { colour, correctColour, setIsCorrect };
          
          return (
            <ColourSwatch key={index} {...swatchProps} />
          )
        })}
      </div>
      <p>Which colour is {correctColour}?</p>
      <p className="clickMessage">{ 
        isCorrect === null
          // Sorry for the cursed nested ternary, it's just shorter.
          ? 'Click a swatch to guess'
          : isCorrect
            ? 'Correct!'
            : 'Incorrect!'
      }</p>
      <button 
        className="replayButton"
      >
        Play Again!
      </button>
    </div>
  );
}

export default ColourTester;
