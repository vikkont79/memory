import React from 'react';

function Progress({ images = [], finishedItems = [], stepsCount }) {
  const progress = finishedItems.length / images.length * 100;
  return (
    <>
      <div className="progress-wrapper">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="progress-description">Открыто <span>{finishedItems.length / 2}</span> / <span>{images.length / 2}</span></p>
      <div className="steps">Шаг {stepsCount}</div>
    </>
  );
}

export { Progress };