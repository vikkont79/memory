// Файл для настроек приложения
const TIMEOUT = 900;

const AppRoute = {
  Start: 'start',
  Game: 'game',
  Results: 'results',
};

const GAME_TYPES = [
  { type: 'cats', icon: 'cats', label: 'Котики' },
  { type: 'flowers', icon: 'flowers', label: 'Цветочки' },
  { type: 'cars', icon: 'cars', label: 'Машины' }
];

const RANDOMIZE = true;

export {
  TIMEOUT,
  AppRoute,
  GAME_TYPES,
  RANDOMIZE,
}
