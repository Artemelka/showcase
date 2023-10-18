export const SYMBOLS = ['X', '0'];

export const ROWS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

export const COLUMNS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export const DIAGONALS = [
  [0, 4, 8],
  [2, 4, 6],
];

export const INITIAL_STATE = ['', '', '', '', '', '', '', '', ''];

export const INITIAL_SYMBOLS = { ai: '', user: '' };

export const INITIAL_WINNER = {
  message: '',
  winnerCells: [],
};

export const GAME_LEVEL_OPTIONS = [
  { id: 'easy', value: 'easy' },
  { id: 'hard', value: 'hard' },
];

export const INITIAL_LEVEL = [];
