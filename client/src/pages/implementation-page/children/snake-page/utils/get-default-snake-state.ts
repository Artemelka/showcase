import { State } from '../types';
import {
  CELL_QUANTITY,
  DEFAULT_SNAKE_BODY,
  DIRECTION,
  SELECT_OPTIONS,
} from '../constants';
import { getRandomApple } from './get-random-apple';

export function getDefaultSnakeState(cellQuantity = CELL_QUANTITY): State {
  return {
    appleItem: getRandomApple(DEFAULT_SNAKE_BODY, cellQuantity),
    cells: [...Array(cellQuantity)].map((_, index) => index),
    direction: DIRECTION[38],
    gameSpeed: [SELECT_OPTIONS[1]],
    isFail: false,
    isStarted: false,
    score: 0,
    snakeBody: DEFAULT_SNAKE_BODY,
  };
}