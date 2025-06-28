import React from 'react';
import { ResultsTable } from '../results-table/results-table.jsx';
import getDeclension from '@dubaua/get-declension'

function ResultsPage({ results, playerResult, onResetGame }) {
  const stepDeclension = getDeclension({
    count: playerResult,
    one: 'шаг', few: 'шага', many: 'шагов'
  });

  return (
    <section className="result container">
      <h2>Лучшие результаты:</h2>
      <p>Вы завершили игру за <b>{stepDeclension}</b>, так держать!</p>
      <ResultsTable results={results} playerResult={playerResult} />
      <p>Хотите попробовать ещё раз?</p>
      <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
    </section>
  );
}

export { ResultsPage };