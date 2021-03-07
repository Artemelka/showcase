import { SnakeBodyItem } from '../types';

export function checkApplePosition(appleItem: SnakeBodyItem, head: SnakeBodyItem): boolean {
  return appleItem.x === head.x && appleItem.y === head.y;
}