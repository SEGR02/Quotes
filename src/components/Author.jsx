import React from 'react';

const Author = (color, colors, author) => {
  return (
    <div className="author">
      <p style={{color: color.colors[color.color]}}>{color.author}</p>
    </div>
  );
};

export default Author;