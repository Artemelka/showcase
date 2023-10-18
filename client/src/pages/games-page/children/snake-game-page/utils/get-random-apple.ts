import { SnakeBodyItem } from '../types';

export function getRandomApple(
  snakeBody: Array<SnakeBodyItem>,
  cellQuantity: number,
): SnakeBodyItem {
  const appleItem = {
    x: Math.floor(Math.random() * cellQuantity),
    y: Math.floor(Math.random() * cellQuantity),
  };

  if (
    snakeBody.some(
      (bodyItem) => bodyItem.x === appleItem.x && bodyItem.y === appleItem.y,
    )
  ) {
    return getRandomApple(snakeBody, cellQuantity);
  }

  return appleItem;
}
