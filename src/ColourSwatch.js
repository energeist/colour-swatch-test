import React from 'react';
import './ColourSwatch.css';

function ColourSwatch(props) {
  const { colour, correctColour, setIsCorrect } = props;

  return (
    <div 
      className="ColourSwatch"
      style={{backgroundColor: colour}}
      onClick={() => {
          console.log(`clicked on ${colour}`)
          if (colour === correctColour) {
            setIsCorrect(true);
          } else {
            setIsCorrect(false);
          }
        }}>
    </div>
  );
}

export default ColourSwatch;
