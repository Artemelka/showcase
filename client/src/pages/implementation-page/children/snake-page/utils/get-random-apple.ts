import { SnakeBodyItem } from '../types';

export function getRandomApple(snakeBody: Array<SnakeBodyItem>, quantity: number): SnakeBodyItem {
  const appleItem = {
    x: Math.floor(Math.random() * quantity),
    y: Math.floor(Math.random() * quantity),
  };

  if (snakeBody.some(bodyItem => bodyItem.x === appleItem.x && bodyItem.y === appleItem.y)) {
    return getRandomApple(snakeBody, quantity);
  }

  return appleItem;
}