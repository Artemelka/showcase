import { SnakeBodyItem } from '../types';

export function getRandomApple(snakeBody: Array<SnakeBodyItem>, cellsQuantity: number): SnakeBodyItem {
  const appleItem = {
    x: Math.floor(Math.random() * cellsQuantity),
    y: Math.floor(Math.random() * cellsQuantity),
  };

  if (snakeBody.some(bodyItem => bodyItem.x === appleItem.x && bodyItem.y === appleItem.y)) {
    return getRandomApple(snakeBody, cellsQuantity);
  }

  return appleItem;
}