import { State } from '../types';
import { DEFAULT_SNAKE_BODY, DIRECTION } from '../constants';
import { getRandomApple } from './get-random-apple';

export function getDefaultSnakeState(cellQuantity: number): State {
  return {
    appleItem: getRandomApple(DEFAULT_SNAKE_BODY, cellQuantity),
    cells: [...Array(cellQuantity)].map((_, index) => index),
    direction: DIRECTION[38],
    snakeBody: DEFAULT_SNAKE_BODY,
  };
}