import React from 'react';
import { useState } from 'react';
import { AppRoute } from '../../settings';
import { GamePage } from '../game-page/game-page.jsx';
import { ResultsPage } from '../results-page/results-page.jsx';
import { StartPage } from '../start-page/start-page.jsx';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { PrivateRoute } from '../private-route/private-route.jsx';

function App({ getImages }) {
  const navigate = useNavigate();
  const [result, setResult] = useState(0);
  const [images, setImages] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [cardsType, setCardsType] = useState(null);

  const [results, setResults] = useState(() => {
    const saved = localStorage.getItem('game-results');
    return saved ? JSON.parse(saved) : [];
  });

  const showResults = (stepsCount) => {
    const newResults = [...results, { name: playerName, steps: stepsCount }];
    setResults(newResults);
    localStorage.setItem('game-results', JSON.stringify(newResults));
    setResult(stepsCount);
    navigate(AppRoute.Results);
  };

  const handleReset = () => {
    navigate(AppRoute.Start);
  };

  const handleStart = (type, name) => {
    setImages(getImages(type));
    setCardsType(type);
    setPlayerName(name);
    navigate(AppRoute.Game);
  };

  return (
    <Routes>
      <Route index element={<Navigate to={AppRoute.Start} replace />} />
      <Route
        path={AppRoute.Start}
        element={<StartPage onStart={handleStart} />} />
      <Route
        path={AppRoute.Game}
        element={
          <PrivateRoute
            condition={images.length > 0}
            fallback={AppRoute.Start}
          >
            <GamePage
              images={images}
              type={cardsType}
              onShowResults={showResults}
            />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Results}
        element={
          <ResultsPage
            results={results}
            playerResult={result}
            playerName={playerName}
            onResetGame={handleReset}
          />}
      />
      <Route path="*" element={<Navigate to={AppRoute.Start} replace />} />
    </Routes>
  )
}

export { App };