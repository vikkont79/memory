import React from 'react';

function ResultsTable({ results, playerResult }) {
  const sortedResults = [
    ...results,
    { name: 'Ваш результат', stepsCount: playerResult }
  ].sort((a, b) => a.stepsCount - b.stepsCount);

  return (
    <table className="result-table">
      <thead>
        <tr className="result-table-row">
          <th>Место</th>
          <th>Имя</th>
          <th>Шаги</th>
        </tr>
      </thead>
      <tbody>
        {sortedResults.map(({ name, stepsCount }, index) => (
          <tr key={name} className={`result-table-row ${stepsCount === playerResult ? 'active' : ''}`}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{stepsCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ResultsTable };