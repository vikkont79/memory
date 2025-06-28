import React from 'react';
import { Progress } from '../progress/progress.jsx';
import { CardsList } from '../cards-list/cards-list.jsx';
import { Modal } from '../modal/modal.jsx';
import { useGame } from '../../hooks/use-game';

function GamePage({ images = [], type, onShowResults }) {
  const {
    finishedItems,
    stepsCount,
    checkItems,
    isGameOver,
  } = useGame(images);

  const handleResultsClick = () => {
    onShowResults(stepsCount);
  };

  return (
    <section className="game container">
      <Progress images={images} finishedItems={finishedItems} stepsCount={stepsCount} />
      <CardsList images={images} finishedItems={finishedItems} type={type} checkItems={checkItems} />
      {isGameOver && (
        <Modal>
          <h3 className="modal-caption">Победа!</h3>
          <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
          <button onClick={handleResultsClick} className="button modal-button" type="button">Показать результаты</button>
        </Modal>
      )}
    </section>
  )
}

export { GamePage };