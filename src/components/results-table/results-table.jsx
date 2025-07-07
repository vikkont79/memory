import React from 'react';

function ResultsTable({ results, playerName }) {
  const sortedResults = [...results].sort((a, b) => a.steps - b.steps);

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
        {sortedResults.map(({ name, steps }, index) => (
          <tr key={name} className={`result-table-row ${name === playerName ? 'active' : ''}`}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{steps}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ResultsTable };