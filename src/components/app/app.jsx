import React from 'react';
import { useState } from 'react';
import { AppRoute } from '../../settings';
import { GamePage } from '../game-page/game-page.jsx';
import { ResultsPage } from '../results-page/results-page.jsx';
import { StartPage } from '../start-page/start-page.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App({ getImages, results = [] }) {
  const navigate = useNavigate();
  const [result, setResult] = useState(0);
  const [images, setImages] = useState([]);
  const [cardsType, setCardsType] = useState(null);

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    navigate(AppRoute.Results);
  };

  const handleReset = () => {
    navigate(AppRoute.Start);
  };

  const handleStart = (type) => {
    setImages(getImages(type));
    setCardsType(type);
    navigate(AppRoute.Game);
  };

  return (
    <Routes>
      <Route index element={<StartPage onStart={handleStart} />} />
      <Route
        path={AppRoute.Game}
        element={
          <GamePage
            images={images}
            type={cardsType}
            onShowResults={showResults} />}
      />
      <Route
        path={AppRoute.Results}
        element={
          <ResultsPage
            results={results}
            playerResult={result}
            onResetGame={handleReset}
          />}
      />
    </Routes>
  )
}

export { App };