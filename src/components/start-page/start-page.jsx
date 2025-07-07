import React, { useState } from 'react';
import { GAME_TYPES } from '../../settings'
import { Modal } from '../modal/modal.jsx';

function StartPage({ onStart }) {
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsModalOpen(false);
    }
  };

  const handleStart = (type) => {
    onStart(type, name);
  }

  return (
    <section className="rules container">
      {isModalOpen && (
        <Modal className="modal-name" >
          <h3 >Добро пожаловать в игру!</h3>
          <input
            className="modal-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            autoFocus
          />
          <button
            className="button"
            onClick={handleNameSubmit}
            disabled={!name.trim()}
          >Начать
          </button>
        </Modal>
      )}
      <h2>Добро пожаловать!</h2>
      <p>Memory — игра для тренировки визуальной памяти</p>
      <div className="rules-panel">
        <h3>Правила игры</h3>
        <ul className="rules-list">
          <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
          <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
          <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
        </ul>
      </div>
      {GAME_TYPES.map(({ type, text }) => (
        <button
          key={type}
          onClick={() => handleStart(type)}
          className={`ico-button ico-button-${type}`}
          type="button">
          {text}
        </button>
      ))}
    </section>
  );
}

export { StartPage };