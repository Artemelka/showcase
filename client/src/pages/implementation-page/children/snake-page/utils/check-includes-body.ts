import { SnakeBodyItem } from '../types';

export function checkIncludesBody(nextHead: SnakeBodyItem, snakeBody: Array<SnakeBodyItem> ): boolean {
  return snakeBody.some(bodyItem => bodyItem.x === nextHead.x && bodyItem.y === nextHead.y);
}