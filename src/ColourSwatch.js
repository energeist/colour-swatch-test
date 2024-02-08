import React, { useState, useEffect } from 'react';
import './ColourSwatch.css';

function ColourSwatch(props) {
  const { colour } = props;

  return (
    <div 
      className="ColourSwatch"
      key="index"
      style={{backgroundColor: colour}}>
        <p>{colour}</p>
    </div>
  );
}

export default ColourSwatch;
