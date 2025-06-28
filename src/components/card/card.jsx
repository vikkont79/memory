import React from 'react';

function Card({ id, url, description, isShown, isFinished, onCardClick }) {
  const className = `${isShown ? `card-show` : ''} ${isFinished ? `card-finished` : ''}`;
  const handleClick = () => {
    if (isFinished) {
      return
    }
    onCardClick(id);
  };
  return (
    <li onClick={handleClick}
      className={`card ${className}`}>
      <img
        src={url}
        width="204" height="144"
        alt={description} />
    </li>
  );
}

export { Card };