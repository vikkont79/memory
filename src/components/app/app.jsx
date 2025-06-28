import React from 'react';
import { useState } from 'react';
import { AppRoute } from '../../settings';

import { GamePage } from '../game-page/game-page.jsx';
import { ResultsPage } from '../results-page/results-page.jsx';
import { StartPage} from '../start-page/start-page.jsx';

function App({ getImages, results = [] }) {
  const [page, setPage] = useState(AppRoute.Start);
  const [result, setResult] = useState(0);
  const [images, setImages] = useState([]);
  const [cardsType, setCardsType] = useState(null);

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };

  const handleReset = () => {
    setPage(AppRoute.Start);
  };

  const handleStart = (type) => {
    setImages(getImages(type));
    setCardsType(type);
    setPage(AppRoute.Game);
  };

  const getPage = (route) => {
    switch (route) {
      case AppRoute.Start:
        return <StartPage onStart={handleStart} />
      case AppRoute.Game:
        return <GamePage images={images} type={cardsType} onShowResults={showResults} />;
      case AppRoute.Results:
        return (
          <ResultsPage results={results} playerResult={result} onResetGame={handleReset}
          />
        );
      default:
        return null;
    }
  };
  return getPage(page);
}

export { App };