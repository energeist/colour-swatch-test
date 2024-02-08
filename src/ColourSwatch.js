import React, { useState } from 'react';
import './ColourSwatch.css';

function ColourSwatch(props) {
  const { colour, correctColour, setIsCorrect } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
      <div 
        className="ColourSwatch"
        style={{backgroundColor: colour}}
        onClick={() => {
            console.log(`clicked on ${colour}`)
            if (isClicked === false) {
              setIsClicked(true);
            }
            if (colour === correctColour) {
              setIsCorrect(true);
            } else {
              setIsCorrect(false);
            }
          }}>
        { isClicked ? <p>{colour}</p> : null }
      </div>
  );
}

export default ColourSwatch;
