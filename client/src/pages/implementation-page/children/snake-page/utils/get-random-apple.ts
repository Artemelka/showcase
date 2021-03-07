import { CELL_QUANTITY } from '../constants';
import { SnakeBodyItem } from '../types';

export function getRandomApple(snakeBody: Array<SnakeBodyItem>): SnakeBodyItem {
  const appleItem = {
    x: Math.floor(Math.random() * CELL_QUANTITY),
    y: Math.floor(Math.random() * CELL_QUANTITY),
  };

  if (snakeBody.some(bodyItem => bodyItem.x === appleItem.x && bodyItem.y === appleItem.y)) {
    return getRandomApple(snakeBody);
  }

  return appleItem;
}