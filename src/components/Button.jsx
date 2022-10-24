import React from 'react';
import quotes from './../quotes.json'

const Button = (color, colors, changeQuote) => {

  return (
    <div className="button">
      <button style={{background: color.colors[color.color]}} onClick={color.changeQuote}><i style={{color: "#fff"}} className="fa-solid fa-forward"></i></button>
    </div>
  );
};

export default Button;