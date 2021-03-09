import { DEFAULT_SNAKE_BODY, DIRECTION, SELECT_OPTIONS } from '../constants';
import { GameState } from '../types';
import { getRandomApple } from './get-random-apple';

export function getInitialState(): GameState {
  return {
    appleItem: getRandomApple(DEFAULT_SNAKE_BODY),
    direction: DIRECTION[38],
    gameSpeed: [SELECT_OPTIONS[1]],
    isFail: false,
    isStarted: false,
    score: 0,
    snakeBody: DEFAULT_SNAKE_BODY,
  };
}