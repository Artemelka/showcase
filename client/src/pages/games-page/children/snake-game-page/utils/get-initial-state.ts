import {
  CELL_QUANTITY,
  DEFAULT_SNAKE_BODY,
  DIRECTION,
  SELECT_OPTIONS,
} from '../constants';
import { GameState } from '../types';
import { getRandomApple } from './get-random-apple';

export function getInitialState(cellsQuantity = CELL_QUANTITY): GameState {
  return {
    appleItem: getRandomApple(DEFAULT_SNAKE_BODY, cellsQuantity),
    cells: [...Array(cellsQuantity)].map((_, index) => index),
    direction: DIRECTION[38],
    gameSpeed: [SELECT_OPTIONS[1]],
    isFail: false,
    isStarted: false,
    score: 0,
    snakeBody: DEFAULT_SNAKE_BODY,
  };
}
